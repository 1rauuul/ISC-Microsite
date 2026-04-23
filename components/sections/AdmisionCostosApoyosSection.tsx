import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pasoAdmision } from "@/lib/mockData";

export default function AdmisionCostosApoyosSection() {
  const pasosPreview = pasoAdmision.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Todo lo que necesitas saber"
          title="Proceso de admisión"
          subtitle="Sigue estos pasos para unirte a la carrera de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary-200/90 bg-white shadow-2xl shadow-primary-900/15 ring-4 ring-primary-500/10">
            <div
              className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-primary"
              aria-hidden
            />
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-secondary/15 blur-3xl pointer-events-none"
              aria-hidden
            />

            <div className="relative p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-800 text-white shadow-lg shadow-primary-500/30">
                  <CalendarDays className="w-8 h-8" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    {/* <Sparkles className="w-3.5 h-3.5" /> */}
                    Ciclo agosto–diciembre 2026
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    Tu proceso en línea, en 6 pasos
                  </h3>
                  <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
                    Registro en el SII, ficha, evaluación diagnóstica, resultados, curso propedéutico e
                    inscripción. Aquí ves las primeras etapas; el detalle completo está en la página de
                    admisión.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50/90 border border-slate-100 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
                  Primeras etapas
                </p>
                <ul className="space-y-5">
                  {pasosPreview.map((paso) => (
                    <li key={paso.paso} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-700 text-base font-bold text-white shadow-md">
                        {paso.paso}
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-base font-semibold text-slate-900 leading-snug">
                          {paso.titulo}
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary">{paso.fecha}</p>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {paso.descripcion}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-slate-500">
                  ¿Listo para el SII o necesitas ayuda del área de ISC?
                </p>
                <Link
                  href="/admision"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/25 hover:opacity-95 transition-opacity sm:shrink-0"
                >
                  Ver proceso completo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
