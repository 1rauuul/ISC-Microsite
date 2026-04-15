import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Clock, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { preguntasTest } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Test Vocacional",
  description: "Descubre si Ingeniería en Sistemas Computacionales es la carrera ideal para ti.",
};

export default function TestVocacionalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-4 py-1.5 mb-6">
          <Brain className="w-4 h-4 text-violet-300" />
          <span className="text-violet-200 text-sm font-medium">Test gratuito · 5 minutos</span>
        </div>
        <SectionTitle
          eyebrow=""
          title="Test de orientación vocacional"
          subtitle="Responde 5 preguntas y descubre qué área de Ingeniería en Sistemas encaja con tu perfil."
          center
          light
        />
        <div className="flex items-center justify-center gap-6 mt-6 text-slate-400 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>5 preguntas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Brain className="w-4 h-4" />
            <span>Resultado instantáneo</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex gap-2">
          {preguntasTest.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === 0 ? "bg-violet-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <p className="text-slate-400 text-xs mt-2">Pregunta 1 de {preguntasTest.length}</p>
      </div>

      {/* Question Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
          <p className="text-white text-xl font-bold mb-6 leading-relaxed">
            {preguntasTest[0].pregunta}
          </p>

          <div className="space-y-3">
            {preguntasTest[0].opciones.map((opcion, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  i === 2
                    ? "border-violet-400 bg-violet-500/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    i === 2 ? "border-violet-400 bg-violet-500" : "border-white/30"
                  }`}
                >
                  {i === 2 && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="text-sm">{opcion.texto}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <button className="text-slate-400 hover:text-white transition-colors text-sm">
              ← Anterior
            </button>
            <Link
              href="/test-vocacional/resultado"
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-secondary text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* All questions preview */}
        <div className="mt-8 space-y-3">
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-4">
            Todas las preguntas del test
          </p>
          {preguntasTest.map((pregunta, i) => (
            <div
              key={pregunta.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                i === 0
                  ? "border-violet-400/50 bg-violet-500/10"
                  : "border-white/10 bg-white/5 opacity-60"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  i === 0 ? "bg-violet-500 text-white" : "bg-white/10 text-slate-400"
                }`}
              >
                {i + 1}
              </div>
              <p className="text-sm text-slate-300">{pregunta.pregunta}</p>
              {i === 0 && <ArrowRight className="w-4 h-4 text-violet-400 flex-shrink-0 ml-auto" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
