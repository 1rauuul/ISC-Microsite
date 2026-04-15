import SectionTitle from "@/components/ui/SectionTitle";
import { infoImportante } from "@/lib/mockData";

export default function InfoImportanteSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Documentos"
          title="Información importante"
          subtitle="Recursos y documentos clave del área de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {infoImportante.map((item) => (
            <div
              key={item.titulo}
              className="bg-white rounded-2xl border border-slate-100 p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span className="text-3xl block mb-3">{item.icono}</span>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                {item.titulo}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
