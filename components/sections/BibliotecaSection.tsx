import { BookOpen, Globe, Search } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BibliotecaSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Recursos"
          title="Centro de Información"
          subtitle="Un espacio de consulta bibliográfica y digital al servicio de la comunidad estudiantil."
          center
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Biblioteca Física",
              text: "Acceso a acervo bibliográfico especializado en ciencias computacionales, matemáticas e ingeniería.",
            },
            {
              icon: Globe,
              title: "Biblioteca Digital",
              text: "Plataformas digitales con libros, revistas y recursos en línea disponibles las 24 horas.",
            },
            {
              icon: Search,
              title: "Consulta Especializada",
              text: "Apoyo para investigación académica, tesis y proyectos integradores con material actualizado.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
