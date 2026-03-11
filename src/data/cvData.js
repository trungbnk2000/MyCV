export const cvData = {
  personalInfo: {
    name: "Trung Tran",
    title: "Front-End Developer · React & React Native Specialist",
    location: "Hanoi, Vietnam",
    email: "trungtran13900@gmail.com",
    phone: "0914.091.973"
  },

  socialLinks: {
    website: null,
    linkedin: "https://www.linkedin.com/in/trung-tran",
    github: "https://github.com/trungbnk2000",
    figma: null
  },

  education: [
    {
      degree: "Bachelor of Software Engineering (GPA: 3.0+)",
      institution: "Posts and Telecommunications Institute of Technology",
      gpa: "3.0+/4.0",
      period: "2018 - 2022"
    },
    {
      degree: "IELTS Academic",
      score: "Overall Band Score: 7.0 (Proficient English Communication)"
    },
    {
      degree: "TOEIC",
      score: "Score: 855/990 (Professional Working Proficiency)"
    }
  ],

  experience: [
    {
      company: "TANDAN.JSC",
      position: "Front-End Developer",
      period: "Sep 2022 - Present",
      duration: "3.5+ years",
      technologies: ["ReactJS", "React Native", "Redux Toolkit", "TypeScript", "Ant Design", "Tailwind CSS", "Vite", "Webpack"],
      responsibilities: [
        "Built 2 production e-learning platforms serving 50,000+ active users.",
        "Optimized bundle size from 2.5MB to 850KB, achieving 40% faster page loads.",
        "Developed React Native apps for iOS & Android, published with 4.5+ star ratings.",
        "Established a component library with Storybook, cutting development time by 35%.",
        "Reduced unnecessary re-renders by 60% using Redux Toolkit and Context API.",
        "Mentored 3 junior developers, raising team code quality scores from 65% to 90%.",
        "Integrated RESTful APIs and GraphQL with caching and optimistic UI updates.",
        "Translated Figma designs into pixel-perfect interfaces following WCAG 2.1 AA."
      ]
    },
    {
      company: "TANDAN.JSC",
      position: "Software Developer Intern",
      period: "2021 - 2022",
      duration: "1 year",
      technologies: ["C#", ".NET Framework", "ASP.NET", "SQL Server", "HTML/CSS", "JavaScript"],
      responsibilities: [
        "Built full-stack features for internal management systems using C# and ASP.NET MVC.",
        "Optimized SQL queries, reducing average execution time by 30%.",
        "Designed responsive admin dashboards with HTML, CSS, and JavaScript."
      ]
    }
  ],

  projects: [
    {
      name: "Codemath.vn - Interactive Coding Education Platform",
      url: "https://codemath.vn",
      technologies: ["ReactJS", "React Native", "Redux Toolkit", "TypeScript", "Ant Design", "Socket.io", "Jest", "React Testing Library"],
      description: [
        "Delivered a comprehensive e-learning platform with 30,000+ registered users.",
        "Built a real-time code editor with syntax highlighting and live collaboration via Monaco Editor and Socket.io.",
        "Implemented gamification system with badges, leaderboards, and adaptive learning paths.",
        "Achieved 60 FPS animations and reduced mobile memory footprint by 45%.",
        "Increased user retention from 45% to 87% through UX and personalized recommendations.",
        "Maintained 85%+ unit test coverage with Jest and React Testing Library."
      ],
      featured: true
    },
    {
      name: "Tiengtrunggioi.vn - Chinese Language Learning Platform",
      url: "https://tiengtrunggioi.vn",
      technologies: ["ReactJS", "React Native", "Redux", "TypeScript", "Vite", "Ant Design", "TailwindCSS", "Firebase"],
      description: [
        "Migrated legacy codebase to React 18, TypeScript, and Vite — cutting build times by 50% and LCP from 3.2s to 2.4s.",
        "Architected scalable component system with custom hooks, boosting reusability by 60%.",
        "Published React Native iOS app to App Store with 4.6-star rating and 5,000+ downloads in 3 months.",
        "Integrated spaced repetition, voice recognition, and AI-powered study plans.",
        "Set up Sentry and Firebase analytics, reducing production bugs by 70%.",
        "Improved organic traffic by 80% through semantic HTML and performance optimization.",
        "Automated E2E tests with Cypress, reducing QA time by 40%."
      ],
      featured: true
    }
  ],

  skills: {
    languages: {
      frontend: [
        { name: "JavaScript (ES6+)", proficiency: "full" },
        { name: "TypeScript", proficiency: "full" },
        { name: "HTML5", proficiency: "full" },
        { name: "CSS3/SCSS/Sass", proficiency: "full" },
        { name: "Swift", proficiency: "half" }
      ],
      backend: [
        { name: "Node.js", proficiency: "twothirds" },
        { name: "C#", proficiency: "half" },
        { name: "SQL", proficiency: "twothirds" },
        { name: "Python", proficiency: "third" }
      ]
    },
    technologies: {
      ui: [
        { name: "Tailwind CSS", proficiency: "full" },
        { name: "Ant Design", proficiency: "full" },
        { name: "Material-UI", proficiency: "full" },
        { name: "Bootstrap", proficiency: "full" },
        { name: "Styled Components", proficiency: "twothirds" },
        { name: "Emotion", proficiency: "twothirds" }
      ],
      frontend: [
        { name: "React 18", proficiency: "full" },
        { name: "React Native", proficiency: "full" },
        { name: "Redux Toolkit", proficiency: "full" },
        { name: "React Query", proficiency: "full" },
        { name: "Next.js", proficiency: "twothirds" },
        { name: "Vite", proficiency: "full" },
        { name: "Webpack", proficiency: "twothirds" },
        { name: "React Router", proficiency: "full" },
        { name: "Axios", proficiency: "full" },
        { name: "GraphQL", proficiency: "half" },
        { name: "Socket.io", proficiency: "twothirds" }
      ],
      backend: [
        { name: "RESTful API", proficiency: "full" },
        { name: "Firebase", proficiency: "twothirds" },
        { name: ".NET Framework", proficiency: "half" },
        { name: "Express.js", proficiency: "twothirds" }
      ]
    },
    tools: {
      coder: [
        { name: "VS Code", proficiency: "full" },
        { name: "Git/GitHub/GitLab", proficiency: "full" },
        { name: "Xcode", proficiency: "full" },
        { name: "Android Studio", proficiency: "full" },
        { name: "Chrome DevTools", proficiency: "full" },
        { name: "Postman", proficiency: "full" },
        { name: "Docker", proficiency: "half" },
        { name: "Jest", proficiency: "full" },
        { name: "Cypress", proficiency: "twothirds" },
        { name: "Storybook", proficiency: "twothirds" },
        { name: "ESLint/Prettier", proficiency: "full" },
        { name: "npm/yarn", proficiency: "full" }
      ],
      designer: [
        { name: "Figma", proficiency: "full" },
        { name: "Adobe XD", proficiency: "twothirds" },
        { name: "Adobe Photoshop", proficiency: "half" }
      ]
    }
  }
};
