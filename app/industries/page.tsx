'use client';

import { 
  Heart, 
  Landmark, 
  ShoppingBag, 
  Factory, 
  Truck, 
  GraduationCap, 
  Leaf,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, SectionHeader, Card } from '../components/ui';
import { industries, caseStudies } from '../data';

const iconMap: { [key: string]: React.ElementType } = {
  Heart, Landmark, ShoppingBag, Factory, Truck, GraduationCap, Leaf,
};

export default function IndustriesPage() {
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
              <Building2 size={16} />
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deep Expertise Across <span className="text-primary">Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring specialized knowledge and proven solutions to help businesses 
              in every sector embrace digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Building2;
              const isEven = index % 2 === 0;
              const relatedCase = caseStudies.find(cs => cs.industry === industry.name);
              
              return (
                <motion.div
                  key={industry.id}
                  id={industry.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="icon-box icon-box-lg icon-box-gradient mb-6">
                      <Icon size={36} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4">Our Solutions</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {industry.solutions.map((solution, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button href="/contact" icon={ArrowRight}>
                      Discuss Your Needs
                    </Button>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : ''}>
                    {relatedCase ? (
                      <Card padding="none" className="overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800" />
                        <div className="p-6">
                          <span className="badge mb-3">Case Study</span>
                          <h3 className="text-xl font-bold mb-2">{relatedCase.title}</h3>
                          <p className="text-primary font-medium text-sm mb-3">{relatedCase.client}</p>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedCase.description}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {relatedCase.results.slice(0, 2).map((result, i) => (
                              <div key={i}>
                                <p className="text-lg font-bold text-primary">{result.value}</p>
                                <p className="text-xs text-muted-foreground">{result.metric}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 flex items-center justify-center">
                        <Icon size={80} className="text-primary" />
                      </Card>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Industries Served' },
              { number: '200+', label: 'Clients Worldwide' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '99%', label: 'Client Satisfaction' },
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
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Our expertise extends beyond these sectors. Let&apos;s discuss your unique challenges.
            </p>
            <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
