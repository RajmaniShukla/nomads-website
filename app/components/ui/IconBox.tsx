'use client';

import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient';
  className?: string;
}

export default function IconBox({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
}: IconBoxProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-lg',
    md: 'icon-box',
    lg: 'icon-box icon-box-lg',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  return (
    <div className={`${sizeClasses[size]} ${variant === 'gradient' ? 'icon-box-gradient' : ''} ${className}`}>
      <Icon size={iconSizes[size]} />
    </div>
  );
}
