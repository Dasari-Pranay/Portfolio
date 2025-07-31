// Define the structure for a single certificate object
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string; // Format: YYYY-MM
  image: string;
  level: string;
  description: string;
  duration: string;
  credentialId: string;
  skills: string[];
  verificationUrl: string;
}

// Export the array of all certificates
export const certificates: Certificate[] = [
  // Existing Certificates
  {
    id: 1,
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "2024-10",
    image: "/Cerificates/machine learning.jpg",
    level: "Advanced",
    description: "A comprehensive certification covering fundamental machine learning concepts, data visualization, and neural networks using Python libraries like TensorFlow and Scikit-learn.",
    duration: "Approx. 300 hours",
    credentialId: "machine-learning-with-python-v7",
    skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis", "Neural Networks", "Scikit-learn"],
    verificationUrl: "https://www.freecodecamp.org/certification/DasariPranay/machine-learning-with-python-v7"
  },
  {
    id: 2,
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "2024-08",
    image: "/Cerificates/Scientific Computing.jpg",
    level: "Advanced",
    description: "A developer certification focused on using Python for scientific applications, covering core libraries like NumPy, Pandas, and Matplotlib for data analysis and algorithm implementation.",
    duration: "Approx. 300 hours",
    credentialId: "scientific-computing-with-python-v7",
    skills: ["Scientific Computing", "Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
    verificationUrl: "https://www.freecodecamp.org/certification/DasariPranay/scientific-computing-with-python-v7"
  },
  {
    id: 3,
    title: "AWS Academy Graduate - AWS Academy Data Engineering",
    issuer: "AWS Academy",
    date: "2024-12",
    image: "/Cerificates/data engineering.jpg",
    level: "Intermediate",
    description: "Completed a comprehensive course on data engineering principles and services on the AWS platform, covering data ingestion, storage, processing, and analysis.",
    duration: "40 hours",
    credentialId: "pylokjcu",
    skills: ["Data Engineering", "AWS", "Big Data", "Data Pipelines", "Cloud Computing", "Data Warehousing"],
    verificationUrl: "https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-data-engineering"
  },
  {
    id: 4,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024-11",
    image: "/Cerificates/cloud foundations.jpg",
    level: "Foundational",
    description: "Gained a fundamental understanding of cloud computing concepts and the core services, security, architecture, and support of Amazon Web Services.",
    duration: "20 hours",
    credentialId: "oQmRQD8M",
    skills: ["Cloud Computing", "AWS", "Cloud Architecture", "Cloud Security", "Networking"],
    verificationUrl: "https://www.credly.com/go/oQmRQD8M"
  },
  {
    id: 5,
    title: "How College Students Can Secure Placements in Product-Based Companies",
    issuer: "GUVI & HCL",
    date: "2025-04",
    image: "/Cerificates/Guvi.jpg",
    level: "Participation",
    description: "Certificate of participation in a GUVI webinar focused on career strategies and technical preparation for students aiming for roles in product-based companies.",
    duration: "Webinar",
    credentialId: "",
    skills: ["Career Development", "Job Search Strategies", "Professional Networking", "Interview Preparation"],
    verificationUrl: ""
  },
  {
    id: 6,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/AI fundamentals.jpg",
    level: "Intermediate",
    description: "Successfully satisfied the requirements for understanding the fundamental concepts of Artificial Intelligence, its applications, and societal implications.",
    duration: "Approx. 2 hours",
    credentialId: "5601bcc1-6a91-4e12-af6a-ce15c63fd6e8",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Concepts", "Data Science", "IBM Watson"],
    verificationUrl: "https://www.credly.com/badges/5601bcc1-6a91-4e12-af6a-ce15c63fd6e8"
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/introduction to AI.pdf.jpg",
    level: "Foundational",
    description: "Gained foundational knowledge of Artificial Intelligence, including its history, key concepts, and various applications across industries.",
    duration: "1 hr 15 mins",
    credentialId: "MDL-211",
    skills: ["Artificial Intelligence", "AI Concepts", "Machine Learning Basics", "AI Applications"],
    verificationUrl: ""
  },
  {
    id: 8,
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/introduction to geneative AI.pdf.jpg",
    level: "Foundational",
    description: "Learned the fundamentals of Generative AI, including common models like LLMs, their use cases, and the principles behind content generation.",
    duration: "1 hr 30 mins",
    credentialId: "MDL-388",
    skills: ["Generative AI", "Large Language Models (LLMs)", "AI Models", "Content Generation"],
    verificationUrl: ""
  },
  {
    id: 9,
    title: "Mastering the Art of Prompting",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/Mastering the prompt of arting.pdf.jpg",
    level: "Advanced",
    description: "Completed training on the techniques and best practices for crafting effective prompts for generative AI models to achieve desired outcomes.",
    duration: "1 hr",
    credentialId: "MDL-298",
    skills: ["Prompt Engineering", "Generative AI", "Large Language Models (LLMs)", "AI Interaction"],
    verificationUrl: ""
  },
  {
    id: 10,
    title: "Natural Language Processing and Computer Vision",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/Natural language processing and Computer vision.pdf.jpg",
    level: "Foundational",
    description: "An introduction to the core concepts of Natural Language Processing (NLP) and Computer Vision, two key fields within Artificial Intelligence.",
    duration: "1 hr 30 mins",
    credentialId: "MDL-214",
    skills: ["Natural Language Processing", "Computer Vision", "NLP", "AI"],
    verificationUrl: ""
  },
  {
    id: 11,
    title: "What is prompt tuning?",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/Prompt tuning.pdf.jpg",
    level: "Intermediate",
    description: "A concise overview of prompt tuning, a parameter-efficient method for adapting large language models to specific tasks.",
    duration: "15 mins",
    credentialId: "MDL-342",
    skills: ["Prompt Tuning", "Prompt Engineering", "Large Language Models", "Parameter-Efficient Fine-Tuning"],
    verificationUrl: ""
  },
  {
    id: 12,
    title: "Machine Learning and Deep Learning",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/Machine learning and Deep learning.pdf.jpg",
    level: "Advanced",
    description: "Acquired an understanding of core concepts in Machine Learning and Deep Learning, including algorithms, neural networks, and their practical applications.",
    duration: "2 hrs 20 mins",
    credentialId: "MDL-212",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Supervised Learning", "Unsupervised Learning"],
    verificationUrl: ""
  },
  {
    id: 13,
    title: "AI Ethics",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/AI Ethics.jpg",
    level: "Foundational",
    description: "Studied the ethical considerations in AI, focusing on fairness, accountability, transparency, and the societal impact of AI technologies.",
    duration: "1 hr 45 mins",
    credentialId: "MDL-220",
    skills: ["AI Ethics", "Responsible AI", "AI Governance", "Bias in AI", "Data Privacy"],
    verificationUrl: ""
  },
  {
    id: 14,
    title: "Your Future in AI: The Job Landscape",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/Future in AI.jpg",
    level: "Intermediate",
    description: "Explored the current and future job market in Artificial Intelligence, identifying key roles, required skills, and potential career pathways.",
    duration: "50 mins",
    credentialId: "MDL-213",
    skills: ["AI Careers", "Professional Development", "Job Market Analysis", "Tech Industry"],
    verificationUrl: ""
  },
  {
    id: 15,
    title: "Can AI help climate change?",
    issuer: "IBM SkillsBuild",
    date: "2025-06",
    image: "/Cerificates/ibm/AI help climate change.jpg",
    level: "Intermediate",
    description: "Examined the role of Artificial Intelligence in addressing climate change, including applications in monitoring, mitigation, and adaptation strategies.",
    duration: "15 mins",
    credentialId: "MDL-346",
    skills: ["AI for Good", "Climate Technology", "Sustainability", "Environmental Data Analysis"],
    verificationUrl: ""
  },
  // New Infosys Certificates
  {
    id: 16,
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/Basics of python.pdf.jpg",
    level: "Foundational",
    description: "A foundational course covering the essential syntax, data types, and control structures of the Python programming language.",
    duration: "N/A",
    credentialId: "",
    skills: ["Python", "Programming Basics"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 17,
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/programming python part-1.jpg",
    level: "Foundational",
    description: "The first part of a series on programming fundamentals, focusing on core concepts implemented in Python.",
    duration: "N/A",
    credentialId: "",
    skills: ["Python", "Programming Fundamentals", "Algorithms"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 18,
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/programming python part-2.jpg",
    level: "Foundational",
    description: "The second part of a series on programming fundamentals, building on core concepts with more advanced topics in Python.",
    duration: "N/A",
    credentialId: "",
    skills: ["Python", "Programming Fundamentals", "Data Structures"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 19,
    title: "Object Oriented Programming using Python",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/OOP using python.jpg",
    level: "Intermediate",
    description: "Covers the principles of Object-Oriented Programming (OOP) including classes, objects, inheritance, and polymorphism, implemented in Python.",
    duration: "N/A",
    credentialId: "",
    skills: ["Python", "Object-Oriented Programming (OOP)", "Software Design"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 20,
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/Python foundation.pdf.jpg",
    level: "Advanced",
    description: "A certification demonstrating a solid foundational understanding of the Python programming language.",
    duration: "N/A",
    credentialId: "",
    skills: ["Python", "Programming", "Data Structures", "OOP"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 21,
    title: "Database Management System - Part 1",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/programming python part-1.jpg",
    level: "Foundational",
    description: "The first part of a course on Database Management Systems, covering relational models, SQL, and database design fundamentals.",
    duration: "N/A",
    credentialId: "",
    skills: ["DBMS", "SQL", "Relational Databases", "Database Design"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 22,
    title: "Database Management System - Part 2",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/programming python part-2.jpg",
    level: "Foundational",
    description: "The second part of a course on Database Management Systems, covering transactions, concurrency control, and other advanced topics.",
    duration: "N/A",
    credentialId: "",
    skills: ["DBMS", "SQL", "Database Administration", "Transactions"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 23,
    title: "Introduction to NoSQL databases",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/introduction to NOSQL databases.pdf.jpg",
    level: "Foundational",
    description: "An introductory course to NoSQL databases, exploring different models like document, key-value, column-family, and graph.",
    duration: "N/A",
    credentialId: "",
    skills: ["NoSQL", "Databases", "MongoDB", "Cassandra"],
    verificationUrl: "hhttps://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 24,
    title: "Software Engineering and Agile software development",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/Software engineering and Agile software development.pdf.jpg",
    level: "Foundational",
    description: "Covers fundamental principles of software engineering and the methodologies of Agile software development.",
    duration: "N/A",
    credentialId: "",
    skills: ["Software Engineering", "Agile", "SDLC", "Scrum"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  },
  {
    id: 25,
    title: "Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    date: "2025-06",
    image: "/Cerificates/infosys/Agile scrum in practice.pdf.jpg",
    level: "Foundational",
    description: "A practical look at implementing the Agile Scrum framework, including roles, events, and artifacts.",
    duration: "N/A",
    credentialId: "",
    skills: ["Agile", "Scrum", "Project Management"],
    verificationUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
  }
];