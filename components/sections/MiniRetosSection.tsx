import Link from "next/link";
import { ArrowRight, Users, Zap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { retos } from "@/lib/mockData";

const difficultyColor: Record<string, "green" | "yellow" | "red"> = {
  Básico: "green",
  Intermedio: "yellow",
  Avanzado: "red",
};

const cardColors: Record<string, string> = {
  violet: "from-violet-50 to-violet-100/50 border-violet-200",
  blue: "from-primary-50 to-primary-100/50 border-primary-200",
  cyan: "from-secondary-light to-secondary-light/50 border-secondary",
  green: "from-green-50 to-green-100/50 border-green-200",
  orange: "from-orange-50 to-orange-100/50 border-orange-200",
  red: "from-red-50 to-red-100/50 border-red-200",
  pink: "from-pink-50 to-pink-100/50 border-pink-200",
  teal: "from-teal-50 to-teal-100/50 border-teal-200",
};

export default function MiniRetosSection() {
  const featured = retos.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Mini retos técnicos"
            title="Prueba tu potencial antes de entrar"
            subtitle="Ejercicios reales por área que puedes intentar hoy. Sin experiencia previa requerida."
          />
          <Link
            href="/retos"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver todos los retos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((reto) => (
            <div
              key={reto.id}
              className={`bg-gradient-to-br ${cardColors[reto.color] ?? cardColors.blue} border rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-3xl">{reto.icono}</span>
                <Badge color={difficultyColor[reto.dificultad] ?? "green"}>
                  {reto.dificultad}
                </Badge>
              </div>

              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{reto.titulo}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                {reto.descripcion}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {reto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-white/70 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{reto.completados} completados</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-500" />
                  <span>{reto.duracion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/retos"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
          >
            Explorar todos los retos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
