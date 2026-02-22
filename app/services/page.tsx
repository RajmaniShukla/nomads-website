'use client';

import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  BarChart3, 
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, SectionHeader, Card } from '../components/ui';
import { services, process } from '../data';

const iconMap: { [key: string]: React.ElementType } = {
  Code, Cloud, Brain, Shield, BarChart3, GitBranch, Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob blob-primary w-[500px] h-[500px] -top-20 -right-20" />
          <div className="blob blob-accent w-[300px] h-[300px] bottom-0 left-10" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">
              <Layers size={16} />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Solutions for <span className="text-primary">Modern Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From custom software to AI-powered automation, we deliver end-to-end solutions 
              that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="icon-box icon-box-lg icon-box-gradient mb-6">
                      <Icon size={36} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button href="/contact" icon={ArrowRight}>
                      Get Started
                    </Button>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <Card className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 flex items-center justify-center">
                      <Icon size={80} className="text-primary" />
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="Our Process"
            badgeIcon={GitBranch}
            title="How We Deliver Excellence"
            description="A proven methodology that ensures successful outcomes for every project."
          />

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <Card className="flex-1 mb-4">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Technologies"
            badgeIcon={Code}
            title="Our Tech Stack"
            description="We work with the latest technologies to build scalable, future-proof solutions."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'AWS',
              'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
              'GraphQL', 'TypeScript', 'Go', 'Rust', 'Redis', 'Kafka',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="text-center py-6 px-4 hover:border-primary/50">
                  <p className="font-semibold">{tech}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
                Start a Project
              </Button>
              <Button href="/portfolio" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
