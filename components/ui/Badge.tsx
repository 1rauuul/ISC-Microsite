import { type ReactNode } from "react";

type BadgeColor =
  | "blue"
  | "cyan"
  | "violet"
  | "green"
  | "red"
  | "yellow"
  | "orange"
  | "pink"
  | "teal"
  | "slate";

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorClasses: Record<BadgeColor, string> = {
  blue: "bg-primary-100 text-primary ring-primary-200",
  cyan: "bg-secondary-light text-secondary ring-secondary",
  violet: "bg-violet-100 text-violet-700 ring-violet-200",
  green: "bg-green-100 text-green-700 ring-green-200",
  red: "bg-red-100 text-red-700 ring-red-200",
  yellow: "bg-yellow-100 text-yellow-700 ring-yellow-200",
  orange: "bg-orange-100 text-orange-700 ring-orange-200",
  pink: "bg-pink-100 text-pink-700 ring-pink-200",
  teal: "bg-teal-100 text-teal-700 ring-teal-200",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
};

export default function Badge({ children, color = "blue", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
