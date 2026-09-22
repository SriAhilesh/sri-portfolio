export const projectsData = [
  {
    id: "nexora",
    title: "Nexora – AI-Powered Collaborative Engineering Workspace",
    featured: true,
    category: "Full-Stack & AI",
    technologies: [
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "RAG",
      "Role-Based Access Control"
    ],
    description:
      "Built a full-stack collaborative engineering workspace enabling teams to manage projects, tasks, technical knowledge, and collaboration through REST APIs with role-based access control across personal and organization workspaces. Engineered organization-based collaboration with workspace onboarding, project membership, task management, and AI-powered RAG for context-aware project knowledge retrieval.",
    githubUrl: "https://github.com/SriAhilesh/nexora",
    liveUrl: "https://nexora-frontend-ochre.vercel.app/",
    highlights: [
      "Spring Boot REST API Architecture",
      "Organization-Based Collaboration",
      "AI-Powered RAG Knowledge Retrieval"
    ]
  },
  {
    id: "ai-portfolio-generator",
    title: "AI-Powered Portfolio Generator",
    featured: false,
    category: "AI & Automation",
    technologies: ["Python", "LLMs", "GPT-based models", "Prompt Engineering", "Automation Pipelines"],
    description: "Built an LLM-powered portfolio generation system that automatically creates complete developer portfolios from minimal user input. Designed modular AI workflows for automated content generation and structured rendering.",
    githubUrl: "https://github.com/SriAhilesh/StupaPortfolio",
    liveUrl: "https://stupa-portfolio.vercel.app",
    highlights: [
      "Modular AI Content Pipeline",
      "Automated Structured Rendering",
      "Minimal Input Requirement"
    ]
  },
  {
    id: "autonomous-resource-orchestrator",
    title: "Autonomous Distributed Resource Orchestration System",
    featured: false,
    category: "Distributed Systems",
    technologies: ["React.js", "FastAPI", "Python", "WebSockets", "Chart.js", "Event-Driven Architecture"],
    description: "Designed a reactive and predictive distributed resource orchestration system that monitors node load, predicts overload conditions, and autonomously redistributes workloads to maintain system stability.",
    githubUrl: "https://github.com/SriAhilesh/autonomous-resource-orchestrator",
    liveUrl: null,
    highlights: [
      "Predictive Load Management",
      "Finite State Machine",
      "Autonomous Workload Redistribution"
    ]
  },
  {
    id: "roomsync",
    title: "RoomSync – Hostel Roommate Finder",
    featured: false,
    category: "Full-Stack Web App",
    technologies: ["React.js", "Node.js", "MySQL", "AWS"],
    description: "Developed a full-stack roommate matching platform connecting students based on lifestyle preferences, personal interests, and compatibility criteria. Implemented profile management, preference-based matching, and room discovery features to enable efficient and personalized roommate selection.",
    githubUrl: "https://github.com/SriAhilesh/RoomSync-RealTime-Roommate-Matching",
    liveUrl: null,
    highlights: [
      "Preference-Based Matching Algorithm",
      "Profile & Discovery Engine",
      "AWS Cloud Hosted Architecture"
    ]
  },
  {
    id: "summaraize",
    title: "SummarAIze – AI Text Summarization App",
    featured: false,
    category: "AI & Cloud",
    technologies: ["Python", "Flask", "AWS EC2", "Amazon S3", "Gunicorn", "Nginx", "systemd", "boto3"],
    description: "Built and deployed a Flask-based AI text summarization application with cloud infrastructure for file storage, production serving, and reliable application deployment.",
    githubUrl: "https://github.com/SriAhilesh/summaraize-flask-app",
    liveUrl: "https://summaraize-flask-app.onrender.com",
    highlights: [
      "AI Text Summarization",
      "Cloud File Storage",
      "Production Deployment"
    ]
  }
];
