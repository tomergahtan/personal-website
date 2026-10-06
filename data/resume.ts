export const profile = {
  name: "Tomer Gahtan",
  title: "Software Engineer",
  tagline:
    "Backend engineer building AI-powered and microservices applications on the cloud.",
  about: [
    "I'm a motivated backend engineer with hands-on experience building AI-based and microservices applications, deploying them on AWS, GCP and Azure.",
    "I have strong skills in data processing, text analysis and machine learning, and a proven ability to work in fast-paced environments and contribute to strategic decision-making. Before software, I built and scaled a profitable e-commerce business and served as a combat commander in the Givati Brigade.",
  ],
  email: "tomergahtan@gmail.com",
  github: "https://github.com/tomergahtan",
  linkedin: "https://www.linkedin.com/in/tomergahtan",
  resume: "/Tomer-Gahtan-Resume.pdf",
  photo: "/image.png",
};

export type Job = {
  role: string;
  company: string;
  period: string;
  description?: string;
  link?: string;
  points: string[];
  tech?: string[];
};

export const experience: Job[] = [
  {
    role: "Fullstack Developer",
    company: "Rapyd",
    period: "02/2026 – 06/2026",
    points: [
      "Designed and developed the Rapyd Facilities portal end to end.",
      "Built and implemented scalable automated integration processes with NetSuite and S3.",
      "Deployed services on AWS with EKS, building secure and scalable infrastructure.",
    ],
    tech: ["AWS", "EKS", "S3", "NetSuite", "React", "TypeScript", "Node.js", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    role: "Backend Developer",
    company: "OFFIZZ",
    period: "01/2025 – 02/2026",
    description: "A startup developing a microservices platform for office subletting.",
    link: "http://app.offizz.ai",
    points: [
      "Designed and developed microservices using NestJS, Python, PostgreSQL, Redis and Kafka.",
      "Deployed services on GCP with Kubernetes, building secure and scalable infrastructure.",
      "Integrated Redis for fast caching and Kafka for async messaging.",
    ],
    tech: ["NestJS", "Python", "PostgreSQL", "Redis", "Kafka", "GCP", "Kubernetes"],
  },
  {
    role: "Backend Developer (Internship)",
    company: "TEAMIFF",
    period: "02/2024 – 09/2024",
    points: [
      "Developed and optimized backend AI-based solutions for customer service applications, including call transcription and survey analysis, using Node.js and Microsoft Azure.",
      "Implemented text processing pipelines (translation, summarization, topic classification and sentiment analysis) to extract key insights from customer feedback.",
      "Designed an automated pipeline that retrieved, transcribed, summarized and structured customer interactions into JSON for easy integration.",
      "Created interactive dashboards summarizing customer insights with Google Sheets, HTML reports and data visualizations.",
      "Tackled challenges in speech-to-text accuracy, data structuring and text processing, improving the quality of AI-driven results.",
    ],
    tech: ["Node.js", "Azure", "NLP", "Speech-to-Text"],
  },
  {
    role: "E-commerce Business Owner",
    company: "Self-employed",
    period: "2017 – 2023",
    points: [
      "Built and scaled a profitable e-commerce business, managing 15 stores and leading a remote team of 6 freelancers.",
      "Implemented macro-management strategies and performance tracking tools to optimize workflow.",
      "Developed expertise in market analysis, niche selection and platform algorithms to maximize visibility and sales across a cross-continental customer base.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  points: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "8plate",
    subtitle: "Personal project · 2024 – Present",
    description:
      "A platform that analyzes the global stock market and focuses users on relevant stocks based on insights and market analysis.",
    points: [
      "Designed and developed a microservices platform running on a Kubernetes cluster in production.",
      "Built CI/CD pipelines with Git and Argo CD (GitOps), working with Helm, StatefulSets, PVCs and TLS.",
    ],
    tech: ["React", "Python", "NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Kubernetes", "Argo CD", "AWS", "Hetzner"],
    link: "https://8plate.ink",
    featured: true,
  },
  {
    name: "Purchase Prediction ML Pipeline",
    subtitle: "Tel Aviv University",
    description:
      "A machine learning pipeline forecasting the chance that a customer will make a purchase.",
    points: [],
    tech: ["Python", "KNN", "MLP", "SVM", "Random Forest", "Logistic Regression"],
  },
  {
    name: "TCP Grading System",
    subtitle: "Tel Aviv University · Operating Systems",
    description:
      "A grading system written in C on Linux, using TCP socket communication. Final project for the Operating Systems course.",
    points: [],
    tech: ["C", "Linux", "TCP Sockets"],
  },
  {
    name: "E-commerce Website",
    subtitle: "Tel Aviv University",
    description: "An interactive e-commerce website built from scratch.",
    points: [],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["C", "C++", "Python", "TypeScript", "Node.js", "Java", "PHP"] },
  { category: "Web", items: ["React", "JavaScript", "HTML", "CSS", "NestJS"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Firebase"] },
  { category: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Argo CD", "Kafka", "RabbitMQ", "Git", "VMs"] },
];

export const education = {
  degree: "B.Sc. Digital Science for High-Tech and Economics",
  school: "Tel Aviv University",
  period: "2020 – 2024",
  highlights: [
    "Computer Networks: 100/100. Strong foundation in networking fundamentals, including TCP/IP and UDP.",
    "Projects in operating systems, machine learning and full-stack web development.",
  ],
};

export const military = {
  role: "Combat Commander",
  unit: "Rimon, Givati Brigade",
  period: "2014 – 2017",
  description: "Promoted to Chief of Management at the Givati Brigade Training School.",
};

export const languages = ["Hebrew: Native", "English: Full working proficiency"];
