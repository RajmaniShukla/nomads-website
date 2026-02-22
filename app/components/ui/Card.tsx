import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  style?: CSSProperties;
}

export default function Card({
  children,
  className = "",
  id,
  hover = true,
  glow = false,
  gradient = false,
  style,
}: CardProps) {
  const baseStyles = `
    relative rounded-2xl overflow-hidden
    bg-white dark:bg-gray-900/50
    border border-gray-200 dark:border-gray-800
    transition-all duration-300
  `;

  const hoverStyles = hover ? "card-hover" : "";
  const glowStyles = glow ? "glow-sm" : "";
  const gradientStyles = gradient ? "border-gradient" : "";

  return (
    <div
      id={id}
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${gradientStyles} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
