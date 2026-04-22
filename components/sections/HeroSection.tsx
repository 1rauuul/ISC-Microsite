import { ArrowRight, Play, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(90,140,201,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-primary-200 text-sm font-medium">Admisiones abiertas 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Construye el{" "}
              <span className="bg-gradient-to-r from-primary-300 to-secondary bg-clip-text text-transparent">
                futuro digital
              </span>{" "}
              de México
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Ingeniería en Sistemas Computacionales — la carrera que te da las herramientas 
              para programar, diseñar y liderar tecnología con impacto real.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="/test-vocacional" variant="primary" size="lg">
                Haz tu test vocacional
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/registro" variant="ghost" size="lg" className="border-slate-600 text-white hover:bg-white/10 hover:border-white">
                <Play className="w-5 h-5" />
                Ver video de la carrera
              </Button>
            </div>

            {/* Stats row */}
            {/* <div className="flex flex-wrap gap-6">
              {[
                { valor: "97%", etiqueta: "empleabilidad" },
                { valor: "1,200+", etiqueta: "egresados activos" },
              ].map((stat) => (
                <div key={stat.etiqueta}>
                  <p className="text-2xl font-bold text-white">{stat.valor}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">{stat.etiqueta}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/50 border border-white/10 aspect-video bg-slate-800">
              <iframe
                src="https://www.youtube.com/embed/kMdAk8g08WI?rel=0&modestbranding=1"
                title="Un día en ISC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Floating cards */}
            {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2.5 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">Clase en vivo ahora</p>
                <p className="text-xs text-slate-500">Estructuras de Datos</p>
              </div>
            </div> */}

            {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2.5 border border-slate-100">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
              <div>
                <p className="text-xs font-semibold text-slate-800">¿Tienes dudas?</p>
                <p className="text-xs text-[#25D366] font-medium">WhatsApp →</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
