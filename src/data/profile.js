// Central source of truth for all portfolio content.
// Pulled directly from Kuldeep Kumar's resume — edit here to update the whole site.

export const profile = {
  name: 'Kuldeep Kumar',
  role: 'Data Analyst',
  roles: ['Data Analyst', 'Python Developer', 'SQL Specialist', 'Insight Builder'],
  location: 'Flat No. 1102, 11th Avenue, Gaur City 2, Greater Noida, UP',
  phone: '+91 7579889544',
  phone2: '+91 8265973184',
  email: 'kuldeep7579889544@gmail.com',
  summary:
    "Detail-oriented and analytical Computer Science & Engineering student specializing in Data Analytics. Skilled in converting raw, complex datasets into clear, actionable business insights using Python, SQL, Power BI, and interactive MS Excel dashboards. Possesses a strong academic foundation in relational database management systems (DBMS), query optimization, and statistical data modeling, eager to contribute analysis and optimization skills to an impact-driven data team.",
  shortBio:
    "Final-year CSE student who finds signal in noisy data. I clean it, model it, and turn it into dashboards people actually use.",
  resumeFile: '/resume/KULDEEP_Data_Analyst_Resume.pdf',
  social: {
    github: 'https://github.com/Kuldeep7579',
    linkedin: 'https://www.linkedin.com/in/kuldeep-kumar-5806b6282/',
    whatsapp: 'https://wa.me/917579889544',
    email: 'mailto:kuldeep7579889544@gmail.com',
    leetcode: 'https://leetcode.com/Kuldeep7579',
  },
};

export const stats = [
  { label: 'Projects Completed', value: 7, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
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
      { name: 'Power BI', level: 78 },
      { name: 'MS Excel (Advanced)', level: 90 },
      { name: 'Pivot Tables & Slicers', level: 88 },
      { name: 'Git / GitHub', level: 75 },
    ],
  },
  {
    title: 'Core Methodologies',
    skills: [
      { name: 'Data Cleaning', level: 90 },
      { name: 'EDA', level: 85 },
      { name: 'Statistical Analysis', level: 80 },
      { name: 'KPI Tracking', level: 82 },
    ],
  },
];

// Flat list used for marquee / orbiting tech logos
export const techStack = [
  'Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'Power BI', 'MS Excel', 'MySQL', 'DBMS', 'Git', 'GitHub', 'Java',
  'Data Cleaning', 'EDA', 'KPI Tracking', 'Statistics',
];

export const projects = [
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-Commerce Sales Customer Analytics',
    year: '2026',
    description:
      'Cleaned and analyzed transactional retail data to surface KPIs and regional revenue trends, turning a messy raw dataset into a clear story about where revenue opportunities live.',
    longDescription:
      'Preprocessed transactional retail datasets using Pandas — handling nulls, standardizing schemas, and removing duplicates. Ran exploratory data analysis to map key performance indicators and regional revenue trends, visualizing patterns with Matplotlib and Seaborn to deliver strategic insight for business decisions.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'Data Analytics',
    github: 'https://github.com/Kuldeep7579/E-Commerce-Sales-Customer-Analytics',
    demo: '',
    metrics: [
      { label: 'Dataset rows cleaned', value: '50K+' },
      { label: 'KPIs tracked', value: '8' },
    ],
  },
  {
    id: 'data-analysis-with-python',
    title: 'Data Analysis with Python',
    year: '2026',
    description: 'A Python-based collection of data cleaning, exploration, and visualization workflows for turning raw datasets into useful insights.',
    longDescription: 'Explored and analyzed real-world datasets with Python, using Pandas and visualization libraries to clean data, find patterns, and communicate findings clearly.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'Data Analytics',
    github: 'https://github.com/Kuldeep7579/data-analysis-with-python',
    demo: '',
    metrics: [
      { label: 'Analysis', value: 'Python' },
      { label: 'Focus', value: 'Insights' },
    ],
  },
  {
    id: 'netflix-data-analytics-powerbi',
    title: 'Netflix Data Analytics Power BI',
    year: '2026',
    description: 'A Power BI analytics project that explores Netflix content, genres, ratings, and trends through interactive dashboards.',
    longDescription: 'Analyzed Netflix titles and content trends in Power BI, shaping the data into interactive reports that make genre, rating, release, and catalog patterns easy to explore.',
    tech: ['Power BI', 'Data Analytics', 'Dashboard'],
    category: 'Dashboard',
    github: 'https://github.com/Kuldeep7579/Netflix-Data-Analytics-PowerBI',
    demo: '',
    metrics: [
      { label: 'Tool', value: 'Power BI' },
      { label: 'Format', value: 'Interactive' },
    ],
  },
  {
    id: 'kuldeep7579',
    title: 'Kuldeep7579',
    year: '2026',
    description: 'A collection of development and analytics work published on GitHub.',
    longDescription: 'A central repository for selected experiments, learning work, and project resources built while developing data and software skills.',
    tech: ['GitHub', 'Python', 'Data Analytics'],
    category: 'Data Analytics',
    github: 'https://github.com/Kuldeep7579/Kuldeep7579',
    demo: '',
    metrics: [
      { label: 'Type', value: 'Portfolio' },
      { label: 'Platform', value: 'GitHub' },
    ],
  },
  {
    id: 'data-flow',
    title: 'Data Flow',
    year: '2026',
    description: 'A project focused on organizing and moving data through a clear, repeatable workflow.',
    longDescription: 'Built a practical data workflow project to structure processing steps and make the path from source data to output easier to follow.',
    tech: ['Python', 'Data Flow', 'Analytics'],
    category: 'Data Analytics',
    github: 'https://github.com/Kuldeep7579/data-flow',
    demo: '',
    metrics: [
      { label: 'Focus', value: 'Workflow' },
      { label: 'Platform', value: 'GitHub' },
    ],
  },
  {
    id: 'kk-portfolio',
    title: 'KK Portfolio',
    year: '2026',
    description: 'This responsive portfolio website, built to present analytics projects, skills, and experience.',
    longDescription: 'A React and Vite portfolio experience bringing together project work, technical skills, professional experience, and contact details in one interactive site.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Dashboard',
    github: 'https://github.com/Kuldeep7579/kk-portfolio',
    demo: '',
    metrics: [
      { label: 'Framework', value: 'React' },
      { label: 'Build tool', value: 'Vite' },
    ],
  },
  {
    id: 'win-10',
    title: 'Win 10',
    year: '2026',
    description: 'A Windows 10 themed project exploring desktop-style interface and interaction concepts.',
    longDescription: 'A hands-on interface project inspired by Windows 10, created to practice layout, controls, and desktop interaction patterns.',
    tech: ['JavaScript', 'UI', 'Windows 10'],
    category: 'Dashboard',
    github: 'https://github.com/Kuldeep7579/win-10',
    demo: '',
    metrics: [
      { label: 'Theme', value: 'Windows' },
      { label: 'Type', value: 'UI Project' },
    ],
  },
];

export const projectFilters = ['All', 'Data Analytics', 'Database', 'Dashboard'];

export const education = {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  institution: 'Vision Institute of Technology, Aligarh, Uttar Pradesh',
  duration: '2022 – 2026',
  cgpa: '6.5+ / 10',
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
    subtitle: 'Vision Institute of Technology, Aligarh',
    description:
      'Completing B.Tech CSE (2022–2026) while building real-world data analytics projects using Python, SQL, Power BI, and Excel.',
    tag: 'Current',
  },
  {
    year: '2026',
    title: 'Python & SQL Certifications',
    subtitle: 'Code With Harry',
    description:
      'Completed certifications in Python for Data Analysis & Visualization and Mastering SQL & Relational Databases.',
    tag: 'Certification',
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
    description: 'Built an interactive Excel + Power BI dashboard with pivot tables and slicers for regional KPI tracking.',
    tag: 'Project',
  },
  {
    year: '2025',
    title: 'Advanced Excel for Data Analytics',
    subtitle: 'Self-Guided',
    description: 'Completed self-guided advanced Excel training covering VLOOKUP, INDEX/MATCH, Pivot Tables, and dashboards.',
    tag: 'Certification',
  },
  {
    year: '2024',
    title: 'Diploma in Laptop Hardware & Repairing',
    subtitle: 'Multitech Institute of Advance Technologies Pvt. Ltd.',
    description: 'Completed 4-month hands-on diploma in computer hardware, troubleshooting, assembly, and technical support.',
    tag: 'Certification',
  },
  {
    year: '2022',
    title: 'Started B.Tech CSE',
    subtitle: 'Vision Institute of Technology, Aligarh',
    description: 'Began Computer Science & Engineering degree, building a foundation in DSA, DBMS, OOP, and Applied Statistics.',
    tag: 'Education',
  },
];

export const certifications = [
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis & Visualization',
    issuer: 'Code With Harry',
    year: '2026',
    description:
      'Completed a comprehensive course covering Python for data analysis and visualization using Pandas, NumPy, Matplotlib, and Seaborn — with hands-on projects on real datasets.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    icon: 'BarChart2',
    color: 'signal',
  },
  {
    id: 'sql-dbms',
    title: 'Mastering SQL & Relational Databases (DBMS)',
    issuer: 'Code With Harry',
    year: '2026',
    description:
      'Mastered SQL and relational database concepts including joins, aggregations, subqueries, query optimization, database normalization, and schema design.',
    skills: ['SQL', 'DBMS', 'Joins', 'Aggregations', 'Query Optimization'],
    icon: 'Database',
    color: 'confirm',
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel for Data Analytics',
    issuer: 'Self-Guided',
    year: '2025',
    description:
      'Self-guided study of advanced Excel techniques including VLOOKUP, INDEX/MATCH, Pivot Tables, dynamic slicers, conditional formatting, and interactive dashboard creation.',
    skills: ['Excel', 'Pivot Tables', 'VLOOKUP', 'INDEX/MATCH', 'Dashboards'],
    icon: 'Table',
    color: 'signal',
  },
  {
    id: 'laptop-hardware',
    title: 'Diploma in Laptop Hardware & Repairing',
    issuer: 'Multitech Institute of Advance Technologies Pvt. Ltd.',
    year: '2024',
    description:
      'Completed 4-month diploma training in laptop hardware covering computer components, hardware troubleshooting, maintenance, assembly, and technical support.',
    skills: ['Hardware', 'Troubleshooting', 'Maintenance', 'Assembly', 'Tech Support'],
    icon: 'Cpu',
    color: 'confirm',
  },
];

export const services = [
  {
    title: 'Data Cleaning',
    description:
      'Cleaning and preparing raw datasets by handling missing values, duplicates, incorrect data types, formatting issues, and inconsistent data.',
    icon: 'FilterX',
  },
  {
    title: 'Data Validation',
    description:
      'Validating datasets to ensure data accuracy, consistency, completeness, and reliability before analysis.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Exploratory Data Analysis',
    description:
      'Analyzing datasets to identify patterns, trends, relationships, insights, and important business information.',
    icon: 'Search',
  },
  {
    title: 'Data Analysis',
    description:
      'Analyzing structured and unstructured data to extract meaningful insights and support data-driven decision-making.',
    icon: 'LineChart',
  },
  {
    title: 'Data Visualization',
    description:
      'Creating clear and interactive visualizations, charts, graphs, and dashboards to communicate insights effectively.',
    icon: 'PieChart',
  },
  {
    title: 'SQL Analysis',
    description:
      'Using SQL for data querying, filtering, joining tables, aggregating data, and generating business insights.',
    icon: 'Database',
  },
  {
    title: 'Python for Data Analytics',
    description:
      'Using Python and relevant libraries for data cleaning, analysis, automation, and visualization.',
    icon: 'Code2',
  },
  {
    title: 'Dashboard Development',
    description:
      'Creating interactive and professional dashboards using tools such as Power BI and Excel.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Excel Data Analysis',
    description:
      'Using Excel for data cleaning, analysis, formulas, PivotTables, charts, and reporting.',
    icon: 'Table',
  },
  {
    title: 'Business Insights & Reporting',
    description:
      'Transforming raw data into meaningful insights, reports, KPIs, and actionable recommendations.',
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
