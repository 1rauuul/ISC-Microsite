import { Play, Maximize2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Conoce la carrera"
          title="Un día en Ingeniería en Sistemas"
          subtitle="Acompaña a estudiantes actuales en un recorrido por clases, proyectos y laboratorios."
          center
        />

        <div className="mt-10 relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-slate-900 to-primary-950 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-slate-900/80" />

          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
            <p className="text-white text-xs font-medium">🎥 Producción ISC Media Lab</p>
          </div>

          <div className="absolute top-6 right-6 flex gap-2">
            <div className="bg-red-500 rounded-full w-2.5 h-2.5 mt-0.5" />
            <span className="text-white text-xs font-medium">EN VIVO</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:scale-110 transition-all flex items-center justify-center mb-5 mx-auto shadow-xl">
                <Play className="w-10 h-10 text-white ml-1.5" fill="white" />
              </button>
              <p className="text-white font-bold text-xl">Ver el video completo</p>
              <p className="text-white/70 text-sm mt-1">Duración: 8 minutos</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4 flex items-center gap-4">
            <button className="text-white hover:text-primary-300 transition-colors">
              <Play className="w-5 h-5" />
            </button>
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-primary-400 rounded-full" />
            </div>
            <span className="text-white/70 text-xs">0:00 / 8:00</span>
            <button className="text-white/70 hover:text-white transition-colors ml-2">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timestamps */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { time: "0:00", label: "Introducción" },
            { time: "2:10", label: "Laboratorios" },
            { time: "4:30", label: "Testimonios" },
            { time: "6:45", label: "Campus y vida estudiantil" },
          ].map((item) => (
            <button
              key={item.time}
              className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-primary-50 rounded-xl border border-slate-100 hover:border-primary-200 transition-colors text-left"
            >
              <span className="text-xs font-mono text-primary font-bold">{item.time}</span>
              <span className="text-xs text-slate-600">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
