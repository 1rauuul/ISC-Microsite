import { Trophy, Star, TrendingUp } from "lucide-react";

export default function RankingSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-primary-100 text-sm font-medium">Dato Curioso</span>
          </div>
          <p className="text-primary-200 text-sm mb-2">14 de Marzo 2024</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-3xl mx-auto">
            &ldquo;Instituto Tecnológico de Tehuacán, la máxima casa de estudios en Tehuacán y la región&rdquo;
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-primary-100 leading-relaxed mb-6">
            <strong className="text-white">El Universal</strong> publicó su edición{" "}
            <strong className="text-white">Mejores Universidades Ranking de Escuelas 2024</strong> y en ella, 
            el Instituto Tecnológico de Tehuacán obtiene el <strong className="text-yellow-400">1er. Lugar</strong> ante 
            los demás Tecnológicos hermanos participantes. Y <strong className="text-yellow-400">1ero.</strong> ante 
            las demás instituciones de nuestra ciudad y la región.
          </p>

          <div className="flex justify-center gap-8">
            <div className="text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">1er</p>
              <p className="text-primary-200 text-xs mt-1">entre Tecnológicos</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">1ero</p>
              <p className="text-primary-200 text-xs mt-1">en la región</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
