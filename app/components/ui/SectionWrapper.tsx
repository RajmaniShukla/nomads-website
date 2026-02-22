import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  pattern?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
  pattern = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        relative py-16 sm:py-20 lg:py-24
        ${dark ? "bg-gray-950 text-white" : ""}
        ${pattern ? "tech-grid" : ""}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 sm:mb-16">
            {subtitle && (
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
