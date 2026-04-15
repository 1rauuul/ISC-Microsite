import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="bg-gradient-to-r from-primary-dark via-primary to-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-14 h-14 text-primary-300/60 mx-auto mb-6" />
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
          &ldquo;La tecnología más poderosa del siglo XXI es el software — y los ingenieros 
          en sistemas son quienes dan forma al mundo que todos usamos.&rdquo;
        </blockquote>
        <p className="text-primary-200 text-lg font-medium">
          — Filosofía del Programa ISC, TECNM
        </p>
        <div className="mt-8 flex justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-white">+52 años</p>
            <p className="text-primary-200 text-sm mt-1">formando ingenieros</p>
          </div>
          <div className="w-px bg-primary-500" />
          <div>
            <p className="text-3xl font-bold text-white">Top 10</p>
            <p className="text-primary-200 text-sm mt-1">carrera más demandada</p>
          </div>
          <div className="w-px bg-primary-500" />
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-primary-200 text-sm mt-1">pertinencia laboral</p>
          </div>
        </div>
      </div>
    </section>
  );
}
