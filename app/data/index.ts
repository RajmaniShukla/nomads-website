// ===== COMPANY INFO =====
export const companyInfo = {
  name: "Nomads",
  tagline: "Navigating the Future of Technology",
  description: "We are digital pioneers, helping businesses navigate the ever-evolving landscape of technology. From AI-powered solutions to cloud infrastructure, we build the future, today.",
  founded: 2020,
  employees: "50+",
  clients: "200+",
  projects: "500+",
  email: "hello@nomads.tech",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94000",
  social: {
    twitter: "https://twitter.com/nomadstech",
    linkedin: "https://linkedin.com/company/nomadstech",
    github: "https://github.com/nomadstech",
    instagram: "https://instagram.com/nomadstech",
  },
};

// ===== NAVIGATION =====
export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// ===== SERVICES =====
export const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Tailored solutions built for your unique business challenges.",
    description: "We design and develop custom software solutions that perfectly align with your business processes, helping you achieve operational excellence and competitive advantage.",
    icon: "Code",
    features: [
      "Full-stack web applications",
      "Mobile app development",
      "API development & integration",
      "Legacy system modernization",
      "Microservices architecture",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    shortDesc: "Scale seamlessly with enterprise-grade cloud infrastructure.",
    description: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.",
    icon: "Cloud",
    features: [
      "AWS, Azure & GCP expertise",
      "Cloud migration strategies",
      "Serverless architecture",
      "Cost optimization",
      "24/7 monitoring & support",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "Transform data into intelligent decisions and automation.",
    description: "Unlock the potential of artificial intelligence with custom ML models, predictive analytics, and intelligent automation solutions tailored to your industry.",
    icon: "Brain",
    features: [
      "Custom ML model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "AI-powered automation",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    shortDesc: "Turn raw data into actionable business intelligence.",
    description: "Make data-driven decisions with our comprehensive analytics solutions. We help you collect, process, and visualize data to uncover valuable insights.",
    icon: "BarChart3",
    features: [
      "Business intelligence dashboards",
      "Real-time data processing",
      "Data warehousing",
      "ETL pipeline development",
      "Custom reporting solutions",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDesc: "Protect your digital assets with enterprise-grade security.",
    description: "Safeguard your business with our comprehensive cybersecurity services. From threat assessment to incident response, we keep your data secure.",
    icon: "Shield",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Compliance management",
      "Security monitoring (SOC)",
      "Incident response planning",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    shortDesc: "Accelerate delivery with modern DevOps practices.",
    description: "Streamline your development and operations with our DevOps expertise. We implement CI/CD pipelines, infrastructure as code, and automated testing.",
    icon: "GitBranch",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Automated testing",
      "Performance optimization",
    ],
  },
];

// ===== AI SOLUTIONS =====
export const aiSolutions = [
  {
    id: "conversational-ai",
    title: "Conversational AI",
    description: "Build intelligent chatbots and virtual assistants that understand natural language and provide human-like interactions.",
    icon: "MessageSquare",
    benefits: ["24/7 customer support", "Reduced response time", "Scalable interactions", "Multi-language support"],
    useCases: ["Customer service bots", "Sales assistants", "Internal helpdesks", "Voice assistants"],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends, predict outcomes, and make proactive business decisions.",
    icon: "TrendingUp",
    benefits: ["Accurate forecasting", "Risk mitigation", "Resource optimization", "Competitive advantage"],
    useCases: ["Demand forecasting", "Churn prediction", "Fraud detection", "Maintenance planning"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Enable machines to see and understand visual data with advanced image and video analysis capabilities.",
    icon: "Eye",
    benefits: ["Automated inspection", "Real-time analysis", "Error reduction", "Process automation"],
    useCases: ["Quality control", "Security surveillance", "Medical imaging", "Autonomous systems"],
  },
  {
    id: "nlp-solutions",
    title: "NLP Solutions",
    description: "Extract insights from text data with natural language processing for sentiment analysis, summarization, and more.",
    icon: "FileText",
    benefits: ["Text understanding", "Sentiment insights", "Document automation", "Knowledge extraction"],
    useCases: ["Document processing", "Content moderation", "Search optimization", "Email classification"],
  },
  {
    id: "recommendation-engines",
    title: "Recommendation Engines",
    description: "Deliver personalized experiences with AI-powered recommendation systems that learn user preferences.",
    icon: "Sparkles",
    benefits: ["Increased engagement", "Higher conversions", "Personalized UX", "Customer retention"],
    useCases: ["E-commerce", "Content platforms", "Music/video streaming", "News personalization"],
  },
  {
    id: "process-automation",
    title: "Intelligent Automation",
    description: "Automate complex business processes with AI that learns, adapts, and improves over time.",
    icon: "Zap",
    benefits: ["Cost reduction", "Faster processing", "Error elimination", "Scalable operations"],
    useCases: ["Invoice processing", "Data entry automation", "Report generation", "Workflow optimization"],
  },
];

// ===== INDUSTRIES =====
export const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Transforming patient care with AI diagnostics, telemedicine platforms, and healthcare management systems.",
    icon: "Heart",
    solutions: ["AI-powered diagnostics", "Telemedicine platforms", "EHR systems", "Patient engagement apps"],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    description: "Modernizing financial services with secure fintech solutions, fraud detection, and algorithmic trading.",
    icon: "Landmark",
    solutions: ["Fraud detection systems", "Algorithmic trading", "Digital banking", "Risk assessment AI"],
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Enhancing customer experiences with personalized shopping, inventory optimization, and omnichannel solutions.",
    icon: "ShoppingBag",
    solutions: ["Recommendation engines", "Inventory management", "Omnichannel platforms", "Dynamic pricing"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Driving Industry 4.0 with smart factories, predictive maintenance, and supply chain optimization.",
    icon: "Factory",
    solutions: ["Predictive maintenance", "Quality control AI", "Supply chain optimization", "IoT integration"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    description: "Optimizing operations with route planning, demand forecasting, and real-time tracking solutions.",
    icon: "Truck",
    solutions: ["Route optimization", "Demand forecasting", "Fleet management", "Warehouse automation"],
  },
  {
    id: "education",
    name: "Education",
    description: "Revolutionizing learning with adaptive platforms, virtual classrooms, and AI-powered tutoring.",
    icon: "GraduationCap",
    solutions: ["Learning management systems", "AI tutoring", "Virtual classrooms", "Student analytics"],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    description: "Building sustainable futures with smart grid solutions, energy analytics, and renewable integration.",
    icon: "Leaf",
    solutions: ["Smart grid management", "Energy forecasting", "Renewable integration", "Consumption analytics"],
  },
];

// ===== CASE STUDIES / PORTFOLIO =====
export const caseStudies = [
  {
    id: "fintech-revolution",
    title: "Digital Banking Transformation",
    client: "GlobalBank Corp",
    industry: "Finance",
    description: "Transformed a traditional bank into a digital-first institution with a complete mobile banking platform and AI-powered fraud detection.",
    challenge: "Legacy systems causing slow transactions, poor user experience, and vulnerability to fraud.",
    solution: "Built a modern microservices architecture with real-time fraud detection using machine learning.",
    results: [
      { metric: "Transaction Speed", value: "10x faster" },
      { metric: "Fraud Detection", value: "99.7% accuracy" },
      { metric: "User Adoption", value: "2M+ users" },
      { metric: "Cost Savings", value: "$5M annually" },
    ],
    technologies: ["React Native", "Node.js", "AWS", "TensorFlow", "PostgreSQL"],
    image: "/images/case-fintech.jpg",
    featured: true,
  },
  {
    id: "healthcare-ai",
    title: "AI-Powered Diagnostics Platform",
    client: "MedTech Solutions",
    industry: "Healthcare",
    description: "Developed an AI system that assists radiologists in detecting early-stage cancers with unprecedented accuracy.",
    challenge: "Radiologists overwhelmed with imaging workload, leading to potential missed diagnoses.",
    solution: "Created a deep learning model trained on millions of medical images to flag potential issues.",
    results: [
      { metric: "Detection Rate", value: "94% accuracy" },
      { metric: "Analysis Time", value: "80% reduction" },
      { metric: "Cases Reviewed", value: "50K+ monthly" },
      { metric: "Early Detection", value: "+40% improvement" },
    ],
    technologies: ["Python", "PyTorch", "DICOM", "Azure", "React"],
    image: "/images/case-healthcare.jpg",
    featured: true,
  },
  {
    id: "smart-retail",
    title: "Personalized Shopping Experience",
    client: "RetailMax",
    industry: "Retail",
    description: "Built an AI-powered recommendation engine that increased average order value by 35% through hyper-personalization.",
    challenge: "Low conversion rates and poor customer engagement in a competitive e-commerce market.",
    solution: "Implemented real-time recommendation system with behavioral analysis and predictive modeling.",
    results: [
      { metric: "Order Value", value: "+35% increase" },
      { metric: "Conversion Rate", value: "+28% uplift" },
      { metric: "Customer Retention", value: "+45%" },
      { metric: "Revenue Growth", value: "$12M added" },
    ],
    technologies: ["Python", "Apache Spark", "Redis", "Next.js", "GCP"],
    image: "/images/case-retail.jpg",
    featured: true,
  },
  {
    id: "logistics-optimization",
    title: "Smart Supply Chain Platform",
    client: "LogiFlow International",
    industry: "Logistics",
    description: "Created an intelligent supply chain platform that optimizes routes, predicts demand, and automates warehouse operations.",
    challenge: "Inefficient routing, high fuel costs, and inventory management issues causing delivery delays.",
    solution: "Built an end-to-end platform with AI-powered route optimization and demand forecasting.",
    results: [
      { metric: "Fuel Costs", value: "-30% reduction" },
      { metric: "Delivery Time", value: "25% faster" },
      { metric: "Inventory Accuracy", value: "99.2%" },
      { metric: "Operational Costs", value: "-$3M yearly" },
    ],
    technologies: ["Python", "TensorFlow", "IoT", "AWS", "React"],
    image: "/images/case-logistics.jpg",
    featured: false,
  },
  {
    id: "edtech-platform",
    title: "Adaptive Learning Platform",
    client: "EduSmart Academy",
    industry: "Education",
    description: "Developed an AI-driven learning platform that personalizes curriculum based on student performance and learning style.",
    challenge: "One-size-fits-all approach failing students with different learning needs and paces.",
    solution: "Created adaptive learning algorithms that customize content and pace for each student.",
    results: [
      { metric: "Student Performance", value: "+40% improvement" },
      { metric: "Engagement", value: "3x increase" },
      { metric: "Course Completion", value: "85% rate" },
      { metric: "Students Served", value: "100K+" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Python", "AWS"],
    image: "/images/case-education.jpg",
    featured: false,
  },
  {
    id: "energy-analytics",
    title: "Smart Grid Analytics",
    client: "PowerGrid Solutions",
    industry: "Energy",
    description: "Implemented an intelligent energy management system that optimizes grid operations and predicts maintenance needs.",
    challenge: "Aging infrastructure causing outages and inefficient energy distribution.",
    solution: "Deployed IoT sensors with AI analytics for predictive maintenance and load optimization.",
    results: [
      { metric: "Outages", value: "-60% reduction" },
      { metric: "Energy Efficiency", value: "+25%" },
      { metric: "Maintenance Costs", value: "-40%" },
      { metric: "Grid Reliability", value: "99.9% uptime" },
    ],
    technologies: ["Python", "Apache Kafka", "InfluxDB", "React", "Azure IoT"],
    image: "/images/case-energy.jpg",
    featured: false,
  },
];

// ===== TEAM =====
export const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech, previously at Google and Amazon. Passionate about using technology to solve real-world problems.",
    image: "/images/team/alex.jpg",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Tech architect with expertise in AI/ML and distributed systems. Former engineering lead at Microsoft with multiple patents.",
    image: "/images/team/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "Michael Park",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford. Led AI research teams at top tech companies before joining Nomads.",
    image: "/images/team/michael.jpg",
    linkedin: "https://linkedin.com/in/michaelpark",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Engineering",
    bio: "Engineering leader focused on building high-performing teams. 12+ years of experience shipping products at scale.",
    image: "/images/team/emily.jpg",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    name: "David Kim",
    role: "Head of Design",
    bio: "Award-winning designer with a passion for creating intuitive user experiences. Previously led design at Airbnb.",
    image: "/images/team/david.jpg",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Lisa Wang",
    role: "VP of Client Success",
    bio: "Customer-focused leader ensuring our clients achieve their goals. 10+ years in enterprise software consulting.",
    image: "/images/team/lisa.jpg",
    linkedin: "https://linkedin.com/in/lisawang",
  },
];

// ===== TESTIMONIALS =====
export const testimonials = [
  {
    quote: "Nomads transformed our entire digital infrastructure. Their AI solutions have given us a competitive edge we never thought possible.",
    author: "Jennifer Lee",
    role: "CTO",
    company: "TechVentures Inc.",
    image: "/images/testimonials/jennifer.jpg",
  },
  {
    quote: "The team's expertise in cloud architecture saved us millions in operational costs. They're not just vendors, they're true partners.",
    author: "Robert Martinez",
    role: "VP of Engineering",
    company: "GlobalRetail Corp",
    image: "/images/testimonials/robert.jpg",
  },
  {
    quote: "Working with Nomads on our predictive analytics platform was exceptional. They delivered beyond our expectations, on time and on budget.",
    author: "Amanda Foster",
    role: "Head of Data Science",
    company: "FinanceFirst",
    image: "/images/testimonials/amanda.jpg",
  },
  {
    quote: "Their healthcare AI solution is saving lives. The diagnostic accuracy and speed improvements have been remarkable.",
    author: "Dr. James Wilson",
    role: "Chief Medical Officer",
    company: "MedCare Hospital",
    image: "/images/testimonials/james.jpg",
  },
];

// ===== BLOG POSTS =====
export const blogPosts = [
  {
    id: "future-of-ai-2024",
    title: "The Future of AI in Enterprise: Trends to Watch",
    excerpt: "Explore the emerging AI trends that will shape how businesses operate in the coming years, from generative AI to autonomous systems.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "8 min read",
    image: "/images/blog/ai-future.jpg",
    featured: true,
  },
  {
    id: "cloud-cost-optimization",
    title: "10 Strategies for Cloud Cost Optimization",
    excerpt: "Learn proven techniques to reduce your cloud spending without sacrificing performance or reliability.",
    author: "Michael Park",
    date: "2024-01-10",
    category: "Cloud Computing",
    readTime: "6 min read",
    image: "/images/blog/cloud-costs.jpg",
    featured: false,
  },
  {
    id: "cybersecurity-ai",
    title: "How AI is Revolutionizing Cybersecurity",
    excerpt: "Discover how artificial intelligence is becoming the frontline defense against evolving cyber threats.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "Cybersecurity",
    readTime: "7 min read",
    image: "/images/blog/cyber-ai.jpg",
    featured: true,
  },
  {
    id: "digital-transformation-guide",
    title: "The Complete Guide to Digital Transformation",
    excerpt: "A comprehensive roadmap for businesses looking to modernize their operations and embrace digital innovation.",
    author: "Alex Chen",
    date: "2024-01-01",
    category: "Digital Transformation",
    readTime: "12 min read",
    image: "/images/blog/digital-transform.jpg",
    featured: false,
  },
  {
    id: "devops-best-practices",
    title: "DevOps Best Practices for 2024",
    excerpt: "Stay ahead with the latest DevOps strategies, tools, and methodologies for efficient software delivery.",
    author: "David Kim",
    date: "2023-12-28",
    category: "DevOps",
    readTime: "9 min read",
    image: "/images/blog/devops.jpg",
    featured: false,
  },
  {
    id: "data-driven-decisions",
    title: "Building a Data-Driven Organization",
    excerpt: "Learn how to create a culture of data-driven decision making and unlock the full potential of your data.",
    author: "Lisa Wang",
    date: "2023-12-20",
    category: "Data Analytics",
    readTime: "10 min read",
    image: "/images/blog/data-driven.jpg",
    featured: false,
  },
];

// ===== STATS =====
export const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "200+", label: "Happy Clients" },
  { number: "50+", label: "Team Members" },
  { number: "99%", label: "Client Satisfaction" },
];

// ===== PROCESS =====
export const process = [
  {
    step: 1,
    title: "Discovery",
    description: "We dive deep into understanding your business, challenges, and goals to create a tailored strategy.",
  },
  {
    step: 2,
    title: "Design",
    description: "Our team designs intuitive solutions with user experience at the forefront, validated through prototypes.",
  },
  {
    step: 3,
    title: "Development",
    description: "We build using agile methodologies, ensuring regular updates and flexibility throughout the process.",
  },
  {
    step: 4,
    title: "Deployment",
    description: "Rigorous testing and smooth deployment with comprehensive documentation and training.",
  },
  {
    step: 5,
    title: "Support",
    description: "Ongoing maintenance, monitoring, and support to ensure your solution evolves with your business.",
  },
];

// ===== FAQ =====
export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple web application might take 2-3 months, while enterprise AI solutions can take 6-12 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with businesses of all sizes. Our scalable solutions and flexible engagement models are designed to meet the needs of both ambitious startups and established enterprises.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in healthcare, finance, retail, manufacturing, logistics, education, and energy. However, our technical capabilities allow us to serve virtually any industry.",
  },
  {
    question: "How do you ensure project security?",
    answer: "Security is built into every phase of our process. We follow industry best practices, conduct regular security audits, and comply with standards like SOC 2, HIPAA, and GDPR as required.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing including fixed-price projects, time & materials, and dedicated team models. We'll recommend the best approach based on your project needs during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely. We offer various support and maintenance packages to ensure your solution continues to perform optimally and evolves with your business needs.",
  },
];
