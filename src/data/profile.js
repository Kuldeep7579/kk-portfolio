// Central source of truth for all portfolio content.
// Pulled directly from Kuldeep Kumar's resume — edit here to update the whole site.

export const profile = {
  name: 'Kuldeep Kumar',
  role: 'Data Analyst',
  roles: ['Data Analyst', 'Python Developer', 'SQL Specialist', 'Insight Builder'],
  location: 'Aligarh, Uttar Pradesh, India',
  phone: '+91 7579889544',
  email: 'kuldeep7579889544@gmail.com',
  summary:
    "Detail-oriented and analytical Computer Science & Engineering student specializing in Data Analytics. I turn raw, messy datasets into clear, actionable business insight using Python, SQL, and interactive Excel dashboards — backed by a strong academic foundation in relational databases, query optimization, and statistical modeling.",
  shortBio:
    "Final-year CSE student who finds signal in noisy data. I clean it, model it, and turn it into dashboards people actually use.",
  resumeFile: '/resume/KULDEEP_Data_Analyst_Resume.pdf',
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    whatsapp: 'https://wa.me/917579889544',
    email: 'mailto:kuldeep7579889544@gmail.com',
    leetcode: 'https://leetcode.com/your-username',
  },
};

export const stats = [
  { label: 'Projects Completed', value: 6, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '' },
  { label: 'GitHub Repositories', value: 12, suffix: '+' },
  { label: 'Technologies Learned', value: 18, suffix: '+' },
];

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    title: 'Data Analysis & Libraries',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 78 },
      { name: 'Seaborn', level: 78 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'DBMS / Normalization', level: 80 },
      { name: 'Query Optimization', level: 75 },
    ],
  },
  {
    title: 'Visualization & Tools',
    skills: [
      { name: 'MS Excel (Advanced)', level: 90 },
      { name: 'Pivot Tables & Slicers', level: 88 },
      { name: 'Git / GitHub', level: 75 },
    ],
  },
];

// Flat list used for marquee / orbiting tech logos
export const techStack = [
  'Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'MS Excel', 'MySQL', 'DBMS', 'Git', 'GitHub', 'Java', 'Statistics',
];

export const projects = [
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-Commerce Sales Performance Analysis',
    year: '2026',
    description:
      'Cleaned and analyzed transactional retail data to surface KPIs and regional revenue trends, turning a messy raw dataset into a clear story about where revenue opportunities live.',
    longDescription:
      'Preprocessed transactional retail datasets using Pandas — handling nulls, standardizing schemas, and removing duplicates. Ran exploratory data analysis to map key performance indicators and regional revenue trends, visualizing patterns with Matplotlib and Seaborn to deliver strategic insight for business decisions.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'Data Analytics',
    github: 'https://github.com/your-username/ecommerce-sales-analysis',
    demo: '',
    metrics: [
      { label: 'Dataset rows cleaned', value: '50K+' },
      { label: 'KPIs tracked', value: '8' },
    ],
  },
  {
    id: 'retail-inventory-db',
    title: 'Retail Inventory Database Design',
    year: '2026',
    description:
      'Designed a 3NF-normalized relational schema for retail inventory and wrote optimized SQL to pull stock levels and supplier metrics fast.',
    longDescription:
      'Designed and implemented a normalized (3NF) relational database schema for a retail model to reduce data redundancy and maintain referential integrity. Wrote and optimized complex SQL queries — joins, group-by aggregations, subqueries — for instant inventory lookups, cutting data extraction latency for product catalogs and supplier metrics.',
    tech: ['SQL', 'MySQL', 'DBMS'],
    category: 'Database',
    github: 'https://github.com/your-username/retail-inventory-db',
    demo: '',
    metrics: [
      { label: 'Normal form', value: '3NF' },
      { label: 'Query speedup', value: 'Optimized' },
    ],
  },
  {
    id: 'regional-demographics-dashboard',
    title: 'Regional Demographics Dashboard',
    year: '2025',
    description:
      'An interactive Excel executive dashboard with pivot tables, dynamic slicers, and conditional formatting that automated monthly regional reporting.',
    longDescription:
      'Consolidated messy, unstructured demographic datasets using advanced Excel lookup functions (INDEX/MATCH, VLOOKUP) and nested logical conditions. Engineered an interactive executive dashboard with functional pivot tables, dynamic slicers, and conditional formatting to monitor key regional indicators — streamlining monthly reporting and cutting manual data-entry effort.',
    tech: ['MS Excel', 'Pivot Tables', 'INDEX/MATCH'],
    category: 'Dashboard',
    github: 'https://github.com/your-username/regional-demographics-dashboard',
    demo: '',
    metrics: [
      { label: 'Manual effort cut', value: 'Major' },
      { label: 'Refresh', value: 'Monthly' },
    ],
  },
];

export const projectFilters = ['All', 'Data Analytics', 'Database', 'Dashboard'];

export const education = {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  institution: 'Vision Institute of Technology, Aligarh, Uttar Pradesh',
  duration: '2022 – 2026',
  cgpa: '7+ / 10',
  coursework: [
    'Database Management Systems (DBMS)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Applied Statistics',
  ],
};

export const timeline = [
  {
    year: '2026',
    title: 'Final Year B.Tech CSE',
    subtitle: 'Vision Institute of Technology',
    description:
      'Completing my degree while building real-world data analytics projects in Python and SQL, and learning the MERN stack on the side.',
    tag: 'Current',
  },
  {
    year: '2026',
    title: 'E-Commerce Sales Performance Analysis',
    subtitle: 'Independent Project',
    description: 'Built an end-to-end EDA pipeline on retail transaction data using Pandas, Matplotlib, and Seaborn.',
    tag: 'Project',
  },
  {
    year: '2026',
    title: 'Retail Inventory Database Design',
    subtitle: 'Independent Project',
    description: 'Designed a normalized 3NF schema and optimized SQL queries for fast inventory retrieval.',
    tag: 'Project',
  },
  {
    year: '2025',
    title: 'Regional Demographics Dashboard',
    subtitle: 'Independent Project',
    description: 'Built an interactive Excel dashboard with pivot tables and slicers for regional KPI tracking.',
    tag: 'Project',
  },
  {
    year: '2022',
    title: 'Started B.Tech CSE',
    subtitle: 'Vision Institute of Technology',
    description: 'Began my Computer Science & Engineering degree, laying the foundation in DSA, DBMS, and statistics.',
    tag: 'Education',
  },
];

export const certifications = [
  {
    title: 'Python for Data Analysis & Visualization',
    issuer: 'Code With Harry',
    year: '2026',
    skills: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Mastering SQL & Relational Databases (DBMS)',
    issuer: 'Code With Harry',
    year: '2026',
    skills: ['SQL', 'DBMS', 'Joins & Aggregations'],
  },
  {
    title: 'Advanced Excel for Data Analytics',
    issuer: 'Self-Guided',
    year: '2025',
    skills: ['Excel', 'Pivot Tables', 'Dashboards'],
  },
];

export const services = [
  {
    title: 'Data Cleaning & EDA',
    description: 'Turning raw, inconsistent datasets into clean, analysis-ready data with clear exploratory insight.',
    icon: 'Sparkles',
  },
  {
    title: 'SQL & Database Design',
    description: 'Normalized schema design and optimized queries — joins, aggregations, subqueries — built for speed.',
    icon: 'Database',
  },
  {
    title: 'Dashboard Development',
    description: 'Interactive Excel dashboards with pivot tables, slicers, and conditional formatting for KPI tracking.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Statistical Analysis',
    description: 'Applied statistics to validate trends and back business decisions with evidence, not guesswork.',
    icon: 'TrendingUp',
  },
];

export const testimonials = [
  {
    name: 'Faculty Mentor',
    role: 'DBMS Course Instructor, Vision Institute of Technology',
    quote:
      'Kuldeep consistently approached database design problems with a level of rigor beyond the coursework — his normalization work was genuinely production-grade thinking.',
  },
  {
    name: 'Project Collaborator',
    role: 'Peer, B.Tech CSE',
    quote:
      'He has a habit of asking "what does this number actually mean for the business" before writing a single line of code. That instinct is rare.',
  },
  {
    name: 'Code With Harry Cohort',
    role: 'Fellow Learner',
    quote:
      'Watched him debug a gnarly SQL subquery live — calm, methodical, and he explained the fix in a way that made the whole group understand it better.',
  },
];

export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
