import { Target, BookOpen, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { misionVision } from "@/lib/mockData";

const cards = [
  {
    icon: Target,
    title: "Misión y Visión",
    text: misionVision.mision,
    accent: "bg-primary-100 text-primary",
  },
  {
    icon: BookOpen,
    title: "Objetivos Educacionales",
    text: misionVision.objetivos,
    accent: "bg-secondary-light text-secondary",
  },
  {
    icon: Award,
    title: "Atributos de Egreso",
    text: misionVision.atributos,
    accent: "bg-accent/15 text-accent",
  },
];

export default function MisionVisionSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nuestra identidad"
          title="Formación con propósito"
          subtitle="Conoce los pilares académicos que guían la carrera de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text, accent }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
