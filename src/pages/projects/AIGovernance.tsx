import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Shield, FileCheck, Scale } from 'lucide-react';

const AIGovernance = () => {
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-bold text-sm tracking-widest uppercase mb-4 backdrop-blur-sm border border-primary/30">
              Innovation Spotlight
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              AI-Driven Governance Framework Earns Formal Recognition
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 font-medium leading-relaxed">
              Innovating the Future of Pension Technology: A Team-Led AI Governance Framework Now Protected Under German Intellectual Property Law
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6"
            >
              <p className="text-xl leading-relaxed font-medium text-foreground">
                InnovoraMind is proud to recognize the technical contributions behind a newly registered German utility model (Gebrauchsmuster) covering an AI-supported architecture for audit-ready, explainable financial decision-making in regulated environments. The registration reflects the collaborative work of a five-person inventor team: Satish Kabade, Bhushan B. Chaudhari, Anup Kagalkar, Sudhanshu Maurya, and Akshay Sharma.
              </p>
              
              <p>
                Among this team, Satish Kabade, Product Technical Expert with 18 years of experience modernizing mission-critical financial and pension systems, took the initiative in proposing the framework's governance-first architecture and helped lead the effort to bring the concept to registration. His focus on treating explainability, traceability, and auditability as core design requirements, rather than afterthoughts, shaped the framework's central technical approach.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-10">
                {[
                  { title: "Probabilistic Simulation", icon: Scale },
                  { title: "Constrained Optimization", icon: Shield },
                  { title: "Built-in Explainability", icon: FileCheck },
                  { title: "Audit-ready Traceability", icon: Award }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-muted/30 p-6 rounded-2xl border border-border flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-foreground self-center">{feature.title}</div>
                  </div>
                ))}
              </div>

              <p>
                The registration, filed with the German Patent and Trade Mark Office (DPMA) in November 2025, protects a system that integrates probabilistic simulation, constrained optimization, and built-in explainability into a single, auditable framework, technology designed specifically for environments where every automated decision must be traceable and defensible to regulators.
              </p>

              <p>
                InnovoraMind independently evaluated the underlying research and technical framework and has adopted elements of this approach into its own platform, drawn to the team's emphasis on explainability, auditability, and real-world deployability. This work reflects a growing and important shift in applied AI: moving beyond raw predictive accuracy toward systems that are accountable, transparent, and trustworthy enough for use in the financial sector's most highly regulated corners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/5 border-l-4 border-secondary p-8 rounded-r-2xl my-12 shadow-sm"
            >
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground italic mb-6 leading-relaxed">
                "What drew us to this framework was how deliberately it was built for the real world. It's rare to find a design that treats explainability and auditability as core requirements rather than afterthoughts, and that discipline is exactly what regulated financial environments demand. Adopting this approach was a natural fit for where we're taking our platform."
              </blockquote>
              <footer className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-lg">
                  AM
                </div>
                <div>
                  <div className="font-bold text-foreground">Aida Mehrad</div>
                  <div className="text-sm">Director of Innovation & Emerging Technologies, Innovoramind</div>
                </div>
              </footer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
            >
              <p>
                Beyond this project, Kabade's professional focus centers on the modernization of enterprise pension and financial systems, most notably his ongoing work supporting one of the largest public pension systems in the United States. InnovoraMind congratulates the full inventor team on this recognition and looks forward to continued collaboration at the intersection of artificial intelligence, financial governance, and enterprise modernization.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIGovernance;
