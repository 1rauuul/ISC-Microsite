import Link from "next/link";
import { ArrowRight, CheckCircle, DollarSign, Award, CalendarDays } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pasoAdmision, costos, becas } from "@/lib/mockData";

export default function AdmisionCostosApoyosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Todo lo que necesitas saber"
          title="Admisión, costos y apoyos"
          subtitle="Proceso claro, costos accesibles y múltiples becas disponibles para que nada te detenga."
          center
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Admisión */}
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

          {/* Costos */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900">Costos e inversión</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Inscripción semestral</p>
                <p className="text-2xl font-bold text-slate-900">
                  ${costos.inscripcion.semestral.toLocaleString()} MXN
                </p>
                <p className="text-xs text-slate-500 mt-1">{costos.inscripcion.descripcion}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <p className="text-xs font-semibold text-green-700">Institución pública</p>
                </div>
                <p className="text-sm text-green-800 font-bold">{costos.colegiaturas.descripcion}</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-100">
                <p className="text-xs text-slate-500">Gastos anuales estimados (materiales)</p>
                <p className="text-sm font-bold text-slate-700 mt-0.5">
                  ${costos.estimadoAnual.min.toLocaleString()} — ${costos.estimadoAnual.max.toLocaleString()} MXN
                </p>
              </div>
            </div>

            <Link
              href="/costos"
              className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
            >
              Desglose completo de costos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Becas */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="font-bold text-slate-900">Becas disponibles</h3>
            </div>
            <div className="space-y-2.5">
              {becas.slice(0, 4).map((beca) => (
                <div
                  key={beca.id}
                  className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-100 hover:border-yellow-200 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{beca.icono}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate">{beca.nombre}</p>
                    <p className="text-xs text-slate-500">{beca.monto}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/apoyos"
              className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
            >
              Ver todas las becas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
