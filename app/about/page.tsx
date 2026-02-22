import { Button, Card, SectionWrapper } from "@/app/components/ui";
import { companyInfo, team, stats } from "@/app/data";

export const metadata = {
  title: "About Us | Nomads",
  description: "Learn about Nomads - our mission, vision, and the team behind AI innovation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building the Future of Technology
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re a team of engineers, designers, and strategists passionate about 
            creating intelligent solutions that transform businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To democratize AI and empower businesses of all sizes with intelligent solutions 
              that drive growth, efficiency, and innovation. We believe technology should be 
              accessible, understandable, and impactful.
            </p>
          </Card>
          <Card className="p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To be the global leader in AI-driven digital transformation, known for 
              delivering exceptional value through innovation, expertise, and unwavering 
              commitment to our clients&apos; success.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper
        title="Our Values"
        subtitle="What Drives Us"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "💡", title: "Innovation", desc: "Pushing boundaries with cutting-edge solutions" },
            { icon: "🤝", title: "Partnership", desc: "Working together as an extension of your team" },
            { icon: "⚡", title: "Excellence", desc: "Delivering quality in everything we do" },
            { icon: "🔒", title: "Trust", desc: "Building long-term relationships through reliability" },
          ].map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper title="Leadership Team" subtitle="Meet Our Experts">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the companies that trust Nomads for their digital transformation journey.
        </p>
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
      </SectionWrapper>
    </>
  );
}
