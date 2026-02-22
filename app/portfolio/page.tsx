'use client';

import { 
  Award, 
  ArrowRight, 
  Filter,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button, SectionHeader, Card, CaseStudyCard } from '../components/ui';
import { caseStudies, industries } from '../data';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...new Set(caseStudies.map(cs => cs.industry))];
  
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeFilter);

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
              <Award size={16} />
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories That <span className="text-primary">Inspire</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our case studies and see how we&apos;ve helped businesses 
              achieve transformative results through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Filter size={20} className="text-muted-foreground" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                id={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card padding="none" className="overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-primary font-medium mb-4">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-muted/50 rounded-lg p-3">
                            <p className="text-xl font-bold text-primary">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="Industries"
            badgeIcon={Award}
            title="Expertise Across Industries"
            description="We bring deep domain knowledge to every project we undertake."
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.slice(0, 8).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:border-primary/50">
                  <h4 className="font-semibold">{industry.name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button href="/industries" variant="outline" icon={ArrowRight}>
              Explore All Industries
            </Button>
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
              Let&apos;s Create Your Success Story
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Ready to join the ranks of our satisfied clients? Let&apos;s discuss your project.
            </p>
            <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
