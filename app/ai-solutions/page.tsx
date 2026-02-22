import { Button, Card, SectionWrapper, Badge } from "@/app/components/ui";
import { aiSolutions, industries } from "@/app/data";

export const metadata = {
  title: "AI Solutions | Nomads",
  description: "Discover our advanced AI capabilities including Generative AI, Computer Vision, NLP, and more.",
};

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" className="mb-6">🧠 Artificial Intelligence</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Advanced AI Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business. 
            From generative AI to computer vision, we build intelligent systems that deliver results.
          </p>
        </div>
      </section>

      {/* AI Capabilities */}
      <SectionWrapper title="Our AI Capabilities" subtitle="What We Offer">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiSolutions.map((solution) => (
            <Card key={solution.id} className="p-6 group" gradient>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {solution.description}
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Use Cases:</p>
                <div className="flex flex-wrap gap-2">
                  {solution.useCases.map((useCase) => (
                    <Badge key={useCase} variant="primary">{useCase}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Technology Stack */}
      <SectionWrapper
        title="AI Technology Stack"
        subtitle="Powered By"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "OpenAI GPT-4", "Claude", "LangChain", "TensorFlow", "PyTorch", "YOLO",
            "Hugging Face", "Stable Diffusion", "AutoGPT", "LangGraph", "MLflow", "Vertex AI"
          ].map((tech) => (
            <div key={tech} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-indigo-500 transition-colors">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{tech}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper title="AI Across Industries" subtitle="Where We Apply AI">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.slice(0, 4).map((industry) => (
            <Card key={industry.id} className="p-6">
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{industry.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{industry.description}</p>
              <ul className="space-y-1">
                {industry.solutions.slice(0, 3).map((sol) => (
                  <li key={sol} className="text-xs text-indigo-600 dark:text-indigo-400">• {sol}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your AI Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s explore how AI can transform your business operations.
          </p>
          <Button href="/contact" variant="secondary" size="xl">
            Start Your AI Journey
          </Button>
        </div>
      </section>
    </>
  );
}
