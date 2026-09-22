export const profileData = {
  name: "Sri Ahilesh",
  tagline: "Software • Cloud • AI",
  shortRole: "Software Engineer",
  institution: "Vellore Institute of Technology (VIT)",
  cgpa: "9.22/10",
  degree: "B.Tech Computer Science and Engineering",
  bio: "Computer Science undergraduate at VIT building software systems across cloud, DevOps, full-stack development and AI.",

  contact: {
    email: "sriahileshn@gmail.com",
    linkedin: "https://www.linkedin.com/in/sri-ahilesh-059240331",
    github: "https://github.com/SriAhilesh",
    resume: "/Sri_Resume.pdf",
    location: "Tamil Nadu, India"
  },

  ctas: {
    primary: { text: "Explore My Work", href: "#projects" },
    secondary: { text: "Download Resume", href: "/Sri_Resume.pdf" }
  }
};

export const heroArchitectureData = {
  layers: [
    {
      id: "software",
      title: "Software & Application Layer",
      subtitle: "Full-Stack Development & APIs",
      iconName: "Server",
      accent: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      techs: ["Java", "React.js", "Node.js", "Spring Boot", "REST APIs", "MySQL"],
      metrics: "5+ Enterprise Apps"
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure Layer",
      subtitle: "Cloud Engineering & DevOps",
      iconName: "Cloud",
      accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      techs: ["AWS", "Docker", "GitHub Actions", "Jenkins", "Ansible", "CI/CD", "Microservices"],
      metrics: "10+ Microservices"
    },
    {
      id: "ai",
      title: "AI / ML Layer",
      subtitle: "Machine Learning & Intelligent Systems",
      iconName: "Cpu",
      accent: "from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      techs: ["NLP", "Machine Learning", "Deep Learning", "LLMs", "PyTorch", "Hugging Face", "Prompt Engineering"],
      metrics: "AI / ML Research"
    }
  ],
  footerTags: ["Java", "AWS", "React.js", "AI/ML"]
};
