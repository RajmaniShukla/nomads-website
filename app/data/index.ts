// Company Information
export const companyInfo = {
  name: "Nomads",
  tagline: "Engineering Tomorrow's Intelligence",
  taglines: [
    "Engineering Tomorrow's Intelligence",
    "Where AI Meets Innovation",
    "Transforming Ideas into Intelligent Solutions",
    "Your Partner in Digital Evolution",
    "Building the Future, One Algorithm at a Time",
  ],
  description: "A cutting-edge IT solutions and AI engineering company delivering end-to-end digital transformation services for startups, enterprises, and global clients.",
  email: "hello@nomads.tech",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94000",
  socials: {
    linkedin: "https://linkedin.com/company/nomads",
    twitter: "https://twitter.com/nomads",
    github: "https://github.com/nomads",
  },
};

// Services
export const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Tailored software solutions built for your unique business needs.",
    description: "We design and develop custom software applications that solve complex business challenges. Our solutions are scalable, secure, and built with cutting-edge technologies.",
    icon: "💻",
    benefits: ["Scalable Architecture", "Clean Code", "Future-proof Design", "Full Ownership"],
    technologies: ["Python", "Node.js", "Go", "Rust", "Java"],
  },
  {
    id: "web-development",
    title: "Web Application Development",
    shortDesc: "Modern, responsive web applications that deliver exceptional user experiences.",
    description: "From complex enterprise portals to sleek SaaS platforms, we build web applications that are fast, secure, and user-centric.",
    icon: "🌐",
    benefits: ["SEO Optimized", "Lightning Fast", "Responsive Design", "Secure"],
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android.",
    description: "We create mobile applications that users love. Whether native or cross-platform, our apps are performant, intuitive, and engaging.",
    icon: "📱",
    benefits: ["Cross-platform", "Native Performance", "Offline Support", "Push Notifications"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "chatbot-ai",
    title: "Chatbot & Conversational AI",
    shortDesc: "Intelligent chatbots that understand and engage your customers.",
    description: "Build AI-powered chatbots and virtual assistants that provide 24/7 customer support, automate workflows, and enhance user engagement.",
    icon: "🤖",
    benefits: ["24/7 Availability", "Multi-language", "Context Aware", "Easy Integration"],
    technologies: ["GPT-4", "LangChain", "Dialogflow", "Rasa"],
  },
  {
    id: "ai-automation",
    title: "AI-Driven Systems & Automation",
    shortDesc: "Automate complex processes with intelligent AI systems.",
    description: "Transform your operations with AI-powered automation. From document processing to decision support systems, we make your business smarter.",
    icon: "⚡",
    benefits: ["Cost Reduction", "Error Elimination", "Faster Processing", "Scalability"],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Automation Anywhere"],
  },
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    shortDesc: "Harness the power of generative AI for content, code, and creativity.",
    description: "Leverage cutting-edge generative AI models to create content, generate code, design images, and unlock new possibilities for your business.",
    icon: "✨",
    benefits: ["Content Generation", "Code Assistance", "Image Creation", "Innovation"],
    technologies: ["GPT-4", "Claude", "Stable Diffusion", "Midjourney API"],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Development",
    shortDesc: "Autonomous AI agents that think, plan, and execute complex tasks.",
    description: "Build autonomous AI agents capable of reasoning, planning, and executing multi-step tasks. From research assistants to automated workflows.",
    icon: "🧠",
    benefits: ["Autonomous Operation", "Complex Reasoning", "Task Orchestration", "Continuous Learning"],
    technologies: ["AutoGPT", "LangGraph", "CrewAI", "OpenAI Assistants"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision Solutions",
    shortDesc: "See the world through AI with advanced computer vision.",
    description: "From object detection to facial recognition, our computer vision solutions enable machines to understand and interpret visual data.",
    icon: "👁️",
    benefits: ["Real-time Processing", "High Accuracy", "Edge Deployment", "Custom Models"],
    technologies: ["YOLO", "OpenCV", "TensorFlow", "PyTorch Vision"],
  },
  {
    id: "ml-deployment",
    title: "AI/ML Model Development & Deployment",
    shortDesc: "End-to-end machine learning solutions from research to production.",
    description: "We build, train, and deploy machine learning models at scale. From data preparation to MLOps, we handle the entire ML lifecycle.",
    icon: "📊",
    benefits: ["Production Ready", "Scalable", "Monitored", "Continuously Improved"],
    technologies: ["MLflow", "Kubeflow", "SageMaker", "Vertex AI"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud-based Solutions",
    shortDesc: "Scalable, secure cloud infrastructure and services.",
    description: "Design and implement cloud-native architectures on AWS, GCP, or Azure. We help you migrate, optimize, and scale in the cloud.",
    icon: "☁️",
    benefits: ["Scalability", "Cost Optimization", "High Availability", "Security"],
    technologies: ["AWS", "GCP", "Azure", "Kubernetes"],
  },
  {
    id: "product-engineering",
    title: "End-to-End Product Engineering",
    shortDesc: "From concept to launch, we build products that succeed.",
    description: "Full-cycle product development from ideation to market launch. We combine strategy, design, and engineering to create winning products.",
    icon: "🚀",
    benefits: ["Market Research", "MVP Development", "Iterative Improvement", "Launch Support"],
    technologies: ["Agile", "Design Thinking", "CI/CD", "Analytics"],
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise IT Solutions",
    shortDesc: "Robust enterprise solutions for complex business needs.",
    description: "Enterprise-grade software solutions including ERP integration, CRM systems, and business intelligence platforms.",
    icon: "🏢",
    benefits: ["Integration Ready", "Compliance", "Scalable", "Secure"],
    technologies: ["SAP", "Salesforce", "Power BI", "Tableau"],
  },
];

// AI Solutions (Featured)
export const aiSolutions = [
  {
    id: "gen-ai",
    title: "Generative AI",
    description: "Create content, code, and creative assets with state-of-the-art generative models.",
    useCases: ["Content Generation", "Code Completion", "Image Synthesis", "Document Creation"],
    icon: "✨",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Autonomous AI systems that can reason, plan, and execute complex multi-step tasks.",
    useCases: ["Research Automation", "Workflow Orchestration", "Decision Support", "Process Automation"],
    icon: "🤖",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Visual intelligence for object detection, recognition, and analysis.",
    useCases: ["Quality Inspection", "Facial Recognition", "Medical Imaging", "Autonomous Systems"],
    icon: "👁️",
  },
  {
    id: "nlp-llm",
    title: "NLP & LLM Solutions",
    description: "Natural language understanding and generation at enterprise scale.",
    useCases: ["Chatbots", "Sentiment Analysis", "Document Processing", "Translation"],
    icon: "💬",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Intelligent automation that learns and improves over time.",
    useCases: ["RPA Enhancement", "Predictive Maintenance", "Anomaly Detection", "Smart Scheduling"],
    icon: "⚡",
  },
  {
    id: "custom-ai",
    title: "Custom AI Products",
    description: "Bespoke AI solutions tailored to your unique business challenges.",
    useCases: ["Industry-specific AI", "Proprietary Models", "AI-powered Features", "Research & Development"],
    icon: "🎯",
  },
];

// Industries
export const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description: "AI-powered diagnostics, patient management systems, and telemedicine solutions.",
    solutions: ["Medical Imaging AI", "Patient Analytics", "Drug Discovery", "Health Monitoring"],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: "🏦",
    description: "Fraud detection, algorithmic trading, risk assessment, and customer analytics.",
    solutions: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Regulatory Compliance"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: "🛒",
    description: "Personalization engines, inventory optimization, and customer experience enhancement.",
    solutions: ["Recommendation Systems", "Dynamic Pricing", "Inventory AI", "Visual Search"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🏭",
    description: "Predictive maintenance, quality control, and supply chain optimization.",
    solutions: ["Predictive Maintenance", "Quality Inspection", "Supply Chain AI", "Process Optimization"],
  },
  {
    id: "education",
    name: "Education & EdTech",
    icon: "🎓",
    description: "Adaptive learning platforms, content generation, and student analytics.",
    solutions: ["Adaptive Learning", "AI Tutoring", "Content Generation", "Assessment Automation"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: "🚚",
    description: "Route optimization, demand forecasting, and warehouse automation.",
    solutions: ["Route Optimization", "Demand Forecasting", "Fleet Management", "Warehouse Automation"],
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    icon: "💾",
    description: "AI-powered features, platform development, and technical infrastructure.",
    solutions: ["AI Feature Integration", "Platform Development", "API Services", "Infrastructure"],
  },
];

// Case Studies
export const caseStudies = [
  {
    id: "case-1",
    title: "AI-Powered Inventory Management",
    client: "Global Retail Chain",
    industry: "E-commerce",
    problem: "Manual inventory tracking led to stockouts and overstock situations, costing millions annually.",
    solution: "Implemented computer vision and ML-based inventory system with real-time tracking and predictive restocking.",
    results: ["30% reduction in stockouts", "25% decrease in overstock", "$2M annual savings", "Real-time visibility"],
    technologies: ["Computer Vision", "YOLO", "Python", "AWS"],
    image: "/case-1.jpg",
  },
  {
    id: "case-2",
    title: "Conversational AI for Customer Support",
    client: "FinTech Startup",
    industry: "Finance",
    problem: "Support team overwhelmed with repetitive queries, leading to long wait times and customer dissatisfaction.",
    solution: "Deployed AI chatbot with natural language understanding, handling 80% of queries automatically.",
    results: ["80% query automation", "60% faster resolution", "95% customer satisfaction", "24/7 availability"],
    technologies: ["GPT-4", "LangChain", "React", "Node.js"],
    image: "/case-2.jpg",
  },
  {
    id: "case-3",
    title: "Predictive Maintenance Platform",
    client: "Manufacturing Enterprise",
    industry: "Manufacturing",
    problem: "Unplanned equipment downtime causing production delays and high maintenance costs.",
    solution: "Built IoT-integrated ML platform predicting equipment failures before they occur.",
    results: ["45% reduction in downtime", "35% maintenance cost savings", "20% productivity increase", "ROI in 6 months"],
    technologies: ["TensorFlow", "IoT", "Azure", "Python"],
    image: "/case-3.jpg",
  },
];

// Team (Placeholders)
export const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former Google AI researcher with 15+ years in tech leadership.",
    image: "/team/alex.jpg",
    linkedin: "#",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Ex-Amazon principal engineer specializing in distributed systems.",
    image: "/team/sarah.jpg",
    linkedin: "#",
  },
  {
    name: "Michael Park",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford, published researcher.",
    image: "/team/michael.jpg",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Engineering",
    bio: "Built engineering teams at 3 successful startups.",
    image: "/team/emily.jpg",
    linkedin: "#",
  },
];

// Stats
export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
];

// Testimonials
export const testimonials = [
  {
    quote: "Nomads transformed our operations with their AI solutions. The ROI exceeded our expectations within months.",
    author: "David Miller",
    role: "CTO, TechCorp Inc.",
    company: "TechCorp",
  },
  {
    quote: "Their expertise in generative AI helped us launch features we thought were years away. Incredible team.",
    author: "Lisa Wang",
    role: "VP Product, InnovateCo",
    company: "InnovateCo",
  },
  {
    quote: "Professional, innovative, and reliable. Nomads is our go-to partner for all AI initiatives.",
    author: "James O'Brien",
    role: "CEO, DataFlow",
    company: "DataFlow",
  },
];

// Blog Posts (Placeholders)
export const blogPosts = [
  {
    id: "gpt-enterprise",
    title: "How GPT-4 is Transforming Enterprise Operations",
    excerpt: "Explore the practical applications of large language models in enterprise settings.",
    date: "2024-02-15",
    category: "AI Trends",
    readTime: "5 min",
    image: "/blog/gpt.jpg",
  },
  {
    id: "agentic-future",
    title: "The Rise of Agentic AI: What Businesses Need to Know",
    excerpt: "Understanding autonomous AI agents and their potential impact on business automation.",
    date: "2024-02-10",
    category: "AI Strategy",
    readTime: "7 min",
    image: "/blog/agentic.jpg",
  },
  {
    id: "computer-vision-2024",
    title: "Computer Vision Trends to Watch in 2024",
    excerpt: "From edge deployment to multimodal models, here's what's next in computer vision.",
    date: "2024-02-05",
    category: "Technology",
    readTime: "6 min",
    image: "/blog/cv.jpg",
  },
];

// Navigation
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
