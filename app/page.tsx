'use client';

import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  BarChart3,
  CheckCircle2,
  Play,
  Compass,
  Zap,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Button, 
  SectionHeader, 
  ServiceCard, 
  StatsCard, 
  TestimonialCard,
  Card
} from './components/ui';
import { services, stats, testimonials, companyInfo, process, caseStudies } from './data';

const iconMap: { [key: string]: React.ElementType } = {
  Code, Cloud, Brain, Shield, BarChart3, Sparkles, Zap,
};

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob blob-primary w-[600px] h-[600px] -top-40 -right-40 animate-float" />
          <div className="blob blob-accent w-[400px] h-[400px] bottom-20 -left-20 animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge mb-6">
                <Compass size={16} />
                Navigating the Future
              </span>
              <h1 className="hero-title">
                Transform Your Business with <span>Intelligent Technology</span>
              </h1>
              <p className="hero-desc">
                We are digital pioneers, helping businesses navigate the ever-evolving landscape of technology. 
                From AI-powered solutions to cloud infrastructure, we build the future, today.
              </p>
              <div className="hero-buttons">
                <Button href="/contact" size="lg" icon={ArrowRight}>
                  Start Your Journey
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-5 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-500 dark:text-green-400" />
                  <span className="text-sm text-muted-foreground">500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-500 dark:text-green-400" />
                  <span className="text-sm text-muted-foreground">99% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-500 dark:text-green-400" />
                  <span className="text-sm text-muted-foreground">24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Animated Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-primary/20 animate-pulse-glow" />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-primary/30" />
                </div>
                <div className="absolute inset-16 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-xl flex items-center justify-center">
                    <Compass size={80} className="text-white" />
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-10 right-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-slate-900/50 animate-float border border-gray-100 dark:border-slate-700">
                  <Brain size={28} className="text-sky-500 dark:text-sky-400" />
                </div>
                <div className="absolute bottom-20 left-0 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-slate-900/50 animate-float border border-gray-100 dark:border-slate-700" style={{ animationDelay: '-2s' }}>
                  <Cloud size={28} className="text-sky-500 dark:text-sky-400" />
                </div>
                <div className="absolute top-1/2 right-0 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-slate-900/50 animate-float border border-gray-100 dark:border-slate-700" style={{ animationDelay: '-4s' }}>
                  <Code size={28} className="text-sky-500 dark:text-sky-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Our Services"
            badgeIcon={Sparkles}
            title="Solutions That Drive Growth"
            description="We offer a comprehensive suite of technology services designed to help your business thrive in the digital age."
          />
          
          <div className="grid-3">
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.shortDesc}
                    icon={Icon}
                    features={service.features}
                  />
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/services" variant="outline" icon={ArrowRight}>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge mb-5">
                <Award size={16} />
                Why Nomads
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We combine deep technical expertise with a genuine commitment to your success. 
                Our team doesn&apos;t just build solutions — we become an extension of your team.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: Users, title: 'Expert Team', desc: '50+ engineers, designers, and consultants with deep domain expertise' },
                  { icon: TrendingUp, title: 'Proven Results', desc: '500+ successful projects with measurable business impact' },
                  { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with robust security practices' },
                  { icon: Zap, title: 'Agile Delivery', desc: 'Fast iterations with transparent communication throughout' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="icon-box flex-shrink-0">
                      <item.icon size={22} className="text-sky-500 dark:text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1.5">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-5">
                <Card className="bg-gradient-to-br from-sky-500 to-blue-600 text-white border-none">
                  <div className="text-3xl md:text-4xl font-bold mb-1.5">99%</div>
                  <p className="text-white/90 text-sm">Client Satisfaction Rate</p>
                </Card>
                <Card className="mt-8">
                  <div className="stat-number text-2xl md:text-3xl mb-1.5">50+</div>
                  <p className="text-muted-foreground text-sm">Expert Team Members</p>
                </Card>
                <Card>
                  <div className="stat-number text-2xl md:text-3xl mb-1.5">200+</div>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </Card>
                <Card className="mt-8 bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-none">
                  <div className="text-3xl md:text-4xl font-bold mb-1.5">24/7</div>
                  <p className="text-white/90 text-sm">Support Available</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="How We Work"
            badgeIcon={Zap}
            title="Our Proven Process"
            description="A structured approach that ensures successful project delivery, every time."
          />
          
          <div className="grid md:grid-cols-5 gap-5 lg:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full relative" padding="sm">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 transform -translate-y-1/2 z-10">
                    <ArrowRight size={18} className="text-sky-500 dark:text-sky-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="Our Work"
            badgeIcon={Award}
            title="Success Stories"
            description="Real results for real businesses. See how we've helped our clients achieve their goals."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => cs.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card padding="none" className="overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800" />
                  <div className="p-6">
                    <span className="badge mb-3">{study.industry}</span>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{study.client}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{study.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i}>
                          <p className="text-lg font-bold text-primary">{result.value}</p>
                          <p className="text-xs text-muted-foreground">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="outline" icon={ArrowRight}>
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Testimonials"
            badgeIcon={Users}
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from the businesses we've helped transform."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob w-[500px] h-[500px] bg-white/10 top-0 -right-20" />
          <div className="blob w-[300px] h-[300px] bg-white/10 -bottom-10 left-10" />
        </div>
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Navigate Your Digital Future?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with intelligent technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
                Get Started Today
              </Button>
              <Button href="/about" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
