import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Expand } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { areasRecorrido } from "@/lib/mockData";

export default function RecorridoVirtualSection() {
  const featured = areasRecorrido.slice(0, 2);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Recorrido 360°"
            title="Conoce el campus sin salir de casa"
            subtitle="Explora laboratorios, espacios de trabajo y el ambiente universitario."
          />
          <Link
            href="/recorrido-virtual"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Tour completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((area) => (
            <div
              key={area.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative aspect-video bg-slate-200">
                <Image
                  src={area.imagen}
                  alt={area.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {area.hotspots.map((hotspot, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-white/90 border-2 border-primary-500 flex items-center justify-center shadow-md hover:scale-125 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[10px] font-medium px-2 py-1 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {hotspot.label}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-2 py-1">
                  <span className="text-white text-xs font-bold">360°</span>
                </div>

                <button className="absolute top-3 left-3 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <Expand className="w-4 h-4" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <p className="text-white font-bold text-sm">{area.nombre}</p>
                  </div>
                  <p className="text-slate-300 text-xs">{area.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {areasRecorrido.map((area) => (
            <Link
              key={area.id}
              href="/recorrido-virtual"
              className="flex items-center gap-2.5 p-3 bg-slate-50 hover:bg-primary-50 rounded-xl border border-slate-100 hover:border-primary-200 transition-all"
            >
              <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-700">{area.nombre}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
