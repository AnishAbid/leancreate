export const site = {
  name: "LEAN | CREATE",
  shortName: "Lean Create",
  tagline: "EMPOWERING EFFICIENT INNOVATION",
  description:
    "Lean Create designs and engineers the software, platforms, and AI systems that carry ambitious teams forward — dependable in production, intelligent by design.",
  email: "info@leancreate.com",
  phone: "+1 (770) 655-5934",
  phoneHref: "tel:+17706555934",
  location: "Lahore, Pakistan",
};

export const navItems = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-help", label: "Who We Help" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/experts", label: "Experts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinkCols = [
  [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/who-we-help", label: "Who We Help" },
    { href: "/how-we-work", label: "How We Work" },
  ],
  [
    { href: "/what-we-do", label: "Service" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
];

export const valueProps = [
  {
    title: "Practical outcomes",
    body: "Experienced specialists matched to your specific challenge.",
    image: "/assets/practicaloutcome.png",
  },
  {
    title: "The right expertise",
    body: "From a focused consultation to long-term advisory support.",
    image: "/assets/rightexpertise.png",
  },
  {
    title: "Lean Create",
    body: "Business-focused recommendations that can actually be implemented.",
    image: "/assets/leancreate.png",
  },
  {
    title: "Your challenge",
    body: "Your ideas, products and business information are treated with professional confidentiality.",
    image: "/assets/yourchallenge.png",
  },
];

export const services = [
  {
    title: "Strategy & Growth",
    items: [
      "Startup consultancy",
      "Business strategy",
      "Startup evaluation and readiness assessment",
      "Innovation consultancy",
      "New venture design",
      "Business model design",
      "Market and competitor analysis",
      "Feasibility studies",
      "Go to market strategy",
    ],
    image: "/images/office.png",
    href: "/what-we-do",
  },
  {
    title: "Product & Design",
    items: [
      "Product strategy",
      "Product discovery and validation",
      "Roadmap definition and prioritisation",
      "Requirement and user story development",
      "User research",
      "Minimum viable product definition",
      "Launch planning",
      "Post launch performance tracking and iteration",
      "Product audits for existing products",
    ],
    image: "/images/expertise-design.png",
    href: "/what-we-do",
  },
  {
    title: "Software Development",
    items: [
      "Web application development",
      "Mobile application development",
      "Enterprise system development",
      "Backend and API development",
      "System and software architecture",
      "Third party integrations",
      "Database design and data engineering",
      "Quality assurance and testing",
      "Maintenance and ongoing support",
    ],
    image: "/images/expertise-tech.png",
    href: "/what-we-do",
  },
  {
    title: "Artificial Intelligence",
    items: [
      "AI opportunity identification",
      "AI use case definition",
      "AI solution design",
      "Machine learning",
      "AI integration",
      "Data recognition",
      "Data analysis",
      "Automation",
      "AI governance",
      "Team enablement",
    ],
    image: "/images/expertise-automation.png",
    href: "/what-we-do",
  },
];

export const offerServices = [
  {
    title: "Strategy & Innovation",
    body: "Business strategy, innovation roadmaps, and new venture design. We help you decide what to build and why, before you spend money building it.",
    image: "/images/office.png",
    href: "/what-we-do",
  },
  {
    title: "Software Development",
    body: "Full end to end software development. We design, build, test, launch, and maintain web applications, mobile apps, and enterprise systems.",
    image: "/images/expertise-tech.png",
    href: "/what-we-do",
  },
  {
    title: "Dedicated Teams",
    body: "Don't have a development team? We build one for you. We assemble the right mix of engineers, designers, and specialists for your project.",
    image: "/images/expertise-design.png",
    href: "/what-we-do",
  },
];

export const allServices = [
  {
    icon: "spark" as const,
    title: "AI Agentic Flows",
    body: "Autonomous agents that plan, act, and ship work into production.",
  },
  {
    icon: "mobile" as const,
    title: "Mobile App Development",
    body: "Native and cross-platform apps that scale with your users.",
  },
  {
    icon: "web" as const,
    title: "Web App Development",
    body: "Fast, resilient web platforms engineered for real traffic.",
  },
  {
    icon: "transform" as const,
    title: "Digital Transformation",
    body: "Modernize legacy systems without stalling the business.",
  },
  {
    icon: "cloud" as const,
    title: "Cloud & Infra Services",
    body: "Secure, observable infrastructure that holds up under load.",
  },
  {
    icon: "layers" as const,
    title: "Platform Engineering",
    body: "Internal platforms and tooling that speed every team up.",
  },
  {
    icon: "consult" as const,
    title: "Consulting & Products",
    body: "Strategy and build, from first idea to shipped product.",
  },
];

export const buildGroups = [
  {
    heading: "AI Transformation",
    items: [
      {
        icon: "spark" as const,
        title: "First AI Win",
        body: "Your first intelligent leap with dedicated workshops, expert consulting, and integrations.",
      },
      {
        icon: "users" as const,
        title: "AI-Enabled Engineers",
        body: "Senior engineers fluent in LLMs, RAG, and AI workflows.",
      },
      {
        icon: "transform" as const,
        title: "Modernization",
        body: "Revamp legacy systems into cloud-native, AI-ready modern platforms.",
      },
      {
        icon: "workflow" as const,
        title: "Process Automation",
        body: "Smarter automation across business processes and repetitive workflows.",
      },
      {
        icon: "consult" as const,
        title: "Chatbot & Voice AI",
        body: "AI agents that talk, listen, and resolve customer queries.",
      },
    ],
  },
  {
    heading: "Engineering Services",
    items: [
      {
        icon: "web" as const,
        title: "Software Development",
        body: "Full-stack development across web, mobile, custom, and MVPs.",
      },
      {
        icon: "cloud" as const,
        title: "Cloud & DevOps",
        body: "Cloud-native engineering and DevOps for modern, resilient infrastructure.",
      },
      {
        icon: "layers" as const,
        title: "System Integration",
        body: "Connect cloud, APIs, legacy systems, and third-party tools.",
      },
      {
        icon: "gauge" as const,
        title: "Data Engineering",
        body: "Turn scattered data into clean pipelines and clear insights.",
      },
    ],
  },
];

export const benefits = [
  {
    icon: "target" as const,
    title: "Tell Us Your Challenge",
    body: "Share your business, product or technology challenge.",
  },
  {
    icon: "speech" as const,
    title: "We Understand",
    body: "We assess your needs and identify the right expertise.",
  },
  {
    icon: "users" as const,
    title: "Meet the Right Expert",
    body: "Connect with a specialist suited to your challenge.",
  },
  {
    icon: "handshake" as const,
    title: "Solve & Build",
    body: "Work through consultation, workshops, assessment or project engagement.",
  },
  {
    icon: "walk" as const,
    title: "Keep Moving Forward",
    body: "Continue with ongoing advisory or transformation support when needed.",
  },
];

export const principles = [
  {
    title: "Curated expertise",
    body: "Whether you're validating an idea, improving a product, adopting AI, or transforming your operations, start with the challenge—not the solution.",
    image: "/assets/curated-expertise.svg",
  },
  {
    title: "Flexible engagements",
    body: "We assess your challenge, understand your goals and identify the right approach and expertise for your situation.",
    image: "/assets/flexible-engagement.svg",
  },
  {
    title: "The right level, not the highest level",
    body: "Not every project requires a full complement of senior specialists. We design the team around the work and your budget, and explain the reasoning behind it.",
    image: "/assets/practical-thinking.svg",
  },
  {
    title: "Practical thinking",
    body: "No fifty page decks that sit in a drawer. Every recommendation arrives with a route to executing it.",
    image: "/assets/practical-thinking.svg",
  },
  {
    title: "Transparency throughout",
    body: "The plan, the team, the costs, and the risks, in full and in advance. Nothing about how we work should come as a surprise.",
    image: "/assets/flexible-engagement.svg",
  },
  {
    title: "Confidential by design",
    body: "Your ideas, data, and plans remain yours. Discretion is standard practice rather than an added service.",
    image: "/assets/confidential.svg",
  },
];

export const capabilityTags = [
  "MERN",
  "MEAN",
  "PHP",
  ".NET",
  "Flutter",
  "React Native",
  "Java",
  "Kotlin",
  "AI / ML",
  "Cloud & DevOps",
  "Platform Engineering",
  "Data Engineering",
];

export const audienceTags = [
  "Startups & Founders",
  "SMEs & Growing Businesses",
  "Enterprises",
  "Government & Public Sector",
  "Universities",
  "Incubators & Accelerators",
  "Investors & Innovation Programs",
];

export const audiences = [
  {
    title: "Startup Founders",
    icon: "/assets/startup-founders.svg",
    body: "You have an idea, limited time, and no room for wasted spend. We help you validate it, design it, build it, and get it in front of users, with senior expertise you couldn't otherwise hire at this stage.",
  },
  {
    title: "Small And Medium Businesses",
    icon: "/assets/Small-and-medium-businesses.svg",
    body: "You are competing with players many times your size. We help you grow, modernize your operations, and adopt the tools that level the field.",
  },
  {
    title: "Large Enterprises",
    icon: "/assets/large-enterprises.svg",
    body: "You have the resources; the challenge is speed. We help you move faster, adopt AI responsibly, and transform legacy operations without disrupting the business that pays for it all.",
  },
  {
    title: "Family Businesses",
    icon: "/assets/family-businesses.svg",
    body: "Modernizing for the next generation without losing what made the business work. We respect what you have built and upgrade how it runs.",
  },
  {
    title: "Governments",
    icon: "/assets/governments.svg",
    body: "Digital services that citizens actually use. We bring private sector execution discipline to public sector missions.",
  },
  {
    title: "Universities And Educational Institutions",
    icon: "/assets/universities-and-educationalp-institutions.svg",
    body: "Bridging research, innovation, and real world application. We help institutions turn knowledge into ventures, programs, and partnerships.",
  },
  {
    title: "Incubators, Accelerators, And Development Organizations",
    icon: "/assets/Incubators-accelerators-and-development-organizations.svg",
    body: "Your portfolio is only as strong as the support behind it. We work alongside your teams to strengthen the startups and ecosystems you're building.",
  },
];

export const howItWorksIntro = {
  headingBefore: "A Clear Process, From First Conversation To",
  underline: "Measurable",
  headingAfter: "Result.",
  body: "Every engagement follows the same structure, whether it is a four week strategy sprint or a year long build. You always know which stage you are in, what is expected of you, and what you receive at the end of it.",
};

export const howItWorksSteps = [
  {
    num: "01",
    title: "Discovery",
    icon: "search" as const,
    body: "We begin by understanding your business before recommending anything: conversations with the people closest to the problem, a review of your existing systems, product, or processes, and a clear picture of your constraints in budget, timeline, and team.",
    receive: "A written summary of the challenge as we understand it.",
  },
  {
    num: "02",
    title: "Assessment and Recommendation",
    icon: "plan" as const,
    body: "We set out your realistic options with the cost, effort, and trade off attached to each. If the best option is one we cannot deliver, we say so. If the problem is smaller than you thought, we say that too.",
    receive: "A recommendation document with prioritised options and clear reasoning.",
  },
  {
    num: "03",
    title: "Project Planning",
    icon: "setup" as const,
    body: "We translate the chosen direction into a detailed plan covering phases, milestones, delivery dates, and responsibilities on both sides. The plan is built with your input rather than handed to you.",
    receive: "A complete project plan with a milestone schedule and delivery dates.",
  },
  {
    num: "04",
    title: "Team Design",
    icon: "team" as const,
    body: "The plan determines the team. We assess which roles the work requires, at which seniority, and for how long. Not every project needs a full complement of senior specialists, and paying for one is rarely the right use of a budget.",
    receive: "A proposed team structure showing each role, seniority, and duration, with costs made clear.",
  },
  {
    num: "05",
    title: "Engagement Setup",
    icon: "execute" as const,
    body: "We agree who is involved on your side and how closely you want to be involved, from daily updates and open access to the team, through to milestone reviews alone. We advise on what we believe the project requires from both sides, then follow your preference. Regardless of what you choose, you are informed immediately of any risk to timeline, budget, or scope.",
    receive: "An engagement charter naming both teams, the agreed communication rhythm, and the escalation route.",
  },
  {
    num: "06",
    title: "Scope and Agreement",
    icon: "target" as const,
    body: "The plan, team, and engagement terms are formalised alongside deliverables, commercial terms, change control, and how success will be measured. No work begins until this is signed.",
    receive: "A signed scope of work with fixed milestones and agreed success measures.",
  },
  {
    num: "07",
    title: "Execution",
    icon: "scope" as const,
    body: "This is the stage where most consultancies hand over and leave. We build, operate the team, and implement, working in short cycles against the plan so progress stays visible throughout rather than only at the end.",
    receive: "Working output at every milestone and a standing progress review.",
  },
  {
    num: "08",
    title: "Handover and Enablement",
    icon: "handover" as const,
    body: "We do not create dependency. Every engagement concludes with your team equipped to operate what we built, through documentation, training, and standard operating procedures. It belongs to you.",
    receive: "Full documentation, handover sessions, and a defined support window.",
  },
  {
    num: "09",
    title: "Measurement",
    icon: "measure" as const,
    body: "Success measures are agreed at the start and assessed at the end. Where results fall short, we address it. Many clients continue with us beyond this point. Many do not need to, and that is a good outcome as well.",
    receive: "A results review against the agreed measures and a recommendation on what is worth doing next.",
  },
];

export const engagementModels = [
  {
    title: "Project based",
    icon: "/assets/project-management.svg",
    body: "A defined outcome, timeline, and price. Suited to organizations that know what needs to be built.",
  },
  {
    title: "Embedded expertise",
    icon: "/assets/expertise-on-demand.svg",
    body: "Senior specialists working within your team for a defined period. Suited to organizations with a capable team but a specific gap.",
  },
  {
    title: "Managed team",
    icon: "/assets/dedicated-teams.svg",
    body: "We design, assemble, and operate a full team on your behalf, including supervision and delivery. Suited to organizations that need capability they do not currently have.",
  },
  {
    title: "Ongoing partnership",
    icon: "/assets/flexible-engagement.svg",
    body: "A retained relationship for organizations that want strategy and execution support available continuously.",
  },
];

export const processSteps = [
  {
    num: "1",
    title: "We Send a Quote",
    body: "After processing your request, we contact you to discuss your project needs and sign an NDA.",
  },
  {
    num: "2",
    title: "Our Team Responds",
    body: "We create a project proposal outlining the scope, team size, timeline, and cost.",
  },
  {
    num: "3",
    title: "We Schedule a Meeting",
    body: "We arrange a meeting to discuss the offer and nail down the details.",
  },
  {
    num: "4",
    title: "Get Started",
    body: "We sign a contract and start working on your project right away.",
  },
];

export const expertIntro = {
  headingBefore: "The Right Specialist,",
  underline: "Matched",
  headingAfter: "To The Work.",
  body: "Lean Create draws on a network of professionals built over years of delivery work. Each specialist is known through completed projects rather than selected from a database, which means we can tell you what someone has actually delivered, not only what they list. If you are not sure about which experts you need, we will do the assessment for you based on the challenge your organization is facing.",
};

export const expertOffers = [
  {
    title: "Strategy and Business",
    icon: "/assets/strategy-innovation.svg",
    body: "Experts responsible for direction and the decisions that set it. They assess where the business currently stands, test the assumptions behind the plan, model the financial position, and define the path forward, whether you are entering a new market or improving an operation that has been running for years.",
  },
  {
    title: "Product",
    icon: "/assets/product-management.svg",
    body: "Experts responsible for defining the product and how it should be shaped. They set the product direction, develop the roadmap, prioritise what is built and when, and establish requirements based on what users actually need.",
  },
  {
    title: "Engineering",
    icon: "/assets/software-development.svg",
    body: "Experts who design system architecture and develop applications across web, mobile, and enterprise platforms. They integrate systems that must work together, build and maintain the databases behind them, and manage the cloud infrastructure and deployment pipelines everything runs on.",
  },
  {
    title: "Data and Artificial Intelligence",
    icon: "/assets/artificial-intelligence.svg",
    body: "Experts who build the data infrastructure an organization runs on and the artificial intelligence built upon it. They design and construct data pipelines, develop analytics and reporting, train and deploy machine learning models, and architect AI solutions from use case selection through to integration with live operations.",
  },
  {
    title: "Design",
    icon: "/assets/design.svg",
    body: "Experts responsible for how a product is structured and experienced. They research how people use the product, design its interface and the flows within it, build the systems that keep it consistent as it grows, and shape the visual identity through which the organization presents itself.",
  },
  {
    title: "Quality",
    icon: "/assets/dedicated-teams.svg",
    body: "Experts responsible for confirming that what has been built performs as intended. They test functionality across releases, measure performance under load, and verify accessibility standards, so that issues are identified during development rather than by your users.",
  },
  {
    title: "Security and Compliance",
    icon: "/assets/confidential.svg",
    body: "Experts responsible for protecting systems and the information held within them. They design security into the architecture, assess vulnerabilities, test defences under controlled conditions, and ensure data practices meet the regulatory obligations applying to your sector.",
  },
  {
    title: "Delivery and Operations",
    icon: "/assets/project-management.svg",
    body: "Experts responsible for work reaching completion. They plan and coordinate delivery, hold teams accountable to milestones, improve the processes surrounding the work, and establish working methods that remain in place after the engagement ends.",
  },
  {
    title: "Specialist Advisory",
    icon: "/assets/technical-advisory-evaluation.svg",
    body: "Experts brought in for independent assessment on decisions that carry consequence. They conduct technical due diligence ahead of an acquisition or investment, audit systems and codebases already built, advise on regulatory requirements in sectors such as healthcare, financial services, and government, and train teams to operate what has been delivered.",
  },
];

export const expertRoles = [
  {
    title: "Strategy and Business",
    image: "/images/office.png",
    items: [
      "Business strategy consultant",
      "Startup consultant and advisor",
      "Innovation consultant",
      "Market researcher and analyst",
      "Business analyst",
      "Financial modelling specialist",
      "Go-to-market and growth strategist",
    ],
  },
  {
    title: "Product",
    image: "/images/expertise-design.png",
    items: [
      "Product manager",
      "Product owner",
      "Product strategist",
      "User researcher",
      "Business analyst",
    ],
  },
  {
    title: "Engineering",
    image: "/images/expertise-tech.png",
    items: [
      "Technical architect",
      "Solutions architect",
      "Full stack engineer",
      "Mobile engineer, iOS and Android",
      "Enterprise systems engineer",
      "Database engineer",
      "DevOps and cloud infrastructure engineer",
    ],
  },
  {
    title: "Data and Artificial Intelligence",
    image: "/images/expertise-automation.png",
    items: [
      "Data scientist",
      "Data engineer",
      "Data analyst",
      "Machine learning specialist",
      "AI solutions architect",
      "Automation specialist",
      "Business intelligence analyst",
    ],
  },
  {
    title: "Design",
    image: "/images/service-design.png",
    items: [
      "UX designer",
      "UI designer",
      "Product designer",
      "Brand and visual designer",
      "Design systems specialist",
      "Content designer",
    ],
  },
  {
    title: "Quality",
    image: "/images/digital-transform.png",
    items: [
      "Quality assurance engineer",
      "Test automation engineer",
      "Performance tester",
      "Accessibility specialist",
      "Release quality lead",
    ],
  },
  {
    title: "Security and Compliance",
    image: "/images/service-cloud.png",
    items: [
      "Security architect",
      "Information security specialist",
      "Penetration tester",
      "Compliance specialist",
      "Privacy and data protection advisor",
    ],
  },
  {
    title: "Delivery and Operations",
    image: "/images/mvp.png",
    items: [
      "Project manager",
      "Delivery manager",
      "Scrum master",
      "Operations specialist",
      "Process improvement consultant",
    ],
  },
  {
    title: "Specialist Advisory",
    image: "/images/case-study.png",
    items: [
      "Technical due diligence advisor",
      "Systems and codebase auditor",
      "Regulatory advisor",
      "Independent technical assessor",
      "Enablement specialist",
    ],
  },
];

export const stats = [
  { num: "220+", label: "Projects successfully completed" },
  { num: "90+", label: "Clients who trust our craftsmanship" },
  { num: "45+", label: "Dedicated engineers and specialists" },
  { num: "10+", label: "Years of shipping into production" },
];

export const insightCategories = [
  "All",
  "Business",
  "Product",
  "AI & Technology",
  "Innovation",
  "Entrepreneurship",
] as const;

export const insights = [
  {
    title: "Beyond The Hype: Where AI Creates Real Business Value",
    excerpt:
      "AI is changing how businesses operate, but successful adoption starts with the right problem—not the technology.",
    image: "/images/beyound-the-hype.png",
    category: "AI & Technology" as const,
    href: "/insights",
  },
  {
    title: "From Idea To MVP: What Should You Build First?",
    excerpt:
      "A great product starts with a clear understanding of the problem. Learn how founders can validate ideas.",
    image: "/images/mvp.png",
    category: "Product" as const,
    href: "/insights",
  },
  {
    title: "Digital Transformation Starts With Better Questions",
    excerpt:
      "Modernizing a business isn't simply about replacing old systems with new technology.",
    image: "/images/digital-transform.png",
    category: "Business" as const,
    href: "/insights",
  },
];

export const testimonials = [
  {
    name: "Tay",
    role: "VP Engineering",
    quote:
      "They shipped our agent pipeline in weeks, not quarters. It just works in production.",
  },
  {
    name: "Abigail Abbas",
    role: "CTO",
    quote:
      "They cut our deployment time from days to minutes — and stayed honest the whole way.",
  },
  {
    name: "Johan",
    role: "Head of Product",
    quote:
      "Clear communication, dependable delivery. The arc from idea to impact was real.",
  },
];

export const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide custom software development, web and mobile apps, AI agentic flows, IT consulting, cloud and infrastructure, platform engineering, and ongoing support. If you have a specific need, we can discuss a solution just for you.",
  },
  {
    q: "How do I get a quote for my project?",
    a: "Fill out the contact form with your project details, and our team will reach out within 24 hours with a tailored proposal.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary with complexity. A focused app might take 2–3 months; enterprise platforms can span 6–12 months or more.",
  },
  {
    q: "How quickly can I expect a response?",
    a: "We typically respond to all inquiries within 24 business hours. For urgent matters, you can book a call directly.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our stack covers MERN, MEAN, Flutter, React Native, .NET, PHP, Java, Kotlin, and AI/ML frameworks — chosen for the best fit per project.",
  },
  {
    q: "Do you sign NDAs or confidentiality agreements?",
    a: "Yes. We sign NDAs before project discussions. Your ideas and data are fully protected.",
  },
  {
    q: "Can you work with our existing systems or team?",
    a: "Yes. We integrate with legacy systems and embed with client development teams as needed.",
  },
  {
    q: "What if I need changes after the project starts?",
    a: "We follow agile methods, so change requests are handled transparently with an impact assessment.",
  },
  {
    q: "Do you offer support after the project is completed?",
    a: "Yes. We offer ongoing maintenance and support packages — from bug fixes to feature enhancements.",
  },
  {
    q: "How do you ensure the security of our data?",
    a: "We follow industry practice including encryption, secure coding standards, regular audits, and relevant data-protection regulations.",
  },
  {
    q: "How do we get started?",
    a: "Tell us your challenge on this page. We will contact you to discuss goals, then put together a proposal and timeline.",
  },
  {
    q: "What are your payment terms?",
    a: "Payment terms are flexible and typically structured in milestones. We finalize terms during the proposal stage.",
  },
];

export const caseStudies = [
  {
    label: "Case Study 02",
    title: "Turning Manual Operations Into Smarter Workflows",
    challenge:
      "A business was relying on time-consuming manual processes that limited efficiency and created unnecessary operational overhead.",
    whatWeDid:
      "We assessed existing workflows, identified automation opportunities and developed a technology and AI strategy to improve operational efficiency.",
    outcome:
      "More streamlined processes, reduced manual effort and a clearer path toward intelligent automation.",
    href: "/insights",
    image: "/images/case-study-1.png",
  },
  {
    label: "Case Study 01",
    title: "Helping a Founding Team Turn an Idea Into a Product",
    challenge:
      "A startup had a strong concept but no clear product direction, technical plan or path from idea to a usable first version.",
    whatWeDid:
      "We clarified the opportunity, shaped the product strategy and brought in the right design and technology expertise to move from concept to execution.",
    outcome:
      "A focused product direction, a practical build plan and a first version the team could take to users and investors.",
    href: "/insights",
    image: "/images/case-study-1.png",
  },
  {
    label: "Case Study 03",
    title: "Building a Clearer Path to AI Adoption",
    challenge:
      "An organization wanted to use AI but was unsure where it would create real value versus adding complexity.",
    whatWeDid:
      "We identified high-impact use cases, defined a practical AI approach and outlined the systems, data and expertise needed to implement it.",
    outcome:
      "A prioritized set of AI opportunities and a realistic roadmap the organization could act on with confidence.",
    href: "/insights",
    image: "/images/case-study-1.png",
  },
];

export const aboutIntro = [
  "Lean Create is a strategy and technology consultancy. We start with your challenge, work to understand it properly, and then bring you whatever resolving it actually requires.",
  "Sometimes that is a single specialist. If you need a technical architect to review your systems, a product leader to bring order to a roadmap, or a designer for a defined piece of work, we connect you with the right person from a network built over years and selected on the basis of delivered work. Sometimes it is a complete team, assembled and managed on your behalf. And sometimes it is an end to end product, taken from initial concept through to a launched, working system.",
  "What does not change is where we begin. We do not arrive with a solution and look for somewhere to apply it. We listen first, understand the business and the constraints around it, and then recommend the path we believe is right, whether that is extensive or minimal.",
  "Our clients range from startup founders and family businesses to large enterprises, governments, and universities. What they have in common is a real problem to solve: a product that needs to exist, an operation that needs to run better, or an organization that needs to be ready for what is coming.",
  "Most consultancies stop at the recommendation. We stay to execute. And we measure the work the way you do: in results. Products launched, operations improved, decisions made with confidence. No buzzwords, no fifty page decks that sit in a drawer. Just practical work that creates long term value.",
];

export const aboutFounder = {
  name: "Zara Khurram",
  image: "/images/ceo-image.png",
  paragraphs: [
    "Lean Create was founded by Zara Khurram, a product leader with experience delivering software across a broad range of industries.",
    "Her work covers healthcare, financial technology, human resources platforms, social media, data management, cybersecurity, and enterprise artificial intelligence. She has led products from initial concept through to launch, directed the delivery of large scale technology programs for enterprise clients, and worked closely with technical architects, engineers, designers, and product specialists throughout. Across those years, the most valuable asset she built was not any single product. It was the network of people who built them.",
  ],
};

export const aboutNetwork = [
  "Lean Create is built on relationships developed over a career of delivery work, not on a recruitment database.",
  "Every specialist we connect you with is someone known through delivered work: technical architects, senior engineers, product leaders, designers, automation specialists, data and cybersecurity professionals. They have been observed under real conditions, on real projects, against real deadlines. That is a materially different basis for selection than a strong CV and a good interview.",
  "The network also extends well beyond technology. Through her role as Vice President of the Central Punjab Chapter of the Pakistan United States Alumni Network, a professional community exceeding ten thousand members, Zara has built relationships across business, academia, government, and development organizations. Those connections keep Lean Create close to how organizations in different sectors actually operate, and they mean that when a challenge requires expertise outside our immediate domain, we usually know precisely who to bring in.",
  "For you, the practical consequence is straightforward. You gain access to expertise that is ordinarily reached only through personal introduction, matched specifically to your challenge, and available for exactly as long as you require it.",
];

export const aboutModel = [
  "We are structured deliberately. A traditional consultancy sells you the people it employs, which means the recommended solution often reflects who is available rather than what the work requires. We operate differently. We assess what your challenge genuinely demands, then connect you with the specialists to match, whether that is one person for one task or a full team for a full build.",
  "You receive senior expertise in the specific domain you need, at the level the work genuinely requires, without paying for a bench you are not using.",
];

export const aboutHowWeWork = [
  {
    title: "The Right Experts",
    body: "Our experts are selected through demonstrated experience on real projects, with real constraints, stakeholders, and outcomes. When we recommend someone for your business, it is because we understand the value they can bring to the work. We design each engagement around the complexity of the work, the expertise required, and your budget. That may mean a senior specialist for a critical decision, a mid-level resource for execution, or a carefully structured combination of both. We explain why each role is there.",
  },
  {
    title: "Flexible engagements that scale with you",
    body: "Use the expertise you need, for as long as you need it. Engage one specialist for a defined problem, assemble a multidisciplinary team for a complete build, or work with us continuously through a retained partnership. The relationship can expand, reduce, or evolve as your needs change.",
  },
  {
    title: "Transparency by design",
    body: "You should always know what is happening, who is involved, what it will cost, and where the risks are. The plan, team structure, costs, assumptions, responsibilities, and potential challenges are made clear from the beginning and throughout the engagement. Nothing about how we work should come as a surprise.",
  },
  {
    title: "Strategy and Execution",
    body: "We connect thinking with delivery. Whether you are building a product, transforming an operation, introducing AI, or solving a business problem, our recommendations are designed with a realistic path to implementation.",
  },
  {
    title: "Practical thinking over presentation",
    body: "We focus on decisions, actions, priorities, and measurable next steps. Every recommendation should help you understand what to do next, who should do it, and how it can realistically be executed.",
  },
  {
    title: "Understand first. Solve second.",
    body: "The quality of the solution depends on how well the problem is understood. We do not arrive with predetermined answers. We ask questions, challenge assumptions, examine the wider context, and understand what is actually causing the problem before recommending a solution.",
  },
  {
    title: "Confidential by design",
    body: "Your ideas, data, strategies, and plans remain yours. Confidentiality and discretion are built into how we work, not treated as premium add-ons. Where appropriate, engagements can be protected through NDAs and clearly defined information-access boundaries so you can work with external experts with confidence.",
  },
];

export const whatWeDoOffers = [
  {
    title: "Strategy & Innovation",
    icon: "/assets/practical-thinking.svg",
    body: "Business strategy, innovation roadmaps, and new venture design. We help you decide what to build and why, before you spend money building it.",
  },
  {
    title: "Software Development",
    icon: "/assets/software-development.svg",
    preview:
      "Full end to end software development. We design, build, test, launch, and maintain web applications, mobile apps, and enterprise systems. If you have an idea, we can take it from concept to a working product, and from a",
    body: "Full end to end software development. We design, build, test, launch, and maintain web applications, mobile apps, and enterprise systems. If you have an idea, we can take it from concept to a working product, and from a working product to a system that can grow with your business.",
  },
  {
    title: "Dedicated Teams",
    icon: "/assets/dedicated-teams.svg",
    preview:
      "Don't have a development team? We build one for you. We assemble the right mix of engineers, designers, and specialists for your project, then manage them so you don't have to: team management, project management,",
    body: "Don't have a development team? We build one for you. We assemble the right mix of engineers, designers, and specialists for your project, then manage them so you don't have to: team management, project management, delivery, and the day-to-day coordination that keeps the work moving.",
  },
  {
    title: "Digital Transformation & Process Optimization",
    icon: "/assets/digital-transformation-process-optimization.svg",
    preview:
      "We go into your business, understand how work actually flows, and then fix it. That means automating repetitive work, streamlining processes, and building the systems that",
    body: "We go into your business, understand how work actually flows, and then fix it. That means automating repetitive work, streamlining processes, and building the systems that connect people, data, and decisions so the organisation actually runs better.",
  },
  {
    title: "Project Management",
    icon: "/assets/project-management.svg",
    body: "Already have the people but are struggling with delivery? We bring the structure: planning, coordination, tracking, and accountability, so your projects finish on time and on budget.",
  },
  {
    title: "Product Management",
    icon: "/assets/product-management.svg",
    body: "Your engineers can build anything. The question is what. We provide product leadership across discovery, roadmapping, prioritization, and user research. Because building the thing right matters less than building the right thing.",
  },
  {
    title: "Artificial Intelligence",
    icon: "/assets/artificial-intelligence.svg",
    body: "Practical AI, not hype. We identify where AI genuinely creates value in your organization and build solutions that deliver it.",
  },
  {
    title: "Design",
    icon: "/assets/design.svg",
    body: "UI/UX design, graphic design, and brand identity. Design that makes products easier to use and companies easier to trust.",
  },
  {
    title: "Technical Advisory & Evaluation",
    icon: "/assets/technical-advisory-evaluation.svg",
    body: "Need a second opinion? We evaluate products, review backend architecture, and audit technology decisions, so you know exactly where you stand before you invest further.",
  },
  {
    title: "Expertise On Demand",
    icon: "/assets/expertise-on-demand.svg",
    body: "Sometimes you don't need a full team. You need one senior specialist for one specific job. A designer for a sprint, an architect for a review, a strategist for a quarter. We embed the right expert, for exactly as long as you need them.",
  },
];

