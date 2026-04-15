import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { reticula } from "@/lib/mockData";

export default function ReticulaPreviewSection() {
  const preview = reticula.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Plan de estudios"
            title="Retícula de la carrera"
            subtitle="9 semestres diseñados para llevarte de los fundamentos a la especialización."
          />
          <Link
            href="/reticula"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver retícula completa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {preview.map((semestre) => (
            <div
              key={semestre.semestre}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary to-secondary px-4 py-3">
                <p className="text-white font-bold text-sm">Semestre {semestre.semestre}</p>
                <p className="text-primary-200 text-xs">{semestre.materias.length} materias</p>
              </div>
              <div className="p-3 space-y-1.5">
                {semestre.materias.map((materia) => (
                  <div
                    key={materia.clave}
                    className="flex items-start gap-2 p-2 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-slate-700 leading-tight">{materia.nombre}</p>
                      <p className="text-[10px] text-slate-400">{materia.creditos} créditos</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Mostrando semestres 1–4 de 9. La retícula completa incluye todas las materias y optativas.
          </p>
          <Link
            href="/reticula"
            className="inline-flex items-center gap-2 bg-white border border-primary-200 text-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
          >
            Ver los 9 semestres completos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
