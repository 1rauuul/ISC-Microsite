"use client";

import { useState, useCallback } from "react";
import { Play } from "lucide-react";
import type { Reto } from "@/lib/mockData";
import RetoModal from "./RetoModal";

type Props = {
  retos: Reto[];
};

const cardAccent: Record<string, string> = {
  violet: "border-violet-300 bg-violet-50",
  blue: "border-blue-300 bg-blue-50",
  cyan: "border-cyan-300 bg-cyan-50",
  green: "border-green-300 bg-green-50",
  orange: "border-orange-300 bg-orange-50",
  red: "border-red-300 bg-red-50",
  pink: "border-pink-300 bg-pink-50",
  teal: "border-teal-300 bg-teal-50",
};

export default function RetosInteractivosGrid({ retos }: Props) {
  const [retoAbierto, setRetoAbierto] = useState<Reto | null>(null);
  const cerrarModal = useCallback(() => setRetoAbierto(null), []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {retos.map((reto) => (
          <button
            key={reto.id}
            onClick={() => setRetoAbierto(reto)}
            className={`relative w-full text-left border-2 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99] transition-all cursor-pointer bg-white ${
              cardAccent[reto.color] ?? "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl shrink-0">{reto.icono}</span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                    <Play className="w-2.5 h-2.5 fill-white" />
                    Interactivo
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {reto.area}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug mb-1.5">
                  {reto.titulo}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {reto.descripcion}
                </p>
              </div>

              <div className="shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary self-center">
                <Play className="w-4 h-4 fill-primary" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <RetoModal reto={retoAbierto} onClose={cerrarModal} />
    </>
  );
}
