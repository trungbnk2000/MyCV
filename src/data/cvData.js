export const cvData = {
  personalInfo: {
    name: "Trung Tran",
    title: "Senior Front-End Developer · React & React Native Specialist",
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
      position: "Senior Front-End Developer",
      period: "Sep 2022 - Present",
      duration: "2.5+ years",
      technologies: ["ReactJS", "React Native", "Redux Toolkit", "TypeScript", "Ant Design", "Tailwind CSS", "Vite", "Webpack"],
      responsibilities: [
        "Architected and delivered 2 production-ready e-learning platforms serving 50,000+ active users, implementing 100+ responsive UI components with 98% cross-browser compatibility using ReactJS, Redux, and modern CSS frameworks.",
        "Led front-end performance optimization initiatives achieving 40% faster page load times through code splitting, lazy loading, and bundle size reduction from 2.5MB to 850KB using Webpack and Vite.",
        "Developed and maintained React Native applications for iOS and Android with 4.5+ star ratings, implementing complex features including offline mode, real-time chat, video streaming, and push notifications.",
        "Established comprehensive component library and design system using Storybook and Ant Design, reducing development time by 35% and ensuring UI consistency across 8+ projects.",
        "Implemented advanced state management patterns using Redux Toolkit and Context API, optimizing app performance and reducing unnecessary re-renders by 60%.",
        "Mentored 3 junior developers on React best practices, code review standards, and modern JavaScript (ES6+), improving team code quality scores from 65% to 90%.",
        "Successfully published and maintained 2 mobile applications on App Store and Google Play, managing the entire release lifecycle including beta testing, crash analytics, and performance monitoring.",
        "Integrated RESTful APIs and GraphQL endpoints, implementing robust error handling, request caching, and optimistic UI updates for enhanced user experience.",
        "Collaborated with UX/UI designers to transform Figma designs into pixel-perfect, accessible interfaces following WCAG 2.1 AA standards."
      ]
    },
    {
      company: "TANDAN.JSC",
      position: "Software Developer Intern",
      period: "2021 - 2022",
      duration: "1 year",
      technologies: ["C#", ".NET Framework", "ASP.NET", "SQL Server", "HTML/CSS", "JavaScript"],
      responsibilities: [
        "Developed full-stack features for internal management systems using C# .NET Framework and ASP.NET MVC, serving 200+ internal users.",
        "Designed and implemented database schemas and optimized SQL queries, reducing average query execution time by 30%.",
        "Built responsive admin dashboards using HTML, CSS, and JavaScript with jQuery, improving data visualization and user workflow.",
        "Participated in Agile ceremonies including daily standups, sprint planning, and retrospectives, contributing to 95% sprint completion rate."
      ]
    }
  ],

  projects: [
    {
      name: "Codemath.vn - Interactive Coding Education Platform",
      url: "https://codemath.vn",
      technologies: ["ReactJS", "React Native", "Redux Toolkit", "TypeScript", "Ant Design", "Socket.io", "Jest", "React Testing Library"],
      description: [
        "Spearheaded front-end development in a cross-functional Agile team of 5 members, delivering a comprehensive e-learning platform with 30,000+ registered users.",
        "Engineered real-time code editor with syntax highlighting and live collaboration using Monaco Editor and Socket.io, supporting 10+ programming languages.",
        "Implemented advanced features including progress tracking dashboards, gamification system with badges and leaderboards, and adaptive learning paths based on user performance analytics.",
        "Optimized mobile app performance achieving 60 FPS animations and reducing memory footprint by 45% through memoization, virtualization, and image optimization techniques.",
        "Achieved 42% increase in user retention (from 45% to 87%) and 35% improvement in course completion rates through UX enhancements and personalized learning recommendations.",
        "Maintained 85%+ unit test coverage using Jest and React Testing Library, implementing CI/CD pipeline with automated testing and deployment."
      ],
      featured: true
    },
    {
      name: "Tiengtrunggioi.vn - Chinese Language Learning Platform",
      url: "https://tiengtrunggioi.vn",
      technologies: ["ReactJS", "React Native", "Redux", "TypeScript", "Vite", "Ant Design", "TailwindCSS", "Firebase"],
      description: [
        "Architected and migrated legacy codebase to modern React 18 with TypeScript, Vite bundler, and atomic design principles, resulting in 50% faster build times and 25% improvement in page load performance (from 3.2s to 2.4s LCP).",
        "Designed and implemented scalable component architecture with custom hooks and higher-order components, increasing code reusability by 60% and reducing bundle size by 35%.",
        "Built feature-rich iOS application using React Native and Expo, successfully published to App Store with 4.6-star rating and 5,000+ downloads within 3 months.",
        "Integrated advanced learning features including spaced repetition algorithm, voice recognition for pronunciation practice, and AI-powered personalized study plans.",
        "Implemented comprehensive error tracking with Sentry and analytics with Firebase, reducing production bugs by 70% and enabling data-driven feature decisions.",
        "Optimized SEO achieving 80% improvement in organic traffic through server-side rendering considerations, semantic HTML, and performance best practices.",
        "Established automated E2E testing with Cypress covering critical user journeys, increasing deployment confidence and reducing QA time by 40%."
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
