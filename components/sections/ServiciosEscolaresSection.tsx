import { Heart, FileText, Mail, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { serviciosEscolares } from "@/lib/mockData";

export default function ServiciosEscolaresSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Trámites"
          title="Servicios Escolares"
          subtitle="Links importantes para tus trámites de salud, inscripción y atención administrativa."
          center
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Salud */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-900">Salud</h3>
            </div>
            <div className="space-y-2.5">
              {serviciosEscolares.salud.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary flex-shrink-0" />
                  <span className="text-xs text-slate-700 group-hover:text-primary transition-colors leading-tight">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Escolares */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-slate-900">Escolares</h3>
            </div>
            <div className="space-y-2.5">
              {serviciosEscolares.escolares.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary flex-shrink-0" />
                  <span className="text-xs text-slate-700 group-hover:text-primary transition-colors leading-tight">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900">Contacto</h3>
            </div>
            <div className="space-y-4">
              {serviciosEscolares.contactos.map((item) => (
                <div key={item.correo} className="bg-white rounded-xl border border-slate-100 p-4">
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <a
                    href={`mailto:${item.correo}`}
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors break-all"
                  >
                    {item.correo}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
