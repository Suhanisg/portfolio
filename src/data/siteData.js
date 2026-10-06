export const profile = {
  name: 'Suhani Goyal',
  role: 'Full Stack Developer | UI/UX Designer',
  tagline: 'Full Stack Developer | React.js | Node.js | MongoDB',
  location: 'Aligarh, Uttar Pradesh, India',
  email: 'suhugoyal@gmail.com',
  phone: '+91-9528633710',
  linkedin: 'https://www.linkedin.com/in/suhanisg',
  github: 'https://github.com/Suhanisg',
  resume: 'https://drive.google.com/file/d/1FRFd4Gr3UVaAhOTo928gawtlo7ne4_wG/view?usp=sharing',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const highlights = [
  {
    index: '01',
    title: 'B.Tech in Computer Science',
    detail: 'GLA University',
  },
  {
    index: '02',
    title: 'Software Development Internship',
    detail: 'Leadbug',
  },
  {
    index: '03',
    title: 'Frontend & Full Stack Development',
    detail: 'React • Node • MongoDB',
  },
]

export const experiences = [
  {
    id: 'leadbug',
    role: 'Software Development Intern',
    company: 'Leadbug (Shashi Sales & Marketing)',
    period: 'Apr 2026 – Aug 2026',
    summary:
      'Worked on a real-world lead management and marketing platform, contributing to frontend development, UI implementation, API integration and responsive product features.',
    responsibilities: [
      'Translated Figma UI/UX designs into reusable React components.',
      'Developed responsive interfaces for desktop and mobile.',
      'Worked on Contacts, Segments, Analytics, Admin Panel and Developer Approvals.',
      'Implemented dynamic filtering, profile views, form submissions and interactive UI functionality.',
      'Integrated frontend interfaces with Node.js and Express.js backend services through REST APIs.',
      'Debugged UI and API issues and improved application responsiveness.',
      'Used Git and GitHub for collaborative development.',
    ],
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Figma', 'Git', 'GitHub'],
    experienceLetter: 'https://drive.google.com/file/d/1Xl1pVqzCukbhSi8ut81Y8HYigm42k1QL/view?usp=sharing',
  },
  {
    id: 'placify',
    role: 'AI Intern',
    company: 'Placify Technologies',
    period: 'Jun 2024 – Jul 2024',
    summary:
      'Developed a stock price prediction tool using Python and machine learning, working with API-based data collection and predictive modeling.',
    responsibilities: [
      'Developed a Stock Price Prediction Tool using Python and machine learning algorithms including Linear Regression and LSTM.',
      'Collected and preprocessed API-based data and developed predictive models with reported accuracy of up to 85%.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'scikit-learn', 'LSTM'],
  },
]

export const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Hooks', 'Vite', 'Responsive Web Design'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'CRUD Operations'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'MongoDB Compass'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'WebStorm'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI Design', 'Responsive UI', 'Figma-to-Development', 'Interface Design'],
  },
]

export const projects = [
  {
    id: 'resin-creations',
    number: '01',
    title: 'Resin Creations',
    category: 'Client / E-commerce Project',
    description:
      'An e-commerce website designed and developed for a handcrafted resin products business, featuring product categories, personalized products, wishlist functionality, WhatsApp ordering and an admin panel for product management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    features: [
      'Responsive e-commerce UI',
      'Product and category management',
      'Subcategory management',
      'Admin authentication',
      'Product image uploads',
      'Wishlist',
      'Product details',
      'WhatsApp ordering',
      'Custom order section',
      'Responsive mobile design',
    ],
    image: '/images/resinPhoto.png',
    github: 'https://github.com/Suhanisg/resin-website',
    demo: 'https://resinbyme.vercel.app/',
    featured: true,
  },
  {
    id: 'expense-tracker',
    number: '02',
    title: 'Expense Tracker',
    category: 'Full-Stack Project',
    description:
      'A responsive finance management application for tracking income, expenses, categories and spending trends.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: [
      'Income and expense tracking',
      'Categories',
      'Interactive charts',
      'REST APIs',
      'JWT authentication',
      'CSV report export',
      'Responsive interface',
    ],
    image: '/images/expense-tracker.png',
    github: 'https://github.com/Suhanisg/Expense_Tracker',
    demo: null,
    featured: true,
  },
  {
    id: 'elearning',
    number: '03',
    title: 'E-Learning Website',
    category: 'Full-Stack Project',
    description:
      'A full-stack e-learning platform designed for course browsing, user authentication, interactive content and course enrollment.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    features: [
      'User authentication',
      'Course browsing',
      'Search and filtering',
      'Responsive UI',
      'Course enrollment',
      'MongoDB data storage',
      'Razorpay test-mode payment integration',
    ],
    image: '/images/elearning.png',
    github: 'https://github.com/Suhanisg/E-learning-Website',
    demo: null,
    featured: true,
  },
  {
    id: 'leadbug',
    number: '04',
    title: 'Leadbug / OMT',
    category: 'Real-world Internship Project',
    description:
      'A real-world lead management and marketing platform that I contributed to during my software development internship.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Figma'],
    features: [
      'Admin Panel',
      'Contacts',
      'Segments',
      'Analytics',
      'Developer Approvals',
      'Responsive UI',
      'Dynamic filtering',
      'Profile views',
      'API integration',
    ],
    image: '/images/leadbug.png',
    github: null,
    demo: null,
  },
  {
    id: 'stock-prediction',
    number: '05',
    title: 'Stock Price Prediction Tool',
    category: 'Machine Learning Project',
    description:
      'A machine learning project for forecasting stock prices using historical and API-based data.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'scikit-learn', 'LSTM'],
    features: [
      'Data preprocessing',
      'Machine learning models',
      'LSTM',
      'Linear Regression',
      'Data visualization',
      'Model comparison',
    ],
    image: '/images/stock-prediction.png',
    github: 'https://github.com/Suhanisg/Stock_Price_Prediction',
    demo: null,
    secondary: true,
  },
]

export const services = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Modern responsive websites designed around your business and brand.',
  },
  {
    id: 'ecommerce-websites',
    title: 'E-commerce Websites',
    description: 'Product-focused websites with clean shopping experiences and easy customer interaction.',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    description: 'Interactive web applications built with modern frontend and backend technologies.',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Clean and user-friendly interfaces designed with usability and visual consistency in mind.',
  },
]

export const uiuxWork = [
  {
    id: 'leadbug-ui',
    title: 'Leadbug UI Screens',
    focus: 'Product interface implementation',
    tools: 'Figma • Responsive UI • Product Interface',
    image: '/images/ui-01.png',
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Interface',
    focus: 'Layout adaptation across breakpoints',
    tools: 'Figma • CSS Grid • Responsive UI',
    image: '/images/ui-02.png',
  },
  {
    id: 'elearning-ui',
    title: 'E-Learning UI',
    focus: 'Course browsing & enrollment flows',
    tools: 'Figma • Interface Design',
    image: '/images/ui-03.png',
  },
  {
    id: 'resin-art-ui',
    title: 'Resin Art Studio Website',
    focus: 'Personal brand & product showcase',
    tools: 'Figma • React • Visual Design',
    image: '/images/ui-04.png',
  },
]

export const certifications = [
  {
    id: 'mongodb',
    name: 'MongoDB Database Certification',
    issuer: 'MongoDB',
    url: 'https://drive.google.com/file/d/1PHxReOIkh83hLDGzTGin7z59HnUV7RH5/view?usp=sharing',
  },
  {
    id: 'ccna',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/14zIGnSPkGpjJCPiHh3MkmPGuILwxEOmw/view?usp=sharing',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions: The Complete Guide',
    issuer: 'Udemy',
    url: 'https://drive.google.com/file/d/1Ko4bioqm86idzkfATvHzY4pXXMF9uyqM/view?usp=sharing',
  },
  {
    id: 'ai-internship',
    name: 'Artificial Intelligence Internship Certificate',
    issuer: 'Placify Technologies',
    url: '#', // TODO: replace with your certificate link
  },
]