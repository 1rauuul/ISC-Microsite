import { Award, CheckCircle, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TitulacionEgelSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Titulación"
          title="EGEL PLUS — CENEVAL"
          subtitle="Opción de titulación integral para la carrera de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Titulación por EGEL</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                En apoyo a la titulación integral de la carrera de Ingeniería en Sistemas Computacionales, 
                al cubrir el 100% de requisitos para el proceso de titulación, para planes 2009-2010 y 2004-2005, 
                se acepta la obtención de un testimonio de <strong>&laquo;Desempeño Satisfactorio&raquo;</strong> o{" "}
                <strong>&laquo;Sobresaliente&raquo;</strong> en EGEL PLUS del Centro Nacional de Evaluación 
                para la Educación Superior A.C. (CENEVAL).
              </p>
            </div>
          </div>

          <div className="space-y-2.5 mb-6">
            {[
              "Consultar la página de CENEVAL para fechas, costos y aplicaciones",
              "Aplica para planes de estudio 2009-2010 y 2004-2005",
              "Testimonio mínimo: Desempeño Satisfactorio",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.ceneval.edu.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors"
          >
            Visitar CENEVAL
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
