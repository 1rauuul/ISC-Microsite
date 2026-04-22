import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import { retos } from "@/lib/mockData";
import RetosInteractivosGrid from "@/components/retos/RetosInteractivosGrid";

export const metadata: Metadata = {
  title: "Retos Técnicos",
  description: "Catálogo de mini retos técnicos por área de Ingeniería en Sistemas.",
};

const INTERACTIVE_IDS = [2, 3, 4];

export default function RetosPage() {
  const retosInteractivos = retos.filter((r) =>
    INTERACTIVE_IDS.includes(r.id)
  );

  const stats = [
    { val: retosInteractivos.length.toString(), label: "Retos interactivos" },
    {
      val: retosInteractivos
        .reduce((a, r) => a + r.completados, 0)
        .toLocaleString(),
      label: "Completados",
    },
    { val: "Sin código", label: "Solo curiosidad" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle
            eyebrow="Aprende haciendo"
            title="Retos interactivos"
            subtitle="Juega, experimenta y aprende. Sin experiencia previa necesaria."
            center
            light
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-slate-100 p-3 sm:p-4 text-center shadow-sm"
            >
              <p className="text-lg sm:text-2xl font-bold text-primary leading-tight">
                {s.val}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <RetosInteractivosGrid retos={retosInteractivos} />
      </div>
    </div>
  );
}
