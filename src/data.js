// ✏️ Edit this file to update your portfolio content.

export const profile = {
  name: 'Harshavardhan Yanamadala',
  initials: 'HY',
  title: 'Java Full-Stack Developer',
  email: 'yanamadalahv@gmail.com',
  phone: '+1 (940) 536-4497',
  linkedin: 'https://www.linkedin.com/in/harsha-yanamadala-a93421201',
  linkedinHandle: 'harsha-yanamadala',
  typedWords: [
    'scalable Spring Boot services.',
    'React & Angular apps.',
    'enterprise Java systems.',
    'AI-powered workflows.',
  ],
}

export const stats = [
  { value: 7, suffix: '+', label: 'Years experience' },
  { value: 4, suffix: '+', label: 'Companies' },
  { value: 40, suffix: '+', label: 'Technologies' },
  { text: 'M.S.', label: 'Data Engineering' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const highlights = [
  'Java & Spring Boot', 'React.js & Redux',
  'Angular & RxJS', 'Hibernate / HQL',
  'Apache Spark', 'AWS & Jenkins',
  'Oracle & PostgreSQL', 'Gen AI & RAG',
]

export const skills = [
  { icon: 'Jv', title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Node.js'] },
  { icon: 'Be', title: 'Java / Backend', items: ['Core Java', 'Multithreading', 'Spring', 'Spring Boot', 'Hibernate', 'HQL', 'REST', 'Servlets', 'JSP', 'JSF', 'Maven'] },
  { icon: 'Fe', title: 'Frontend', items: ['React', 'Redux', 'Angular', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Material-UI', 'Express'] },
  { icon: 'Db', title: 'Database / SQL', items: ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'PL/SQL', 'Stored Procedures', 'Triggers'] },
  { icon: 'Bd', title: 'Big Data', items: ['Apache Spark', 'Spark SQL', 'Distributed Processing'] },
  { icon: 'Ai', title: 'Gen AI', items: ['OpenAI API', 'AWS Bedrock', 'Prompt Engineering', 'RAG', 'GitHub Copilot'] },
  { icon: 'Cl', title: 'Cloud / DevOps', items: ['AWS EC2', 'S3', 'Lambda', 'CloudFront', 'Jenkins CI/CD', 'GitHub', 'GitLab', 'Bitbucket', 'Jira'] },
  { icon: 'Ts', title: 'Testing / API Tools', items: ['JUnit', 'Mockito', 'Spring Test', 'Jest', 'Selenium', 'Postman', 'SoapUI', 'JMeter', 'LoadRunner'] },
  { icon: 'Sv', title: 'App Servers', items: ['Apache Tomcat', 'JBoss', 'WebLogic', 'IBM WebSphere'] },
]

export const jobs = [
  {
    company: 'Optum',
    title: 'Java Full Stack Developer',
    date: 'Aug 2024 – Present',
    location: 'Eden Prairie, MN',
    projectName: 'MBMNOW, WHG, Loyalty',
    project: 'healthcare authorization platform for Optum nurses (BCBS of South Carolina, Optum Care, RxBenefits/UMR, UHG) and Women’s Health Group nursing for critical pregnancy.',
    points: [
      'Built reusable, responsive React.js components and dashboards for healthcare authorization workflows, integrated with Spring Boot REST APIs.',
      'Implemented Redux, Redux Thunk/Saga middleware, normalized stores and memoized selectors for scalable, performant state management.',
      'Migrated legacy Angular/JSP functionality to React.js as part of front-end modernization.',
      'Developed Spring Boot services with Core Java, multithreading and Hibernate ORM; used Apache Spark to process large healthcare datasets.',
      'Wrote Oracle SQL, schemas, PL/SQL stored procedures and triggers.',
      'Deployed on AWS (EC2, S3, Lambda, CloudFront) and maintained Jenkins CI/CD pipelines with automated build → test → deploy and rollback.',
      'Integrated Gen AI (AWS Bedrock / OpenAI) with prompt engineering and RAG for document summarization and AI-assisted authorization review.',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'Spring Boot', 'Hibernate', 'Spark', 'Oracle', 'AWS', 'Jenkins', 'Bedrock', 'RAG'],
  },
  {
    company: 'Zensar',
    title: 'Software Engineer',
    date: 'Jun 2021 – Aug 2022',
    location: 'Zensar Technologies',
    projectName: 'Smart Assistant Technologies',
    project: 'intelligent assistant platform with NLP, task automation and AI-powered suggestions.',
    points: [
      'Created reusable components with AngularJS custom directives and robust validation using ngMessages and custom validators.',
      'Used dependency injection, services and factories for modular, testable code.',
      'Managed async data with Promises, RxJS Observables and async/await.',
      'Implemented JWT/OAuth authentication and role-based access control.',
      'Built backend services with Core Java, Spring Boot, Hibernate and REST; used Apache Spark for analytics data pipelines.',
    ],
    tech: ['AngularJS', 'TypeScript', 'RxJS', 'Node.js', 'Java', 'Spring Boot', 'Hibernate', 'Spark'],
  },
  {
    company: 'Arorian',
    title: 'Full Stack Developer',
    date: 'Apr 2019 – May 2021',
    location: 'Arorian Technologies',
    projectName: 'Wiscode',
    project: 'corporate enrollment system for payroll, onboarding, attendance, performance, benefits and leave management.',
    points: [
      'Developed interactive ReactJS single-page applications with React Router navigation.',
      'Designed dynamic web forms with complex validations for reliable data entry.',
      'Refactored legacy code into modular, reusable React components.',
      'Built Core Java / Spring Boot / Hibernate services with multithreading and Spark-based data transformation.',
      'Implemented role-based access and integrated third-party payroll and performance services.',
    ],
    tech: ['ReactJS', 'JavaScript', 'Java', 'Spring Boot', 'Hibernate', 'MongoDB', 'Oracle', 'AWS'],
  },
  {
    company: 'Nityo · BCBS',
    title: 'Software Developer',
    date: 'Aug 2017 – Mar 2019',
    location: 'Nityo Infotech — Blue Cross Blue Shield',
    projectName: 'Corporate Enrollment System',
    project: 'internal platform managing corporate and employee data for health insurance enrollment.',
    points: [
      'Translated business requirements into technical solutions with cross-functional teams.',
      'Developed secure login/registration with ReactJS and Node.js using JWT authentication.',
      'Designed RESTful APIs with Node.js and Express; managed data with Oracle and complex SQL.',
      'Built Core Java and Spring Boot REST services with multithreading and Spark processing.',
      'Worked with QA to resolve defects and delivered in Agile sprints using Git.',
    ],
    tech: ['ReactJS', 'Node.js', 'Express', 'JWT', 'Java', 'Spring Boot', 'Oracle', 'Git'],
  },
]

export const projects = [
  {
    badge: '{ AI }',
    title: 'AI-Assisted Authorization Review',
    company: 'Optum · 2024 – Present',
    description: 'Integrated LLM APIs (AWS Bedrock / OpenAI) with RAG and prompt engineering to summarize clinical documents and help nurses retrieve policy information and draft authorization responses.',
    tech: ['AWS Bedrock', 'OpenAI', 'RAG', 'Spring Boot'],
  },
  {
    badge: '{ MBM }',
    title: 'MBMNOW Authorization Platform',
    company: 'Optum · BCBS SC, UMR, UHG',
    description: 'Healthcare authorization platform where Optum nurses review work queues and make decisions. Built React dashboards with Redux, Spring Boot REST services, and migrated legacy Angular/JSP modules to React.',
    tech: ['React', 'Redux Saga', 'Java', 'Oracle'],
  },
  {
    badge: '{ WHG }',
    title: "Women's Health Group",
    company: 'Optum',
    description: 'Nursing support application for critical pregnancy care, with reusable React components, Spark-based processing of large healthcare datasets, and deployment on AWS EC2, S3, Lambda and CloudFront.',
    tech: ['React', 'Apache Spark', 'AWS', 'Jenkins'],
  },
  {
    badge: '{ NLP }',
    title: 'Smart Assistant Technologies',
    company: 'Zensar Technologies · 2021 – 2022',
    description: 'Intelligent assistant platform with NLP, task automation and AI-powered suggestions. Built AngularJS directives and services, JWT/OAuth role-based access, and Spring Boot backend services.',
    tech: ['AngularJS', 'RxJS', 'JWT / OAuth', 'Spark'],
  },
  {
    badge: '{ HR }',
    title: 'Wiscode Enrollment System',
    company: 'Arorian Technologies · 2019 – 2021',
    description: 'Corporate HR platform covering payroll, onboarding, attendance, performance evaluations, benefits and leave — delivered as a React SPA with complex validated forms and a Java/Spring backend.',
    tech: ['ReactJS', 'Spring Boot', 'MongoDB', 'Oracle'],
  },
  {
    badge: '{ BCBS }',
    title: 'Corporate Enrollment System',
    company: 'Nityo Infotech · Blue Cross Blue Shield',
    description: 'Internal platform managing corporate and employee data for health insurance enrollment. Built secure JWT login with React and Node/Express, REST APIs, and Oracle data layers.',
    tech: ['React', 'Node.js', 'Express', 'JWT'],
  },
]

export const education = [
  { year: '2024', degree: "Master's in Data Engineering", school: 'University of North Texas' },
  { year: '2017', degree: "Bachelor's in Computer Science & Engineering", school: 'DVR & Dr. HS MIC College of Technology' },
]
