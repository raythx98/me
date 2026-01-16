import profile from "./profile.png";
import resumePdf from "./resume.pdf";
import jenkinsIcon from "devicon/icons/jenkins/jenkins-original.svg";

// 1. Navigation Bar
const navBar = {
  show: true,
};

// 2. Main Body (Hero)
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f", 
  firstName: "Ray Toh",
  middleName: "",
  lastName: "H. X.",
  message: "Software Engineer | Large-Scale Systems | Low-Level Optimizations",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/raythx98",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/raythx/",
    },
  ],
};

// 3. About Section
const about = {
  show: true,
  heading: "About Me",
  imageLink: profile,
  imageSize: 375,
  paragraphs: [
    "I am a passionate software engineer specializing in large-scale microservices and low-level optimizations.",
    "Driven by a desire to build robust and scalable systems, I am particularly drawn to the realm of large-scale microservices. I am captivated by the intricacies involved in architecting and developing software that can seamlessly handle massive workloads while maintaining high availability and fault tolerance.",
    "My passion extends to the realm of low-level optimization. I thrive on the challenge of analyzing and fine-tuning code to squeeze out every ounce of performance. It brings me great satisfaction to meticulously optimize algorithms, data structures, and system interactions."
  ],
  resume: resumePdf,
};

// 4. Experiences Section
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      company: 'Getgo Technologies, Singapore',
      description: 'Go, C#, .Net, MySQL, Redis, Elasticsearch, gRPC, Solace, Docker, AWS',
      date: 'Jan 2023 - Present',
      type: 'work',
      details: [
        "Built a proxy server with custom rate limiting and circuit breaker capabilities, mitigating DDoS attacks on the SMS OTP API and strengthening fault tolerance.",
        "Enhanced EV charging servers to be OCPI-compliant, reducing engineering effort to onboard new providers by 10x, enabling the company to scale to thousands of EVs with minimal operating costs.",
        "Drove major refactoring efforts and authored a utility package to abstract common middleware and functionalities, reducing code duplication and improving consistency across repositories.",
        "Rearchitected monolithic systems into event-driven microservices, utilizing the orchestration pattern for distributed transactions across multiple microservices, enabling engineering teams to scale and driving the formation of three cross-functional teams."
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Carousell, Singapore',
      description: 'Go, PostgreSQL, Redis, Elasticsearch, gRPC, Kafka, Docker, Kubernetes, GCP',
      date: 'Aug 2022 - Dec 2022',
      type: 'work',
      details: [
        "Led a large-scale overhaul of product categorization, seamlessly migrating 5M+ listings with zero downtime, improving search relevance and boosting product-to-sale conversion by 15%.",
        "Migrated endpoints from a Django monolith to Go microservices, enhancing modularity and error handling, which improved engineering productivity and reduced error rates by 5X."
      ]
    },
    {
      role: 'B.Comp (Honors) in Computer Science',
      company: 'National University of Singapore',
      description: 'Graduated with distinction.',
      date: 'August 2019 - August 2022',
      type: 'school',
      details: [
        "Specialized in Software Engineering, Database Systems, Computer Networking, Computer Security, and Artificial Intelligence.",
        "Teaching Assistant for CS2100 (Computer Organisation): Conducted weekly programming exercises based on assembly language, pipelining, and logic circuits.",
        "Teaching Assistant for CS1101S (Programming Methodology): Taught vital programming concepts such as abstraction, data structures, OOP, and dynamic programming."
      ]
    },
    {
      role: 'Software Engineer',
      company: 'DBS Bank, Singapore',
      description: 'Go, MariaDB, Redis, Elasticsearch, Kubernetes, OpenShift, Kafka',
      date: 'May 2022 - August 2022',
      type: 'work',
      details: [
        "Developed server and job enhancements for a proprietary Forex application using Go.",
        "Enhanced API observability in microservices by implementing distributed tracing with Open Telemetry and Jaeger, accelerating debugging and performance optimization.",
        "Augmented monitoring and alerting functionalities using Prometheus."
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Reluvate Technologies, Singapore',
      description: 'Python, Django, React.js, AWS, Nginx, RESTful APIs, UAT',
      date: 'Dec 2021 - Feb 2022',
      type: 'work',
      details: [
        "Drove digital transformation by automating job matching, scheduling, and financial reconciliation processes using Django and React.js.",
        "Facilitated UATs to formulate non-functional requirements and migrated data from legacy systems to AWS (EC2, RDS, S3).",
        "Integrated Nginx as the web server for serving static frontend and backend API gateway."
      ]
    },
  ]
};

// 5. Skills Section
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Go", icon: "devicon-go-original-wordmark colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "C# (.Net)", icon: "devicon-csharp-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "DynamoDB", icon: "devicon-dynamodb-plain colored" },
    { name: "Redis", icon: "devicon-redis-plain colored" },
    { name: "ElasticSearch", icon: "devicon-elasticsearch-plain colored" },
  ],
  technologies: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "gRPC", icon: "devicon-grpc-plain colored" },
    { name: "GraphQL", icon: "devicon-graphql-plain colored" },
    { name: "Kafka", icon: "devicon-apachekafka-plain colored" },
    { name: "RabbitMQ", icon: "devicon-rabbitmq-plain colored" },
    { name: "NATS", icon: "devicon-nats-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "GCP", icon: "devicon-googlecloud-plain colored" },
    { name: "OCI", icon: "devicon-oracle-original colored" },
    { name: "Jaegar", icon: "devicon-jaegertracing-plain colored" },
    { name: "Jenkins (CI/CD)", icon: jenkinsIcon },
  ],
};

// 6. Projects Section
const repos = {
  show: true,
  heading: "Projects",
  projects: [
    { 
      name: "Go Dutch",
      description: "A modern, lightweight alternative to Splitwise for managing group expenses and settling balances efficiently.",
      languages: ["Go", "Docker", "PostgreSQL"],
      repo_url: "https://github.com/raythx98/go-dutch",
      demo_url: "https://raythx98.github.io/dutch/",
    },
    { 
      name: "URL Shortener",
      description: "A high-performance URL shortener service with a containerized Go backend and PostgreSQL database.",
      languages: ["Go", "Docker", "PostgreSQL"],
      repo_url: "https://github.com/raythx98/url-shortener",
      demo_url: "https://raythx98.github.io/zap/",
    },
    { 
      name: "GoHelpMe",
      description: "Useful Go implementations and utilities for quick and consistent bootstrapping across microservices.",
      languages: ["Go", "Microservices"],
      repo_url: "https://github.com/raythx98/gohelpme",
      demo_url: null,
    },
    { 
      name: "Portfolio Website",
      description: "My personal developer portfolio built using modern React 19, Vite 7, and Bootstrap 5.",
      languages: ["React.js", "Vite", "Bootstrap", "Sass"],
      repo_url: "https://github.com/raythx98/me",
      demo_url: "https://raythx98.github.io/me/",
    },
  ]
};

// 7. Get In Touch Section
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
  "I am actively seeking exciting full-time Software Engineering opportunities within tech companies or trading firms! If you happen to come across any open positions, have inquiries to make, or simply want to connect and say hello, please don't hesitate to reach out to me via email at",
  email: "raythx98@gmail.com",
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
