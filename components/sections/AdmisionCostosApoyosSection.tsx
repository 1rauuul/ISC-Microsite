import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pasoAdmision } from "@/lib/mockData";

export default function AdmisionCostosApoyosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Todo lo que necesitas saber"
          title="Proceso de admisión"
          subtitle="Sigue estos pasos para unirte a la carrera de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900">Proceso de admisión</h3>
            </div>
            <div className="space-y-3">
              {pasoAdmision.slice(0, 4).map((paso) => (
                <div key={paso.paso} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {paso.paso}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{paso.titulo}</p>
                    <p className="text-xs text-primary font-medium">{paso.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/admision"
              className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
            >
              Ver proceso completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
