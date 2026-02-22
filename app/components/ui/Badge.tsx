interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "success";
  className?: string;
}

const variants = {
  default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  primary: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  secondary: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
