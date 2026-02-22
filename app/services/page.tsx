import { Button, Card, SectionWrapper, Badge } from "@/app/components/ui";
import { services } from "@/app/data";

export const metadata = {
  title: "Services | Nomads",
  description: "Explore our comprehensive range of AI, software development, and digital transformation services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            End-to-End Technology Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From AI engineering to enterprise software, we deliver solutions that drive 
            business growth and operational excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={service.id} id={service.id} className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-indigo-600 dark:text-indigo-400">{service.shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="primary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss your specific requirements and build something amazing together.
          </p>
          <Button href="/contact" variant="secondary" size="xl">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
