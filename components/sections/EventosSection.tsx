import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { eventos } from "@/lib/mockData";

const tipoColor: Record<string, "blue" | "violet" | "cyan" | "green" | "pink" | "yellow"> = {
  Competencia: "blue",
  Informativo: "violet",
  Taller: "cyan",
  Feria: "green",
  Conferencia: "pink",
  Certificación: "yellow",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });
}

export default function EventosSection() {
  const featured = eventos.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Agenda"
            title="Próximos eventos"
            subtitle="Talleres, conferencias, hackatones y ferias de empleo para la comunidad ISC."
          />
          <Link
            href="/eventos"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            Ver todos los eventos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((evento) => (
            <div
              key={evento.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="flex gap-0">
                <div className="w-16 bg-gradient-to-b from-primary to-primary-dark flex flex-col items-center justify-center py-4 flex-shrink-0">
                  <p className="text-primary-200 text-[10px] uppercase font-bold">
                    {new Date(evento.fecha + "T00:00:00").toLocaleDateString("es-MX", { month: "short" })}
                  </p>
                  <p className="text-white text-2xl font-bold">
                    {new Date(evento.fecha + "T00:00:00").getDate()}
                  </p>
                  <p className="text-primary-200 text-[10px]">
                    {new Date(evento.fecha + "T00:00:00").getFullYear()}
                  </p>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{evento.titulo}</h3>
                    <Badge color={tipoColor[evento.tipo] ?? "blue"} className="flex-shrink-0">
                      {evento.tipo}
                    </Badge>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {evento.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary-400" />
                      <span className="truncate max-w-[120px]">{evento.lugar}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-primary-400" />
                      <span>Cupo: {evento.cupo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary-400" />
                      <span>{evento.hora} h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 bg-white border border-primary-200 text-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
          >
            Ver calendario completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
