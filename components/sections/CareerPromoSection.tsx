import {
  Code2,
  Brain,
  Shield,
  Cloud,
  Database,
  Smartphone,
  TrendingUp,
  Globe,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { estadisticasCarrera } from "@/lib/mockData";

const areas = [
  { icono: Code2, label: "Desarrollo Web", color: "text-primary bg-primary-50" },
  { icono: Brain, label: "Inteligencia Artificial", color: "text-violet-600 bg-violet-50" },
  { icono: Shield, label: "Ciberseguridad", color: "text-red-600 bg-red-50" },
  { icono: Cloud, label: "Cómputo en la Nube", color: "text-secondary bg-secondary-light" },
  { icono: Database, label: "Ciencia de Datos", color: "text-orange-600 bg-orange-50" },
  { icono: Smartphone, label: "Desarrollo Móvil", color: "text-green-600 bg-green-50" },
  { icono: TrendingUp, label: "Emprendimiento TI", color: "text-pink-600 bg-pink-50" },
  { icono: Globe, label: "IoT & Industria 4.0", color: "text-teal-600 bg-teal-50" },
];

export default function CareerPromoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              eyebrow="¿Por qué ISC?"
              title="Una carrera para quienes quieren cambiar el mundo"
              subtitle="Estudia la disciplina que más crece y más impacta. Con ISC tendrás las habilidades para crear desde apps hasta sistemas de IA."
            />

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {estadisticasCarrera.map((stat) => (
                <div
                  key={stat.etiqueta}
                  className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100"
                >
                  <p className="text-2xl font-bold text-primary">{stat.valor}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-tight">{stat.etiqueta}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge color="blue">Acreditación CACEI</Badge>
              <Badge color="violet">Certificaciones internacionales</Badge>
              <Badge color="cyan">Modalidad presencial</Badge>
              <Badge color="green">Campus con laboratorios</Badge>
            </div>
          </div>

          {/* Right: Areas grid */}
          <div>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
              Áreas de especialidad
            </p>
            <div className="grid grid-cols-2 gap-3">
              {areas.map(({ icono: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all cursor-default"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
