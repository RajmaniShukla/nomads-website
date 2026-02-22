'use client';

import { 
  BookOpen, 
  ArrowRight, 
  Search,
  Calendar,
  Clock,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button, SectionHeader, Card, BlogCard } from '../components/ui';
import { blogPosts } from '../data';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredPost = blogPosts.find(post => post.featured);

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
              <BookOpen size={16} />
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & <span className="text-primary">Ideas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on technology, AI, digital transformation, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-11"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && searchQuery === '' && (
        <section className="section pb-0">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card padding="none" className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800" />
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">Featured</span>
                      <span className="badge bg-primary/10">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <User size={16} />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div>
                      <Button href={`/blog/${featuredPost.id}`} icon={ArrowRight}>
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => !(post.featured && activeCategory === 'All' && searchQuery === ''))
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard {...post} href={`/blog/${post.id}`} />
                  </motion.div>
                ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
              <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Subscribe to our newsletter for the latest insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" icon={ArrowRight}>
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
