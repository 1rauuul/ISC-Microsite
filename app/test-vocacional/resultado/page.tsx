import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Star, Download, Share2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Resultado del Test Vocacional",
};

const perfilResultado = {
  area: "Desarrollo Web & Frontend",
  descripcion:
    "Tienes un perfil creativo-técnico. Disfrutas construir interfaces, te importa la experiencia del usuario y tienes facilidad para el pensamiento lógico visual. En ISC podrías especializarte en React, Next.js, diseño de sistemas y arquitectura frontend.",
  match: 88,
  icono: "🌐",
  color: "from-primary to-secondary",
  carreras: ["Desarrollo Web", "UX Engineering", "Frontend Architecture"],
  materias: [
    "Programación Web",
    "Desarrollo de Aplicaciones Móviles",
    "Tópicos de Programación",
    "Ingeniería de Software",
  ],
  empleos: ["Frontend Developer", "Full Stack Engineer", "UX Developer", "Web Architect"],
};

const otrasOpciones = [
  { area: "Inteligencia Artificial", match: 72, icono: "🤖", color: "violet" as const },
  { area: "Ciencia de Datos", match: 65, icono: "📊", color: "cyan" as const },
  { area: "Ciberseguridad", match: 54, icono: "🔐", color: "red" as const },
];

export default function ResultadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 mb-4">
            <Trophy className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Test completado</span>
          </div>
          <SectionTitle
            title="Tu perfil vocacional"
            subtitle="Basado en tus respuestas, este es el área de ISC que mejor encaja contigo."
            center
          />
        </div>

        {/* Main result card */}
        <div className={`bg-gradient-to-br ${perfilResultado.color} rounded-3xl p-8 text-white mb-8 shadow-xl`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
              {perfilResultado.icono}
            </div>
            <div className="flex-1">
              <p className="text-white/70 text-sm font-medium mb-1">Tu área principal</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{perfilResultado.area}</h2>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${perfilResultado.match}%` }}
                  />
                </div>
                <span className="text-2xl font-bold">{perfilResultado.match}%</span>
              </div>
              <p className="text-white/70 text-xs mt-1">compatibilidad con tu perfil</p>
            </div>
          </div>

          <p className="mt-5 text-white/85 leading-relaxed">{perfilResultado.descripcion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Materias clave */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Materias que estudiarías</h3>
            <div className="space-y-2">
              {perfilResultado.materias.map((materia) => (
                <div key={materia} className="flex items-center gap-2.5">
                  <Star className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{materia}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Salidas laborales */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Empleos al egresar</h3>
            <div className="flex flex-wrap gap-2">
              {perfilResultado.empleos.map((empleo) => (
                <Badge key={empleo} color="blue">{empleo}</Badge>
              ))}
            </div>
            <div className="mt-4 bg-primary-50 rounded-xl p-3 border border-primary-100">
              <p className="text-xs text-primary-dark font-semibold">💰 Sueldo promedio en esta área</p>
              <p className="text-lg font-bold text-primary-800 mt-0.5">$55,000 — $90,000 MXN/mes</p>
            </div>
          </div>
        </div>

        {/* Other matches */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8">
          <h3 className="font-bold text-slate-900 mb-4">También tienes afinidad con</h3>
          <div className="space-y-3">
            {otrasOpciones.map((op) => (
              <div key={op.area} className="flex items-center gap-4">
                <span className="text-2xl w-8 text-center">{op.icono}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{op.area}</span>
                    <span className="text-sm font-bold text-slate-900">{op.match}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary rounded-full"
                      style={{ width: `${op.match}%` }}
                    />
                  </div>
                </div>
                <Badge color={op.color}>{op.area}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/registro"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary-200"
          >
            Quiero estudiar ISC
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
            Descargar resultado
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl hover:bg-slate-50 transition-colors">
            <Share2 className="w-4 h-4" />
            Compartir
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link href="/test-vocacional" className="text-sm text-slate-500 hover:text-primary transition-colors">
            ← Repetir el test
          </Link>
        </div>
      </div>
    </div>
  );
}
