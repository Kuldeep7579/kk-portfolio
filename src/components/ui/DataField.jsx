import { useEffect, useRef } from 'react';

/**
 * DataField — the portfolio's signature ambient background.
 * A sparse field of drifting points that connect with faint lines when
 * close together — like a live, breathing scatter/correlation plot.
 * The whole field reacts to the mouse: nearby nodes get pulled gently
 * toward the cursor and their links glow brighter, while the cursor
 * itself acts like an extra node in the network.
 *
 * Pass `fixed` to make it cover the full viewport and stay put while
 * the page scrolls (used as the site-wide background network).
 */
export default function DataField({ density = 0.00016, className = '', fixed = false }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = window.devicePixelRatio || 1;

    let width, height, points;

    const init = () => {
      const w = fixed ? window.innerWidth : canvas.offsetWidth;
      const h = fixed ? window.innerHeight : canvas.offsetHeight;
      width = canvas.width = w * dpr;
      height = canvas.height = h * dpr;

      const count = Math.min(Math.floor(width * height * density), fixed ? 160 : 90);
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        // base drift velocity — nodes always wander a little on their own
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
        r: (Math.random() * 1.2 + 0.6) * dpr,
      }));
    };

    const linkDistance = 140 * dpr;
    const mouseRadius = 220 * dpr;
    const pull = 0.035; // how strongly nodes lean toward the cursor

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      // update positions
      if (!prefersReducedMotion) {
        points.forEach((p) => {
          // ambient drift
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // gentle pull toward cursor when within range
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseRadius && dist > 0.001) {
              const force = (1 - dist / mouseRadius) * pull;
              p.x += dx * force;
              p.y += dy * force;
            }
          }
        });
      }

      // draw connecting lines between nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            // links near the cursor glow brighter
            let boost = 0;
            if (mouse.active) {
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const dMouse = Math.hypot(mouse.x - midX, mouse.y - midY);
              if (dMouse < mouseRadius) boost = (1 - dMouse / mouseRadius) * 0.35;
            }
            const opacity = (1 - dist / linkDistance) * 0.18 + boost;
            ctx.strokeStyle = `rgba(124, 158, 255, ${Math.min(opacity, 0.55)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // connect cursor itself to nearby nodes, like an extra live node
        if (mouse.active) {
          const a = points[i];
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const opacity = (1 - dist / mouseRadius) * 0.45;
            ctx.strokeStyle = `rgba(159, 184, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // draw points
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(159, 184, 255, 0.55)';
        ctx.fill();
      });

      // draw the cursor node itself, glowing
      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 14 * dpr);
        glow.addColorStop(0, 'rgba(124, 158, 255, 0.9)');
        glow.addColorStop(1, 'rgba(124, 158, 255, 0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.2 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 234, 240, 0.9)';
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    init();
    draw();

    const handleResize = () => {
      init();
      if (prefersReducedMotion) draw();
    };

    const handlePointerMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (e.clientY - rect.top) * dpr,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('mouseleave', handlePointerLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`${fixed ? 'fixed inset-0 w-screen h-screen' : 'absolute inset-0 w-full h-full'} pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
