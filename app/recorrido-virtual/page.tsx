import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Expand, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { areasRecorrido } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Recorrido Virtual",
  description: "Explora el campus y laboratorios de ISC en un recorrido virtual 360°.",
};

export default function RecorridoVirtualPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <div className="py-16 text-center px-4">
        <SectionTitle
          eyebrow="Tour 360°"
          title="Recorrido virtual del campus"
          subtitle="Navega por laboratorios, aulas y espacios colaborativos sin salir de casa."
          center
          light
        />
      </div>

      {/* Main viewer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-800 shadow-2xl">
          <Image
            src={areasRecorrido[0].imagen}
            alt={areasRecorrido[0].nombre}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Hotspots */}
          {areasRecorrido[0].hotspots.map((hotspot, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              <div className="relative group">
                <div className="w-8 h-8 rounded-full bg-white/80 border-2 border-primary-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  {hotspot.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-white text-sm font-semibold">{areasRecorrido[0].nombre}</span>
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-black/50 backdrop-blur-sm rounded-lg w-9 h-9 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <Expand className="w-4 h-4" />
            </button>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2">
              <span className="text-white text-xs font-bold">360°</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button className="bg-black/50 backdrop-blur-sm rounded-lg w-9 h-9 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="bg-black/50 backdrop-blur-sm rounded-lg w-9 h-9 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Areas grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
          Selecciona un espacio
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {areasRecorrido.map((area, i) => (
            <div
              key={area.id}
              className={`relative rounded-2xl overflow-hidden aspect-video cursor-pointer group border-2 transition-all ${
                i === 0 ? "border-primary-500" : "border-transparent hover:border-primary-400"
              }`}
            >
              <Image
                src={area.imagen}
                alt={area.nombre}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold">{area.nombre}</p>
              </div>
              {i === 0 && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
