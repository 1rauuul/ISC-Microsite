import { ArrowRight, CheckCircle, Clock, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";

const beneficios = [
  "5 minutos para completarlo",
  "Resultado personalizado por área de interés",
  "Sin registro previo necesario",
  "Basado en metodología de orientación vocacional",
];

export default function TestVocacionalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-slate-900 via-primary-950 to-primary-900 rounded-3xl overflow-hidden shadow-2xl">
          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-500/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12">
            {/* Left */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
                <BarChart3 className="w-4 h-4 text-primary-300" />
                <span className="text-primary-200 text-sm font-medium">Test gratuito</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                ¿Es ISC la carrera{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  para ti?
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Descubre en qué área de la ingeniería encaja mejor tu personalidad, 
                intereses y habilidades. Nuestro test analiza 5 dimensiones.
              </p>

              <ul className="space-y-2.5 mb-8">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button href="/test-vocacional" variant="secondary" size="lg">
                  Hacer el test ahora
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">~5 minutos</span>
                </div>
              </div>
            </div>

            {/* Right: Preview UI */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-slate-300 mb-2">
                    <span>Pregunta 3 de 5</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-to-r from-accent to-secondary rounded-full" />
                  </div>
                </div>

                <p className="text-white font-semibold mb-4 text-sm">
                  ¿Cuál de estas actividades te emociona más?
                </p>

                <div className="space-y-2">
                  {[
                    "Crear interfaces visuales atractivas",
                    "Analizar grandes volúmenes de datos",
                    "Construir servidores y arquitecturas",
                    "Automatizar procesos con IA",
                  ].map((opcion, i) => (
                    <div
                      key={opcion}
                      className={`px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-all border ${
                        i === 3
                          ? "bg-accent/30 border-accent text-white"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {opcion}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
