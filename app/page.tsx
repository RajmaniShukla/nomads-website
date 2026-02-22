import Link from "next/link";
import { Button, Card, SectionWrapper, Badge } from "@/app/components/ui";
import { companyInfo, services, aiSolutions, stats, testimonials, industries } from "@/app/data";

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <Badge variant="primary" className="mb-6">
            🚀 AI-Powered Innovation
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering{" "}
            <span className="gradient-text">Tomorrow&apos;s</span>
            <br />
            Intelligence
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We build cutting-edge AI solutions and scalable software systems that transform 
            businesses. From generative AI to enterprise platforms, we turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/contact" size="xl">
              Start Your Project
            </Button>
            <Button href="/services" variant="outline" size="xl">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// Services Overview
function ServicesOverview() {
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="What We Do"
      pattern
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service, index) => (
          <Card key={service.id} className="p-6 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {service.shortDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="default">{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href="/services" variant="outline">
          View All Services →
        </Button>
      </div>
    </SectionWrapper>
  );
}

// AI Solutions Highlight
function AISolutionsHighlight() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            AI Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Advanced AI Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and create competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-indigo-500/50 hover:bg-gray-900/80 transition-all duration-300 card-hover"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {solution.useCases.slice(0, 2).map((useCase) => (
                  <span key={useCase} className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/ai-solutions" size="lg">
            Explore AI Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}

// Industries
function IndustriesSection() {
  return (
    <SectionWrapper
      id="industries"
      title="Industries We Serve"
      subtitle="Sector Expertise"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 bg-white dark:bg-gray-900/30 hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {industry.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Testimonials
function TestimonialsSection() {
  return (
    <SectionWrapper
      title="What Our Clients Say"
      subtitle="Testimonials"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let&apos;s discuss how AI and modern technology can drive your business forward. Book a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="xl">
            Book Free Consultation
          </Button>
          <Button href="/portfolio" variant="ghost" size="xl" className="text-white hover:bg-white/10">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AISolutionsHighlight />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
