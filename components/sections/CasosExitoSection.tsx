import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Building2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { egresados } from "@/lib/mockData";

const colorMap: Record<string, "blue" | "violet" | "cyan" | "slate" | "pink" | "green"> = {
  Backend: "blue",
  Datos: "violet",
  Emprendimiento: "cyan",
  Cloud: "slate",
  Frontend: "pink",
  IA: "green",
};

export default function CasosExitoSection() {
  const featured = egresados.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Nuestros egresados"
            title="Historias que inspiran"
            subtitle="Personas reales que estudiaron ISC y hoy lideran la tecnología en México y el mundo."
          />
          <Link
            href="/casos-exito"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver todos los casos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((egresado) => (
            <div
              key={egresado.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={egresado.foto}
                      alt={egresado.nombre}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-sm">{egresado.nombre}</p>
                    <p className="text-xs text-primary font-medium truncate">{egresado.puesto}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <p className="text-xs text-slate-500 truncate">{egresado.empresa}</p>
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm text-slate-600 leading-relaxed italic mb-4 line-clamp-3">
                  &ldquo;{egresado.testimonio}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge color={colorMap[egresado.area] ?? "blue"}>
                      {egresado.area}
                    </Badge>
                    <span className="text-xs text-slate-400">Gen. {egresado.generacion}</span>
                  </div>
                  <a
                    href={egresado.linkedin}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-slate-900 to-primary-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-300 text-sm mb-1">Sueldo promedio de egresados ISC</p>
            <p className="text-2xl font-bold">$72,000 MXN / mes</p>
          </div>
          <Link
            href="/casos-exito"
            className="flex items-center gap-2 bg-white text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors whitespace-nowrap"
          >
            Conoce sus trayectorias
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
