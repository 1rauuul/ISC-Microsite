import { Calendar, Users, Presentation } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CongresoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Evento Anual"
          title="Congreso ISC"
          subtitle="Un evento donde los estudiantes tienen acercamiento con egresados y profesionistas a través de conferencias y talleres."
          center
          light
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, title: "Octubre 2024", text: "Semana del 21 al 25 de octubre. Cinco días de conocimiento y networking." },
            { icon: Presentation, title: "Conferencias y Talleres", text: "Ponentes del campo laboral comparten experiencias y orientación profesional." },
            { icon: Users, title: "Networking", text: "Conecta con egresados, empresas y profesionistas de carreras afines." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-primary-200 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
