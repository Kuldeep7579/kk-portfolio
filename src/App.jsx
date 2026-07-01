import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import DataField from './components/ui/DataField';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Stats from './components/sections/Stats';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />

      {/* Site-wide animated network background — fixed behind every section */}
      <div className="fixed inset-0 -z-10 bg-void">
        <DataField fixed />
      </div>

      <Navbar />
      <main className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        {/* More sections added incrementally: Certifications, Services, Testimonials, Contact, Footer */}
      </main>
    </ThemeProvider>
  );
}

export default App;
