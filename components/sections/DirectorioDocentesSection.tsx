import { User } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { docentes } from "@/lib/mockData";

export default function DirectorioDocentesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nuestro equipo"
          title="Directorio de Docentes"
          subtitle="Conoce al equipo de profesores que integran el área de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {docentes.map((docente) => (
            <div
              key={docente.nombre}
              className="bg-white rounded-xl border border-slate-100 p-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{docente.nombre}</p>
                <p className="text-xs text-slate-500">{docente.grado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
