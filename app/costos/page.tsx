import type { Metadata } from "next";
import { CheckCircle, Info } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { costos } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Costos e Inscripción",
  description: "Desglose completo de costos para estudiar Ingeniería en Sistemas Computacionales.",
};

export default function CostosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Inversión en tu futuro"
            title="Costos de la carrera"
            subtitle="Educación pública de calidad con costos accesibles y múltiples apoyos disponibles."
            center
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Main costs */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="font-bold text-slate-900 text-lg">Desglose de costos</h2>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Inscripción */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-900">Inscripción semestral</p>
                <p className="text-sm text-slate-500 mt-0.5">{costos.inscripcion.descripcion}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-bold text-primary">
                  ${costos.inscripcion.semestral.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500 ml-1">MXN</span>
                </p>
                <p className="text-xs text-slate-400">por semestre</p>
              </div>
            </div>

            {/* Colegiatura */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-green-50/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">Colegiatura mensual</p>
                  <p className="text-sm text-slate-500 mt-0.5">{costos.colegiaturas.descripcion}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-bold text-green-600">$0</p>
                <p className="text-xs text-slate-400">institución pública</p>
              </div>
            </div>

            {/* Titulación */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-900">Trámites de titulación</p>
                <p className="text-sm text-slate-500 mt-0.5">{costos.serviciosTitulacion.descripcion}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-2xl font-bold text-slate-700">
                  ${costos.serviciosTitulacion.monto.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500 ml-1">MXN</span>
                </p>
                <p className="text-xs text-slate-400">pago único al final</p>
              </div>
            </div>

            {/* Materiales */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-900">Materiales y papelería</p>
                <p className="text-sm text-slate-500 mt-0.5">{costos.estimadoAnual.descripcion}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xl font-bold text-slate-700">
                  ${costos.estimadoAnual.min.toLocaleString()} — ${costos.estimadoAnual.max.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500 ml-1">MXN/año</span>
                </p>
                <p className="text-xs text-slate-400">estimado aproximado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total estimate */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-primary-200 text-sm mb-1">Inversión total estimada en 4.5 años</p>
              <p className="text-3xl font-bold">$28,000 — $40,000 MXN</p>
              <p className="text-primary-200 text-sm mt-1">incluyendo inscripciones y materiales</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
              <p className="text-primary-200 text-xs mb-1">ROI estimado al primer año de egreso</p>
              <p className="text-2xl font-bold">1,400%</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="flex gap-3 bg-primary-50 border border-primary-100 rounded-2xl p-5">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-primary-800 mb-1">Nota importante</p>
            <p className="text-sm text-primary-dark">
              Los costos mostrados son referenciales y pueden variar cada semestre. Consulta el 
              portal institucional para montos exactos actualizados. Recuerda que existen múltiples 
              becas que pueden cubrir hasta el 100% de tu inscripción.
            </p>
            <a href="/apoyos" className="inline-block mt-2 text-sm text-primary font-semibold hover:text-primary-dark">
              Ver becas disponibles →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
