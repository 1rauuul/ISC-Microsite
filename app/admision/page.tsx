import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pasoAdmision } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Proceso de Admisión",
  description: "Conoce el proceso paso a paso para ingresar a Ingeniería en Sistemas Computacionales.",
};

const faqs = [
  {
    pregunta: "¿Necesito saber programar para entrar?",
    respuesta:
      "No es necesario. La carrera te lleva de cero a nivel profesional. Solo se requiere bachillerato concluido.",
  },
  {
    pregunta: "¿Cuándo son los exámenes de admisión?",
    respuesta:
      "Generalmente en junio de cada año. Las fechas exactas se publican en el portal institucional en marzo.",
  },
  {
    pregunta: "¿Puedo transferirme de otra carrera o institución?",
    respuesta:
      "Sí, existen procesos de equivalencia y revalidación. Acércate a servicios escolares para evaluarlo.",
  },
  {
    pregunta: "¿Existe modalidad a distancia?",
    respuesta:
      "Actualmente el programa es presencial. Algunas materias pueden tener componentes en línea.",
  },
];

export default function AdmisionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="¿Cómo ingresar?"
            title="Proceso de admisión"
            subtitle="5 pasos claros para convertirte en estudiante de ISC."
            center
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stepper */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200" />

          <div className="space-y-6">
            {pasoAdmision.map((paso, i) => (
              <div key={paso.paso} className="relative flex gap-6">
                {/* Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-md text-xl ${
                    i < 2
                      ? "bg-primary text-white"
                      : "bg-white border-2 border-slate-200 text-2xl"
                  }`}
                >
                  {i < 2 ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    paso.icono
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 bg-white rounded-2xl border p-5 shadow-sm ${
                    i === 0 ? "border-primary-200 shadow-primary-100" : "border-slate-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Paso {paso.paso}
                        </span>
                        {i < 2 && (
                          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            Completado
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900">{paso.titulo}</h3>
                      <p className="text-sm text-slate-600 mt-1">{paso.descripcion}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs font-semibold text-primary whitespace-nowrap">{paso.fecha}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">¿Listo para aplicar?</p>
            <p className="text-primary-100 text-sm">Inscripciones abiertas hasta mayo 2026.</p>
          </div>
          <a
            href="/registro"
            className="flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors whitespace-nowrap"
          >
            Registrarme ahora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Dudas sobre admisión"
          />
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.pregunta}
                className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm"
              >
                <h4 className="font-bold text-slate-900 mb-2">{faq.pregunta}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
