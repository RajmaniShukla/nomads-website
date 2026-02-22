import { Card, SectionWrapper, Badge } from "@/app/components/ui";
import { blogPosts } from "@/app/data";
import Link from "next/link";

export const metadata = {
  title: "Blog | Nomads",
  description: "Insights, trends, and thought leadership on AI, software development, and digital transformation.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, software development, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-colors">
                <span className="text-4xl">📝</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="primary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", { 
                      month: "short", 
                      day: "numeric", 
                      year: "numeric" 
                    })}
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get the latest insights on AI and technology delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
