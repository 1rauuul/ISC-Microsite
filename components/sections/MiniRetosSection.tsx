"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Users, Zap, Play } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import RetoModal from "@/components/retos/RetoModal";
import { retos } from "@/lib/mockData";

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

const INTERACTIVE_IDS = [2, 3, 4];

type Reto = (typeof retos)[number];

export default function MiniRetosSection() {
  const interactivos = retos.filter((r) => INTERACTIVE_IDS.includes(r.id));
  const [retoAbierto, setRetoAbierto] = useState<Reto | null>(null);
  const cerrarModal = useCallback(() => setRetoAbierto(null), []);

  return (
    <section className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionTitle
            eyebrow="Mini retos interactivos"
            title="¿Tienes mente de ingeniero?"
            subtitle="Retos con juego en vivo — sin experiencia previa, solo curiosidad."
          />
          <Link
            href="/retos"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap shrink-0"
          >
            Ver catálogo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {interactivos.map((reto) => (
            <button
              key={reto.id}
              onClick={() => setRetoAbierto(reto)}
              className={`relative bg-gradient-to-br ${
                cardColors[reto.color] ?? cardColors.blue
              } border rounded-2xl p-6 text-left hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all cursor-pointer w-full`}
            >
              <span className="inline-flex items-center gap-1 text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide mb-4">
                <Play className="w-2.5 h-2.5 fill-white" />
                Interactivo
              </span>

              <div className="text-4xl mb-3">{reto.icono}</div>

              <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">
                {reto.titulo}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                {reto.descripcion}
              </p>

              <div className="flex items-center justify-between text-sm text-slate-500 pt-3 border-t border-white/60">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{reto.completados.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>{reto.duracion}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/retos"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-sm w-full sm:w-auto"
          >
            Ver todos los retos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <RetoModal reto={retoAbierto} onClose={cerrarModal} />
    </section>
  );
}
