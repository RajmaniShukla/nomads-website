'use client';

import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  Eye, 
  FileText, 
  Sparkles, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, SectionHeader, Card } from '../components/ui';
import { aiSolutions } from '../data';

const iconMap: { [key: string]: React.ElementType } = {
  MessageSquare, TrendingUp, Eye, FileText, Sparkles, Zap, Brain,
};

export default function AISolutionsPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 40%.',
    },
    {
      icon: Lightbulb,
      title: 'Better Decisions',
      description: 'Leverage data-driven insights to make smarter, faster business decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'AI solutions that grow with your business without proportional cost increases.',
    },
    {
      icon: Cpu,
      title: 'Competitive Edge',
      description: 'Stay ahead of the competition with cutting-edge AI capabilities.',
    },
  ];

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
              <Brain size={16} />
              AI Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Technology for <span className="text-primary">Smarter Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Harness the power of artificial intelligence to automate processes, 
              unlock insights, and transform customer experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Why AI?"
            badgeIcon={Sparkles}
            title="The AI Advantage"
            description="Discover how artificial intelligence can revolutionize your business operations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="icon-box icon-box-gradient mx-auto mb-4">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="Solutions"
            badgeIcon={Cpu}
            title="Our AI Capabilities"
            description="Purpose-built AI solutions designed to solve real business challenges."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => {
              const Icon = iconMap[solution.icon] || Brain;
              
              return (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full" highlight>
                    <div className="icon-box icon-box-gradient mb-5">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-primary">Key Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Implementation"
            badgeIcon={Zap}
            title="From Concept to Production"
            description="Our structured approach ensures successful AI implementation every time."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Discovery', desc: 'Understand your data, processes, and business objectives.' },
              { step: 2, title: 'Design', desc: 'Create AI architecture and select optimal algorithms.' },
              { step: 3, title: 'Develop', desc: 'Build, train, and validate models with your data.' },
              { step: 4, title: 'Deploy', desc: 'Integrate AI into your systems with monitoring.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'AI Projects Delivered' },
              { number: '95%', label: 'Model Accuracy' },
              { number: '40%', label: 'Average Efficiency Gain' },
              { number: '10x', label: 'Faster Processing' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
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
              Ready to Unlock the Power of AI?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Let&apos;s explore how artificial intelligence can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
                Schedule a Consultation
              </Button>
              <Button href="/portfolio" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View AI Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
