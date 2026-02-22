'use client';

import { LucideIcon, type LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className = '',
  highlight = false,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    none: 'card-none',
    sm: 'card-sm',
    md: '',
    lg: 'card-lg',
  };

  return (
    <div
      className={`card ${highlight ? 'card-highlight' : ''} ${paddingClasses[padding]} ${
        hover ? '' : 'hover:transform-none hover:shadow-md'
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features?: string[];
  href?: string;
}

export function ServiceCard({ title, description, icon: Icon, features, href }: ServiceCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <Card className="h-full" highlight>
      <div className="icon-box icon-box-gradient mb-5">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" style={{ background: 'hsl(var(--primary))' }} />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center p-6">
      <div className="stat-number mb-2">{number}</div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export function TeamCard({ name, role, bio, image, linkedin, twitter }: TeamCardProps) {
  return (
    <Card className="text-center">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-3xl font-bold text-white">{name.charAt(0)}</span>
        )}
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-3">{role}</p>
      <p className="text-muted-foreground text-sm">{bio}</p>
      {(linkedin || twitter) && (
        <div className="flex justify-center gap-3 mt-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="testimonial-card h-full">
      <p className="text-foreground mb-6 relative z-10">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0">
          {image ? (
            <img src={image} alt={author} className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg font-bold text-white">{author.charAt(0)}</span>
          )}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  href: string;
  featured?: boolean;
}

export function BlogCard({ title, excerpt, author, date, category, readTime, image, href, featured }: BlogCardProps) {
  return (
    <Card padding="none" className={`overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 ${featured ? 'md:aspect-[2/1]' : ''}`}>
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge">{category}</span>
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>
        <a href={href}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{title}</h3>
        </a>
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{author}</span>
          <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </Card>
  );
}

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: { metric: string; value: string }[];
  technologies: string[];
  image?: string;
  href: string;
  featured?: boolean;
}

export function CaseStudyCard({ title, client, industry, description, results, technologies, image, href, featured }: CaseStudyCardProps) {
  return (
    <Card padding="none" className={`overflow-hidden ${featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}>
      <div className={`aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-800 ${featured ? 'lg:aspect-auto lg:h-full' : ''}`}>
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge">{industry}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-primary font-medium text-sm mb-3">{client}</p>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {results.slice(0, 2).map((result, index) => (
            <div key={index}>
              <p className="text-xl font-bold text-primary">{result.value}</p>
              <p className="text-xs text-muted-foreground">{result.metric}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
