"use client";

import { useEffect, useRef } from "react";
import { X, Users, Zap } from "lucide-react";
import Badge from "@/components/ui/Badge";
import CifradoCesarReto from "./CifradoCesarReto";
import AdivinaNumeroReto from "./AdivinaNumeroReto";
import EncuentraElBugReto from "./EncuentraElBugReto";

type Reto = {
  id: number;
  titulo: string;
  area: string;
  dificultad: string;
  duracion: string;
  descripcion: string;
  tecnologias: string[];
  color: string;
  icono: string;
  completados: number;
};

type Props = {
  reto: Reto | null;
  onClose: () => void;
};

const RETOS_INTERACTIVOS: Record<number, React.ComponentType> = {
  2: CifradoCesarReto,
  3: AdivinaNumeroReto,
  4: EncuentraElBugReto,
};

const difficultyColor: Record<string, "green" | "yellow" | "red"> = {
  Básico: "green",
  Intermedio: "yellow",
  Avanzado: "red",
};

export default function RetoModal({ reto, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reto) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [reto, onClose]);

  if (!reto) return null;

  const JuegoComponent = RETOS_INTERACTIVOS[reto.id];

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        ref={panelRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-5 border-b border-slate-100 shrink-0">
          <span className="text-3xl">{reto.icono}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <p className="text-xs font-semibold text-primary">{reto.area}</p>
              <Badge color={difficultyColor[reto.dificultad] ?? "green"}>
                {reto.dificultad}
              </Badge>
            </div>
            <h2 className="font-bold text-slate-900 text-base leading-tight">
              {reto.titulo}
            </h2>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-500" />
                {reto.duracion}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {reto.completados.toLocaleString()} completados
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 flex-1">
          {JuegoComponent ? (
            <JuegoComponent />
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {reto.descripcion}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {reto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic">
                Este reto se realiza con papel y lápiz. Lee la descripción y
                resuélvelo por tu cuenta.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
