import type { Metadata } from "next";
import { Users, Zap, Filter } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { retos } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Retos Técnicos",
  description: "Catálogo de mini retos técnicos por área de Ingeniería en Sistemas.",
};

const difficultyColor: Record<string, "green" | "yellow" | "red"> = {
  Básico: "green",
  Intermedio: "yellow",
  Avanzado: "red",
};

const cardColors: Record<string, string> = {
  violet: "border-violet-200 hover:border-violet-400",
  blue: "border-blue-200 hover:border-blue-400",
  cyan: "border-cyan-200 hover:border-cyan-400",
  green: "border-green-200 hover:border-green-400",
  orange: "border-orange-200 hover:border-orange-400",
  red: "border-red-200 hover:border-red-400",
  pink: "border-pink-200 hover:border-pink-400",
  teal: "border-teal-200 hover:border-teal-400",
};

const areas = [...new Set(retos.map((r) => r.area))];

export default function RetosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Aprende haciendo"
            title="Catálogo de retos técnicos"
            subtitle="Ejercicios reales organizados por área y dificultad. Comienza donde quieras."
            center
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters (visual only) */}
        <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-semibold">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 text-xs font-medium bg-primary text-white rounded-lg">
              Todos
            </button>
            {["Básico", "Intermedio", "Avanzado"].map((d) => (
              <button
                key={d}
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {d}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {areas.slice(0, 4).map((area) => (
              <button
                key={area}
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { val: retos.length.toString(), label: "Retos disponibles" },
            { val: retos.reduce((a, r) => a + r.completados, 0).toLocaleString(), label: "Completados por usuarios" },
            { val: "3", label: "Niveles de dificultad" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-4 text-center shadow-sm">
              <p className="text-xl font-bold text-primary">{s.val}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Retos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {retos.map((reto) => (
            <div
              key={reto.id}
              className={`bg-white rounded-2xl border ${cardColors[reto.color] ?? "border-slate-200"} p-5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-3xl">{reto.icono}</span>
                <Badge color={difficultyColor[reto.dificultad] ?? "green"}>
                  {reto.dificultad}
                </Badge>
              </div>

              <p className="text-xs font-semibold text-primary mb-1">{reto.area}</p>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{reto.titulo}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                {reto.descripcion}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {reto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{reto.completados}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-500" />
                  <span>{reto.duracion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
