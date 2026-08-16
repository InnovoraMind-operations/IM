import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
    Cpu,
    Code2,
    Database,
    Globe,
    ArrowRight,
    Zap,
    ShieldCheck,
    Binary,
    Microchip,
    Network,
    Eye,
    HeartPulse,
    Brain,
    Bot,
    Sparkles,
    ExternalLink,
    Github,
    Globe2,
    Workflow,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const techDomains = [
    {
        icon: Cpu,
        title: 'Artificial Intelligence',
        subtitle: 'Powering Next-Generation Intelligent Systems and Generative Technologies',
        description: 'Specialized solutions in Machine Learning, Deep Learning, and Neural Networks. We deliver enterprise-grade AI systems for automation, Generative AI, and intelligent decision-making.',
        color: 'from-blue-500 to-cyan-400',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Machine Learning',
            'Deep Learning',
            'Neural Networks',
            'Generative AI',
            'Computer Vision',
            'Natural Language Processing',
            'Predictive Analytics'
        ]
    },
    {
        icon: Database,
        title: 'Information Technology',
        subtitle: 'Building Resilient Cloud Infrastructures and Big Data Pipelines',
        description: 'Focusing on Cloud Computing, Big Data Analytics, and enterprise-scale IT infrastructure. Our solutions power the backbone of modern digital organizations.',
        color: 'from-purple-500 to-pink-400',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Cloud Computing',
            'Big Data Analytics',
            'IT Infrastructure',
            'Database Management',
            'Enterprise Architecture',
            'System Integration',
            'Network Administration'
        ]
    },
    {
        icon: Code2,
        title: 'Software Engineering',
        subtitle: 'Engineering High-Performance, Scalable, and Modern Software Systems',
        description: 'DevOps, Agile methodologies, and full-stack development trends. Explore the latest in programming languages, architecture, and software quality assurance.',
        color: 'from-amber-500 to-orange-400',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Full-Stack Development',
            'DevOps & CI/CD',
            'Agile Methodologies',
            'Software Architecture',
            'API Development',
            'Quality Assurance & Testing',
            'Microservices'
        ]
    },
    {
        icon: Eye,
        title: 'Explainable Artificial Intelligence (XAI)',
        subtitle: 'Advancing Transparent, Interpretable, and Trustworthy Artificial Intelligence',
        description: 'Developing advanced Explainable Artificial Intelligence (XAI) capabilities to improve the transparency, interpretability, and reliability of machine learning systems. Our expertise enables organizations to understand AI-generated outcomes, strengthen model transparency, improve decision intelligence, and support responsible AI deployment across enterprise environments. By integrating explainability methodologies into intelligent solutions, we help build AI systems that are understandable, accountable, and aligned with governance and operational objectives.',
        color: 'from-emerald-500 to-teal-400',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Explainable AI',
            'Model Interpretability',
            'Feature Attribution',
            'Decision Intelligence',
            'Responsible AI',
            'AI Governance',
            'AI Model Validation'
        ]
    },
    {
        icon: HeartPulse,
        title: 'Healthcare Cybersecurity',
        subtitle: 'Intelligent Cybersecurity for Secure Digital Healthcare Ecosystems',
        description: 'Delivering advanced Healthcare Cybersecurity capabilities that strengthen the security, resilience, and operational integrity of digital healthcare environments. Our expertise includes intelligent threat detection, behavioural analytics, secure access management, data protection strategies, cybersecurity risk mitigation, and resilient security architectures that support modern healthcare infrastructures and secure digital transformation initiatives.',
        color: 'from-red-500 to-rose-400',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Healthcare Cybersecurity',
            'AI-Driven Threat Detection',
            'Behavioural Analytics',
            'Medical Device Security',
            'Identity & Access Management',
            'Data Protection & Encryption',
            'Cyber Risk Management',
            'Cyber Resilience'
        ]
    },
    {
        icon: Brain,
        title: 'AI Model Explainability & Decision Intelligence',
        subtitle: 'Enabling Reliable, Transparent, and Accountable AI Decision-Making',
        description: 'Developing advanced AI model explainability and decision intelligence capabilities to improve transparency, validation, and confidence in complex machine learning systems. Our expertise focuses on analysing model behaviour, understanding feature influence, strengthening prediction interpretability, and supporting informed, data-driven decision-making across enterprise applications while promoting trustworthy and responsible AI adoption.',
        color: 'from-indigo-500 to-violet-400',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'AI Model Explainability',
            'Decision Intelligence',
            'Feature Contribution Analysis',
            'Predictive Model Validation',
            'Model Behaviour Analysis',
            'Transparent AI Systems',
            'Trustworthy AI',
            'Responsible AI Implementation'
        ]
    },
    {
        icon: ShieldCheck,
        title: 'Cybersecurity',
        subtitle: 'Intelligent Cybersecurity for Secure Digital Infrastructures',
        description: 'Delivering advanced cybersecurity capabilities that strengthen the security, resilience, and operational integrity of modern digital environments. Our expertise includes intelligent threat detection, zero-trust architecture, behavioral analytics, secure access management, data protection strategies, and risk mitigation.',
        color: 'from-orange-600 to-red-500',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Threat Detection',
            'Zero-Trust Architecture',
            'Data Privacy',
            'Behavioral Analytics',
            'Vulnerability Assessment',
            'Resilient Architecture'
        ]
    },
    {
        icon: Network,
        title: 'Internet of Things (IoT)',
        subtitle: 'Smart Cities, Industrial IoT, and Edge Computing Innovations',
        description: 'Designing and deploying connected ecosystems that bridge physical operations with digital insights. We focus on industrial IoT platforms, smart city architectures, edge computing systems, and low-latency data pipelines to power real-time decision intelligence.',
        color: 'from-teal-500 to-cyan-400',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Smart Cities',
            'Industrial IoT',
            'Edge Computing',
            'Sensor Networks',
            'Data Pipelines',
            'Embedded Security'
        ]
    },
    {
        icon: Binary,
        title: 'Blockchain & Web3',
        subtitle: 'Decentralized Systems, Smart Contracts, and Trustless Networks',
        description: 'Engineering decentralized architectures that redefine trust and digital ownership. We develop secure smart contracts, tokenomics models, and scalable consensus networks to support next-generation Web3 protocols and secure digital assets.',
        color: 'from-purple-500 to-indigo-400',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Decentralized Systems',
            'Smart Contracts',
            'Tokenomics',
            'Consensus Protocols',
            'Cryptography',
            'Web3 Integration'
        ]
    },
    {
        icon: Microchip,
        title: 'Quantum Computing',
        subtitle: 'Exploring the Boundaries of Computational Science and Quantum Mechanics',
        description: 'Pioneering the application of quantum algorithms to solve complex computational challenges. We study quantum annealing, gate-model systems, and quantum resistant cryptography to prepare organizations for the next era of computing.',
        color: 'from-pink-500 to-fuchsia-400',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
        capabilities: [
            'Quantum Algorithms',
            'Cryptographic Resistance',
            'Quantum Simulation',
            'Qubit Management',
            'Quantum Machine Learning'
        ]
    }
];

const TechInnovation = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-gradient py-24 lg:py-32">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-md">
                            Cutting-Edge Technology & Innovation
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
                            Pioneering the <span className="text-secondary">Digital Frontier</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            InnovoraMind is at the forefront of the technological revolution. We build enterprise-grade solutions that bridge the gap between cutting-edge research and real-world industrial application in AI, IT, and Software.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-8 h-14 text-lg">
                                <Link to="/solutions">
                                    Explore Our Solutions
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="border border-white/40 bg-white/10 text-white hover:bg-white/20 rounded-full px-8 h-14 backdrop-blur-sm transition-all text-lg font-bold">
                                <Link to="/contact">Get a Consultation</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
            </section>

            {/* Flagship Innovation Spotlight: OpenChat */}
            <section className="py-20 bg-muted/30 border-y border-border/50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-card/70 backdrop-blur-xl rounded-[36px] border border-border p-8 md:p-14 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="grid lg:grid-cols-12 gap-10 items-center">
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        Featured Innovation Spotlight
                                    </div>
                                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                        OpenChat: <span className="text-gradient">Autonomous AI Agent Platform</span>
                                    </h2>
                                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                        An open-source, multi-tenant AI conversational platform powered by <strong>PostgreSQL pgvector</strong> and multi-provider LLM orchestration. Ingest business knowledge, perform agentic tool execution with human governance, and embed anywhere with a single script tag.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                        {[
                                            "RAG Retrieval & pgvector Vector Engine",
                                            "Agentic HTTP API Tool Execution",
                                            "Multi-Provider AI (OpenAI, Claude, Gemini, Groq, Ollama)",
                                            "Drop-in Embeddable Web Widget & Iframe"
                                        ].map((feat, idx) => (
                                            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-foreground/90">
                                                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 pt-4">
                                        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-7">
                                            <Link to="/projects/openchat">
                                                View Project Details
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                        <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-border font-bold">
                                            <a href="https://open-chat1.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                                <Globe2 className="w-4 h-4 text-primary" />
                                                Live Demo
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </Button>
                                        <Button asChild size="lg" variant="ghost" className="rounded-full px-6 font-bold">
                                            <a href="https://github.com/InnovoraMind-operations/OpenChat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                                    {[
                                        { title: "RAG Engine", desc: "Cosine similarity vector retrieval over custom PDFs, docs, & web data", icon: Database },
                                        { title: "Tool Calling", desc: "Autonomous API calls & ticketing with human-in-the-loop review", icon: Workflow },
                                        { title: "Multi-Model", desc: "Automatic failover across OpenAI, Anthropic, Gemini, & Ollama", icon: Brain },
                                        { title: "Enterprise Ready", desc: "AES-256-GCM encryption, SCIM provisioning, & isolated workspaces", icon: ShieldCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-background/80 p-5 rounded-2xl border border-border flex flex-col justify-between hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Domains */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Our Core Technology Domains
                        </h2>
                        <p className="text-muted-foreground text-lg italic">
                            Empowering businesses through advanced technology solutions in the most impactful fields of the 21st century.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {techDomains.map((domain, index) => (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="h-52 overflow-hidden relative flex-shrink-0">
                                    <img
                                        src={domain.image}
                                        alt={domain.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${domain.color} opacity-20`} />
                                    <div className="absolute top-6 right-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                                            <domain.icon className="w-6 h-6 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex-grow flex flex-col">
                                        <span className="inline-block text-xs font-semibold text-secondary mb-2">
                                            {domain.subtitle}
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                                            {domain.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                            {domain.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-border/50">
                                        <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
                                            Core Capabilities
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {domain.capabilities.map((cap) => (
                                                <span
                                                    key={cap}
                                                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-muted text-foreground border border-border/70 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-all duration-300"
                                                >
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center border border-white/20 shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
                                Be Part of the <span className="text-gradient">Tech Evolution</span>
                            </h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic">
                                "We don't just build software; we engineer the solutions that define the future of information technology."
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 h-16 shadow-xl shadow-primary/20 transform hover:scale-105 transition-all">
                                    <Link to="/solutions">Explore All Solutions</Link>
                                </Button>
                                <Button asChild variant="ghost" size="lg" className="text-foreground font-bold hover:bg-muted rounded-full px-10 h-16 underline decoration-primary underline-offset-8">
                                    <Link to="/registrations">Start a Project</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TechInnovation;
