import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Building2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { egresados } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description: "Egresados de ISC que lideran la tecnología en México y el mundo.",
};

const colorMap: Record<string, "blue" | "violet" | "cyan" | "slate" | "pink" | "green"> = {
  Backend: "blue",
  Datos: "violet",
  Emprendimiento: "cyan",
  Cloud: "slate",
  Frontend: "pink",
  IA: "green",
};

export default function CasosExitoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Nuestros egresados"
            title="Historias reales de éxito"
            subtitle="Ingenieros en Sistemas que transforman empresas y crean tecnología de impacto global."
            center
            light
          />
        </div>
      </div>

      {/* Stats banner */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {[
              { valor: "1,200+", label: "Egresados activos" },
              { valor: "40+", label: "Empresas top empleadoras" },
              { valor: "97%", label: "Empleabilidad" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.valor}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {egresados.map((egresado) => (
            <div
              key={egresado.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={egresado.foto}
                      alt={egresado.nombre}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900">{egresado.nombre}</p>
                    <p className="text-sm text-primary font-medium">{egresado.puesto}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      <p className="text-xs text-slate-500">{egresado.empresa}</p>
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm text-slate-600 italic leading-relaxed mb-4">
                  &ldquo;{egresado.testimonio}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge color={colorMap[egresado.area] ?? "blue"}>{egresado.area}</Badge>
                    <span className="text-xs text-slate-400">Gen. {egresado.generacion}</span>
                  </div>
                  <a
                    href={egresado.linkedin}
                    className="flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark font-medium transition-colors"
                    aria-label="Ver LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">¿Quieres ser el próximo caso de éxito?</h3>
          <p className="text-primary-100 mb-6">
            Únete a la comunidad ISC y empieza a construir tu trayectoria hoy.
          </p>
          <a
            href="/registro"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-colors"
          >
            Iniciar mi registro
          </a>
        </div>
      </div>
    </div>
  );
}
