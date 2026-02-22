'use client';

import { 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Award, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Compass,
  Globe,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button, SectionHeader, Card, TeamCard, StatsCard } from '../components/ui';
import { team, stats, companyInfo } from '../data';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the results we deliver for our clients.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, fostering open communication and shared ownership.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards, never compromising on quality or attention to detail.',
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Nomads was born with a mission to help businesses navigate digital transformation.' },
    { year: '2021', title: 'First 50 Clients', description: 'Reached our first major milestone, serving clients across 5 industries.' },
    { year: '2022', title: 'AI Division Launch', description: 'Expanded our capabilities with a dedicated AI and machine learning team.' },
    { year: '2023', title: 'Global Expansion', description: 'Opened offices in London and Singapore, serving clients worldwide.' },
    { year: '2024', title: '500+ Projects', description: 'Delivered over 500 successful projects with 99% client satisfaction.' },
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
              <Compass size={16} />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Pioneers on a <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are Nomads — a team of technologists, dreamers, and problem-solvers dedicated to 
              helping businesses navigate the digital frontier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge mb-4">
                <Rocket size={16} />
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Startup to Industry Leader
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nomads was founded in 2020 by a group of tech veterans who saw a gap in the market: 
                  businesses struggling to keep pace with rapid technological change, often left behind 
                  by solutions that were either too complex or too basic.
                </p>
                <p>
                  We set out to be different. Our approach combines deep technical expertise with a 
                  genuine understanding of business challenges. We don&apos;t just build technology — we 
                  build partnerships, working alongside our clients to navigate the ever-changing 
                  digital landscape.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 200 clients across industries, from ambitious 
                  startups to Fortune 500 enterprises. But our mission remains the same: to be the 
                  trusted guide that helps businesses harness technology for transformative growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <Compass size={120} className="text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Est. 2020</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <Card className="absolute -bottom-8 -left-8 p-6 bg-gradient-to-br from-sky-500 to-blue-600 text-white border-none">
                <div className="text-3xl font-bold">200+</div>
                <p className="text-white/90">Happy Clients</p>
              </Card>
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

      {/* Values Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="Our Values"
            badgeIcon={Heart}
            title="What Drives Us"
            description="Our values aren't just words on a wall — they're the principles that guide every decision we make."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="icon-box icon-box-gradient mx-auto mb-4">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Our Journey"
            badgeIcon={TrendingUp}
            title="Milestones Along the Way"
            description="A look back at the key moments that shaped who we are today."
          />

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pt-3 pb-8">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt" id="team">
        <div className="container">
          <SectionHeader
            badge="Our Team"
            badgeIcon={Users}
            title="Meet the Navigators"
            description="A diverse team of experts united by a shared passion for technology and client success."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge mb-4">
                <Globe size={16} />
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Expertise, Global Reach
              </h2>
              <p className="text-muted-foreground mb-8">
                With offices in San Francisco, London, and Singapore, we serve clients around the world 
                while maintaining the personal touch that sets us apart.
              </p>
              <div className="space-y-4">
                {[
                  { city: 'San Francisco', role: 'Headquarters', flag: '🇺🇸' },
                  { city: 'London', role: 'European Operations', flag: '🇬🇧' },
                  { city: 'Singapore', role: 'Asia-Pacific Hub', flag: '🇸🇬' },
                ].map((office, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h4 className="font-semibold">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">{office.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 flex items-center justify-center">
                <Globe size={120} className="text-primary" />
              </div>
            </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Let&apos;s discuss how we can help your business reach new heights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
                Get in Touch
              </Button>
              <Button href="/portfolio" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                See Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
