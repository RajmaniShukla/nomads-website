import { Button, Card, SectionWrapper, Badge } from "@/app/components/ui";
import { caseStudies } from "@/app/data";

export const metadata = {
  title: "Portfolio | Nomads",
  description: "Explore our successful projects and case studies showcasing AI and software solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Case Studies & Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results for real businesses. See how we&apos;ve helped companies transform 
            with AI and modern technology.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <SectionWrapper>
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Placeholder */}
                <div className="h-64 lg:h-auto bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl">💼</span>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="primary">{study.industry}</Badge>
                    <Badge variant="default">{study.client}</Badge>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Challenge</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Solution</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 4).map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>
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
            Want Similar Results?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss how we can help transform your business.
          </p>
          <Button href="/contact" variant="secondary" size="xl">
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
}
