import { GraduationCap, MapPin, FileText, Megaphone } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  {
    icon: GraduationCap,
    title: "Especialidad ofrecida",
    text: "El área de Ingeniería en Sistemas Computacionales ofrece la especialidad en Tecnologías de la Información y Comunicación.",
  },
  {
    icon: MapPin,
    title: "¿Dónde informarte?",
    text: "Acude al área de Servicios Escolares del Instituto Tecnológico de Tehuacán para toda la información sobre el proceso de inscripción.",
  },
  {
    icon: FileText,
    title: "Formatos disponibles",
    text: "Algunos formatos necesarios se encuentran dentro de la sección de servicios escolares del portal institucional.",
  },
  {
    icon: Megaphone,
    title: "Propaganda en preparatorias",
    text: "El área se presenta en los periodos de ofertas educativas para dar a conocer el plan de estudios y las áreas de desempeño laboral.",
  },
];

export default function NuevoIngresoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Aspirantes"
          title="Instrucciones para nuevo ingreso"
          subtitle="¿Eres aspirante? La siguiente información te puede ayudar a comenzar tu camino en ISC."
          center
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
