import { Button, Card, SectionWrapper, Badge } from "@/app/components/ui";
import { industries } from "@/app/data";

export const metadata = {
  title: "Industries | Nomads",
  description: "Discover how we serve various industries with AI and software solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Industries
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sector Expertise
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We bring deep domain knowledge to deliver tailored solutions across diverse industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <Card key={industry.id} className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{industry.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {industry.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {industry.description}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Solutions We Provide
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {industry.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{solution}</span>
                    </div>
                  ))}
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
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            We work across all sectors. Let&apos;s discuss your specific needs.
          </p>
          <Button href="/contact" variant="secondary" size="xl">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
