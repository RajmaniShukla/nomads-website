'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button, SectionHeader, Card } from '../components/ui';
import { Input, Textarea, Select } from '../components/ui/Input';
import { companyInfo, services } from '../data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    ...services.map(s => ({ value: s.id, label: s.title })),
  ];

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: 'under-25k', label: 'Under $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: 'over-250k', label: 'Over $250,000' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: companyInfo.address,
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
      link: '#',
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
              <MessageSquare size={16} />
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. 
              Get in touch and let&apos;s create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours. 
                  Or reach out directly using the contact information below.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="icon-box flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Quick Facts */}
                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <h3 className="font-semibold mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Free initial consultation',
                      'Dedicated project manager',
                      'Transparent pricing',
                      '24/7 support available',
                      'Proven track record',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-green-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} className="text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Full Name *"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          label="Email Address *"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Select
                          label="Service Interested In"
                          name="service"
                          options={serviceOptions}
                          value={formData.service}
                          onChange={handleChange}
                        />
                        <Select
                          label="Estimated Budget"
                          name="budget"
                          options={budgetOptions}
                          value={formData.budget}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <Textarea
                        label="Project Details *"
                        name="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      
                      <Button type="submit" size="lg" className="w-full" icon={Send} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                      
                      <p className="text-center text-sm text-muted-foreground">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            badge="FAQ"
            badgeIcon={MessageSquare}
            title="Frequently Asked Questions"
            description="Quick answers to common questions about working with us."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Project timelines vary based on scope. Simple projects can take 2-3 months, while enterprise solutions may take 6-12 months. We provide detailed timelines during discovery.',
                },
                {
                  q: 'What is your pricing model?',
                  a: 'We offer flexible pricing including fixed-price, time & materials, and dedicated team models. We recommend the best approach based on your project needs.',
                },
                {
                  q: 'Do you provide ongoing support?',
                  a: 'Absolutely! We offer various support and maintenance packages to ensure your solution continues to perform optimally after launch.',
                },
                {
                  q: 'Can you work with our existing team?',
                  a: 'Yes, we frequently collaborate with in-house teams. We can augment your team or work alongside them to deliver results.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <h4 className="font-semibold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 flex items-center justify-center">
        <div className="text-center">
          <Globe size={64} className="text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Interactive map coming soon</p>
        </div>
      </section>
    </>
  );
}
