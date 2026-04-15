import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { becas } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Becas y Apoyos",
  description: "Conoce todas las becas y apoyos económicos disponibles para estudiantes de ISC.",
};

const colorMap: Record<string, "yellow" | "blue" | "cyan" | "violet" | "green" | "slate"> = {
  yellow: "yellow",
  blue: "blue",
  cyan: "cyan",
  violet: "violet",
  green: "green",
  slate: "slate",
};

export default function ApoyosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Apoyo económico"
            title="Becas disponibles"
            subtitle="El dinero no debe ser un obstáculo. Conoce todas las opciones de apoyo para tu carrera."
            center
            light
          />
          <div className="flex justify-center gap-6 mt-8">
            {[
              { val: "6+", label: "Tipos de beca" },
              { val: "40%", label: "Estudiantes con beca" },
              { val: "100%", label: "Cobertura máxima" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.val}</p>
                <p className="text-slate-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Becas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {becas.map((beca) => (
            <div
              key={beca.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{beca.icono}</span>
                <div>
                  <Badge color={colorMap[beca.color] ?? "blue"} className="mb-1">
                    {beca.tipo}
                  </Badge>
                  <h3 className="font-bold text-slate-900 text-sm">{beca.nombre}</h3>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 mb-4">
                <p className="text-xs text-slate-500 mb-0.5">Monto / Beneficio</p>
                <p className="font-bold text-slate-800">{beca.monto}</p>
              </div>

              <div className="space-y-1.5 mb-4">
                <p className="text-xs font-semibold text-slate-700">Requisitos principales:</p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">{beca.requisito}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500">Vigencia: </span>
                  <span className="font-medium text-slate-700">{beca.plazo}</span>
                </div>
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-1">
                  Solicitar
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <SectionTitle
            eyebrow="¿Cómo aplicar?"
            title="Proceso para solicitar beca"
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { paso: "1", titulo: "Verifica requisitos", desc: "Revisa qué becas aplican a tu perfil académico y económico." },
              { paso: "2", titulo: "Reúne documentos", desc: "Comprobantes de estudios, CURP, documentos adicionales según beca." },
              { paso: "3", titulo: "Entrega en ventanilla", desc: "Dirígete a control escolar con tu expediente completo." },
              { paso: "4", titulo: "Espera resolución", desc: "El comité notifica en 15 días hábiles. Aplica al siguiente semestre." },
            ].map((item) => (
              <div key={item.paso} className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-dark font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {item.paso}
                </div>
                <p className="font-semibold text-slate-900 text-sm mb-1">{item.titulo}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
