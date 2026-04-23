import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, AlertTriangle } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { procesoAdmisionLineaAgostoDic2026 } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Proceso de Admisión",
  description:
    "Proceso en línea de admisión Agosto – Diciembre 2026 — Instituto Tecnológico de Tehuacán (TecNM).",
};

const { titulo, subtitulo, notaImportante, pasos } = procesoAdmisionLineaAgostoDic2026;

const faqs = [
  {
    pregunta: "¿Dónde me registro?",
    respuesta:
      "En el SII del TecNM Tehuacán, en el periodo del 9 de febrero al 24 de mayo de 2026. El enlace está en el paso 1 de esta página.",
  },
  {
    pregunta: "¿Cuánto cuesta la ficha y la inscripción?",
    respuesta:
      "La ficha y trámites asociados al paso 2 tienen un costo de $1,000.00. El curso propedéutico cuesta $1,000.00 (pago el 1° de julio). La inscripción es de $2,300.00 (pago el 3 de agosto). Verifica montos vigentes en el portal institucional.",
  },
  {
    pregunta: "¿Cuándo es la evaluación diagnóstica?",
    respuesta:
      "El 29 de mayo de 2026 a las 13:00 horas, en modalidad en línea. EVALUATEC enviará por correo la información el mismo día.",
  },
  {
    pregunta: "¿Cuándo publican resultados?",
    respuesta: "El 23 de junio de 2026, en el portal www.tehuacan.tecnm.mx.",
  },
  {
    pregunta: "¿Necesito haber terminado el bachillerato para inscribirme?",
    respuesta:
      "Para la inscripción se requiere haber concluido el bachillerato sin materias adeudadas y presentar constancia. Consulta la nota importante al final de los pasos.",
  },
];

export default function AdmisionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — mismo patrón que /retos */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle
            eyebrow="TecNM · Instituto Tecnológico de Tehuacán"
            title={titulo}
            subtitle={subtitulo}
            center
            light
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://sii.tehuacan.tecnm.mx/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-primary font-bold px-6 py-3.5 text-sm shadow-sm hover:bg-primary-50 transition-colors"
            >
              Ir al registro (SII)
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/#registro"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Más información (ISC)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-center text-slate-600 text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
          Sigue en orden los 6 pasos del proceso en línea. Las fechas corresponden al ciclo escolar{" "}
          <strong className="text-slate-800">Agosto – Diciembre 2026</strong>.
        </p>

        {/* Línea de tiempo — mismo estilo que el proceso anterior del sitio */}
        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden sm:block" aria-hidden />

          <div className="space-y-6">
            {pasos.map((p) => (
              <div key={p.paso} className="relative flex gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-md bg-primary text-white text-sm font-bold">
                  {p.paso}
                </div>
                <article className="flex-1 bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm">
                  <h2 className="font-bold text-slate-900 text-base sm:text-lg leading-snug mb-3">
                    {p.titulo}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary-50 px-2.5 py-1 rounded-lg">
                      {p.fechas}
                    </span>
                    {p.costo ? (
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {p.costo}
                      </span>
                    ) : null}
                  </div>
                  {p.lineas.length > 0 ? (
                    <ul className="space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-5 mb-3">
                      {p.lineas.map((linea, idx) => (
                        <li key={idx}>{linea}</li>
                      ))}
                    </ul>
                  ) : null}
                  {p.enlaces?.map((en) => (
                    <p key={en.href} className="text-sm mt-2">
                      <a
                        href={en.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-dark underline-offset-2 hover:underline"
                      >
                        {en.label}
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </p>
                  ))}
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Nota — callout discreto acorde al sitio */}
        <div
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm flex gap-4"
          role="note"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-primary" aria-hidden />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-2">Nota importante</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{notaImportante}</p>
          </div>
        </div>

        {/* CTA — mismo gradiente que otros CTAs del micrositio */}
        <div className="mt-10 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">¿Listo para iniciar?</p>
            <p className="text-primary-100 text-sm mt-1">
              Registro en línea del 9 de febrero al 24 de mayo de 2026.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <a
              href="https://sii.tehuacan.tecnm.mx/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors text-sm"
            >
              SII — Registro
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/#registro"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Contacto ISC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-14">
          <SectionTitle eyebrow="Ayuda" title="Preguntas frecuentes" />
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
