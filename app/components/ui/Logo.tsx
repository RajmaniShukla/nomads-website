'use client';

import Link from 'next/link';
import { Compass } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', iconSize: 18, text: 'text-lg' },
    md: { icon: 'w-10 h-10', iconSize: 22, text: 'text-xl' },
    lg: { icon: 'w-12 h-12', iconSize: 28, text: 'text-2xl' },
  };

  return (
    <Link href="/" className={`logo ${className}`}>
      <div className={`logo-icon ${sizeClasses[size].icon}`}>
        <Compass size={sizeClasses[size].iconSize} strokeWidth={2.5} />
      </div>
      {showText && <span className={sizeClasses[size].text}>Nomads</span>}
    </Link>
  );
}
