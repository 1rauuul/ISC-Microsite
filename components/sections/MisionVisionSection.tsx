import { Target, BookOpen, Award, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { misionVision } from "@/lib/mockData";

type ParagraphCard = {
  kind: "paragraph";
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
  anchorId: string;
};

type ListCard = {
  kind: "list";
  icon: LucideIcon;
  title: string;
  items: readonly string[];
  listStyle: "bullet" | "numbered";
  accent: string;
  anchorId: string;
};

const cards: (ParagraphCard | ListCard)[] = [
  {
    kind: "paragraph",
    icon: Target,
    title: "Misión Académica",
    text: misionVision.mision,
    accent: "bg-primary-100 text-primary",
    anchorId: "mision-academica",
  },
  {
    kind: "paragraph",
    icon: Target,
    title: "Visión Académica",
    text: misionVision.vision,
    accent: "bg-primary-100 text-primary",
    anchorId: "vision-academica",
  },
  {
    kind: "list",
    icon: BookOpen,
    title: "Objetivos Educacionales",
    items: misionVision.objetivos,
    listStyle: "bullet",
    accent: "bg-secondary-light text-secondary",
    anchorId: "objetivos-atributos",
  },
  {
    kind: "list",
    icon: Award,
    title: "Atributos de Egreso",
    items: misionVision.atributos,
    listStyle: "numbered",
    accent: "bg-accent/15 text-accent",
    anchorId: "atributos-de-egreso",
  },
];

const cardShell =
  "bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col scroll-mt-24";

function VisionCard({
  card,
  className = "",
  listMultiColumn = false,
}: {
  card: ParagraphCard | ListCard;
  className?: string;
  listMultiColumn?: boolean;
}) {
  const Icon = card.icon;
  const listColClass = listMultiColumn ? "sm:columns-2 sm:gap-x-8" : "";
  const itemClass = listMultiColumn ? "pl-1 break-inside-avoid mb-3" : "pl-1";

  return (
    <div id={card.anchorId} className={`${cardShell} ${className}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.accent}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
      {card.kind === "paragraph" ? (
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{card.text}</p>
      ) : card.listStyle === "numbered" ? (
        <ol
          className={`text-sm text-slate-600 leading-relaxed list-decimal pl-4 marker:font-semibold marker:text-slate-800 ${listMultiColumn ? "" : "space-y-3"} ${listColClass}`}
        >
          {card.items.map((item, i) => (
            <li key={`${card.title}-${i}`} className={itemClass}>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul
          className={`text-sm text-slate-600 leading-relaxed list-disc pl-4 marker:text-primary ${listMultiColumn ? "" : "space-y-3"} ${listColClass}`}
        >
          {card.items.map((item, i) => (
            <li key={`${card.title}-${i}`} className={itemClass}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function MisionVisionSection() {
  const [mision, vision, objetivos, atributos] = cards;

  return (
    <section id="identidad-academica" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nuestra identidad"
          title="Formación con propósito"
          subtitle="Conoce los pilares académicos que guían la carrera de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 space-y-6">
          {/* Misión y visión: mitad de pantalla cada una desde md */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
            <VisionCard key={mision.title} card={mision} className="h-full" />
            <VisionCard key={vision.title} card={vision} className="h-full" />
          </div>

          {/* Objetivos: una sola columna (3 ítems). Atributos: dos columnas en sm+ */}
          <VisionCard key={objetivos.title} card={objetivos} />
          <VisionCard key={atributos.title} card={atributos} listMultiColumn />
        </div>
      </div>
    </section>
  );
}
