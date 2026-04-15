import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  border?: boolean;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  border = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl
        ${border ? "border border-slate-100" : ""}
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" : "shadow-sm"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
