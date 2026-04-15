interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-primary-300" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${
          center ? "mx-auto" : ""
        } bg-gradient-to-r from-primary to-secondary`}
      />
    </div>
  );
}
