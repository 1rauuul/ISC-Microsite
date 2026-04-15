import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { eventos } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Talleres, conferencias, hackatones y ferias de empleo para la comunidad ISC.",
};

const tipoColor: Record<string, "blue" | "violet" | "cyan" | "green" | "pink" | "yellow"> = {
  Competencia: "blue",
  Informativo: "violet",
  Taller: "cyan",
  Feria: "green",
  Conferencia: "pink",
  Certificación: "yellow",
};

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Agenda 2026"
            title="Eventos de la comunidad ISC"
            subtitle="Talleres, conferencias, hackatones y ferias de empleo para estudiantes y aspirantes."
            center
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters (visual) */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-xl">
            Todos
          </button>
          {Object.keys(tipoColor).map((tipo) => (
            <button
              key={tipo}
              className="px-4 py-2 text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary rounded-xl transition-colors"
            >
              {tipo}
            </button>
          ))}
        </div>

        {/* Featured event */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-lg bg-white border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={eventos[0].imagen}
                alt={eventos[0].titulo}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-4 left-4">
                <Badge color="blue" className="shadow-sm">Destacado</Badge>
              </div>
            </div>
            <div className="p-8">
              <Badge color={tipoColor[eventos[0].tipo] ?? "blue"} className="mb-3">
                {eventos[0].tipo}
              </Badge>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{eventos[0].titulo}</h2>
              <p className="text-slate-600 leading-relaxed mb-5">{eventos[0].descripcion}</p>
              <div className="space-y-2 mb-6">
                {[
                  { icon: Calendar, text: `${new Date(eventos[0].fecha + "T00:00:00").toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}` },
                  { icon: Clock, text: eventos[0].hora + " hrs" },
                  { icon: MapPin, text: eventos[0].lugar },
                  { icon: Users, text: `Cupo limitado: ${eventos[0].cupo} personas` },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-colors">
                Inscribirme al evento
              </button>
            </div>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventos.slice(1).map((evento) => (
            <div
              key={evento.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={evento.imagen}
                  alt={evento.titulo}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <Badge color={tipoColor[evento.tipo] ?? "blue"}>{evento.tipo}</Badge>
                  <span className="text-xs text-slate-500">
                    {new Date(evento.fecha + "T00:00:00").toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{evento.titulo}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{evento.descripcion}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary-400" />
                    <span className="truncate max-w-[100px]">{evento.lugar}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary-400" />
                    <span>Cupo: {evento.cupo}</span>
                  </div>
                </div>
                <button className="w-full border border-primary-200 text-primary font-semibold text-sm py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
