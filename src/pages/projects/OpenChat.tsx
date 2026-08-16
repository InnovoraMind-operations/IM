import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { 
  Bot, 
  Brain, 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  Code2, 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Globe2, 
  FileText, 
  Terminal, 
  Lock,
  MessagesSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OpenChat = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container-custom relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary" />
              Flagship Innovation Project
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              OpenChat <span className="text-gradient">(OpenBusinessChat)</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 font-medium leading-relaxed mb-8">
              Open-Source Autonomous AI Agent & RAG Knowledge Platform — Train on Enterprise Business Data and Embed Anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full px-6 h-12 shadow-lg">
                <a href="https://open-chat1.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Globe2 className="w-5 h-5" />
                  Live Platform Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full px-6 h-12 backdrop-blur-sm">
                <a href="https://github.com/InnovoraMind-operations/OpenChat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Architecture Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom max-w-5xl">
          
          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {[
              { label: "AI Providers", val: "OpenAI, Claude, Gemini, Groq, Ollama", icon: Brain },
              { label: "Retrieval Vector Engine", val: "PostgreSQL + pgvector", icon: Database },
              { label: "Tool Calling", val: "Autonomous Function APIs", icon: Workflow },
              { label: "Security & Encryption", val: "AES-256-GCM + SCIM / V1 API", icon: Lock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card/60 rounded-2xl p-5 border border-border flex flex-col justify-between shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{stat.label}</div>
                  <div className="font-display font-bold text-foreground text-sm sm:text-base leading-snug">{stat.val}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-16">
            
            {/* The Vision & Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-display">
                    Next-Gen Conversational Intelligence for Modern Enterprises
                  </h3>
                  <p className="mb-4">
                    <strong className="text-foreground">OpenChat (OpenBusinessChat)</strong> is an enterprise-grade AI chatbot platform designed to ingest custom enterprise knowledge, reason over multi-modal datasets, and execute automated actions with built-in human governance.
                  </p>
                  <p className="mb-4">
                    Unlike standard generative models prone to hallucinations, OpenChat enforces strict retrieval thresholds, refusal boundaries, and verifiable source citations over pgvector cosine similarity retrieval.
                  </p>
                  <p>
                    Built with a production-first architecture using Next.js 16 App Router, TypeScript 5, Prisma ORM, and Docker, OpenChat empowers businesses to self-host or deploy dedicated multi-tenant AI agents in minutes.
                  </p>
                </div>

                <div className="bg-card/50 p-6 sm:p-8 rounded-3xl border border-border space-y-4">
                  <h4 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-secondary" />
                    Core Platform Capabilities
                  </h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Multi-source ingestion (PDFs with OCR, DOCX, CSV, TXT, Web Crawler, YouTube)",
                      "Agentic Tool Execution: API calling, ticketing, and live CRM actions",
                      "Multi-provider AI routing with automatic failover fallback chains",
                      "Human-in-the-loop approval workflows for high-risk actions",
                      "One-line script widget embed (`widget.js`) and iframe deployment",
                      "Lead capture form and real-time dashboard inbox with SLA triage",
                      "Encrypted tenant isolation with AES-256-GCM key storage"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Core Architecture Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center font-display">
                Platform Architecture & Engineering Pillars
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    title: "RAG & Vector Retrieval",
                    desc: "Sliding-window chunking, batched embeddings, and PostgreSQL pgvector cosine similarity search with Strict, Balanced, and Flexible answer modes."
                  },
                  {
                    icon: Workflow,
                    title: "Agentic Tool Execution",
                    desc: "Function calling triggers external HTTP APIs, executes database lookups, and creates tickets with full audit trails and human review approval gates."
                  },
                  {
                    icon: Brain,
                    title: "Multi-Provider AI Engine",
                    desc: "Unified abstraction over OpenAI, Anthropic Claude, Google Gemini, Groq, and local Ollama models with automated primary/fallback failover."
                  },
                  {
                    icon: Bot,
                    title: "Drop-in Web Embeds",
                    desc: "Lightweight floating `<script>` widget or iframe embeds with origin whitelisting, customizable brand themes, and animated suggestion bubbles."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Enterprise Governance",
                    desc: "Tenant isolation, encrypted provider secrets, role-based access control (RBAC), SCIM provisioning, and persistent ingestion job pipelines."
                  },
                  {
                    icon: MessagesSquare,
                    title: "Lead Capture & Analytics",
                    desc: "Integrated lead generation forms, conversation history logs, question gap detection, answer quality ratings, and latency metrics."
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-card/50 p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg mb-2">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ingestion & Tool Action Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/40 rounded-3xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display flex items-center gap-3">
                <Terminal className="w-6 h-6 text-primary" />
                End-to-End Enterprise Lifecycle
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-background/80 p-5 rounded-2xl border border-border/70">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Step 01</span>
                  <h5 className="font-bold text-foreground text-base mb-2">Knowledge Ingestion</h5>
                  <p className="text-muted-foreground">Upload documents (PDF, DOCX, CSV) or crawl live URLs. Scanned documents undergo local OCR and chunking into pgvector.</p>
                </div>
                <div className="bg-background/80 p-5 rounded-2xl border border-border/70">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Step 02</span>
                  <h5 className="font-bold text-foreground text-base mb-2">Evaluation & Guardrails</h5>
                  <p className="text-muted-foreground">Test bots with curated evaluation suites and strict refusal parameters before publishing an immutable version.</p>
                </div>
                <div className="bg-background/80 p-5 rounded-2xl border border-border/70">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">Step 03</span>
                  <h5 className="font-bold text-foreground text-base mb-2">Embed & Automate</h5>
                  <p className="text-muted-foreground">Embed the bot onto any site. The agent autonomously answers questions, captures customer leads, and triggers API tools.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12 rounded-3xl border border-border text-center"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Explore OpenChat on GitHub & Live Demo
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
                OpenChat is completely open-source under the MIT license. Deploy it to your private cloud or test the live deployment today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 h-12 shadow-lg">
                  <a href="https://open-chat1.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Globe2 className="w-4 h-4" />
                    Open Live App
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:bg-card rounded-full px-8 h-12 font-bold">
                  <a href="https://github.com/InnovoraMind-operations/OpenChat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OpenChat;
