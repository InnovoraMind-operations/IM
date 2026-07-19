import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ShieldCheck, Activity, Brain, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="text-gradient">Projects and Innovation</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 font-medium">
              Discover our latest technological innovations and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-SOC Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/projects/ai-soc" className="block group">
                <div className="bg-card/50 rounded-[2rem] border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="/images/project/foyer.png" 
                      alt="AI-SOC Project" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground font-bold text-xs tracking-wider uppercase backdrop-blur-sm">
                        Featured
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      AI-SOC
                    </h3>
                    <p className="text-muted-foreground font-medium mb-6 flex-grow">
                      Autonomous Security Operations Center: Next-Generation Threat Detection & Response Architecture.
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                      View Project <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* AI Governance Framework Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/projects/ai-governance" className="block group h-full">
                <div className="bg-card/50 rounded-[2rem] border border-border overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-primary/5 flex items-center justify-center p-6">
                    {/* Placeholder for an image or graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-50" />
                    <div className="relative z-10 text-primary">
                      <ShieldCheck className="w-20 h-20 opacity-80" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-bold text-xs tracking-wider uppercase backdrop-blur-sm">
                        Innovation Spotlight
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      AI Governance Framework
                    </h3>
                    <p className="text-muted-foreground font-medium mb-6 flex-grow">
                      An AI-supported architecture for audit-ready, explainable financial decision-making in regulated environments.
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all mt-auto">
                      View Spotlight <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
