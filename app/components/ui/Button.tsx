"use client";

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-indigo-600 to-purple-600 text-white
    hover:from-indigo-500 hover:to-purple-500
    shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30
    active:scale-[0.98]
  `,
  secondary: `
    bg-gray-900 dark:bg-white text-white dark:text-gray-900
    hover:bg-gray-800 dark:hover:bg-gray-100
    shadow-lg hover:shadow-xl
  `,
  outline: `
    border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400
    hover:bg-indigo-50 dark:hover:bg-indigo-950
    hover:border-indigo-400
  `,
  ghost: `
    text-gray-600 dark:text-gray-400
    hover:text-gray-900 dark:hover:text-white
    hover:bg-gray-100 dark:hover:bg-gray-800
  `,
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3 text-base gap-2",
  xl: "px-10 py-4 text-lg gap-3",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}: Props) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-indigo-500/20
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
  `;

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as LinkProps;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as ButtonProps)}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
