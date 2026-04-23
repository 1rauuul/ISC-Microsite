import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { infoImportante } from "@/lib/mockData";

const cardClassName =
  "bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group flex min-h-[132px] w-[min(100%,280px)] flex-col items-center justify-center text-center sm:w-64 md:w-[17rem]";

export default function InfoImportanteSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Documentos"
          title="Información importante"
          subtitle="Recursos y documentos clave del área de Ingeniería en Sistemas Computacionales."
          center
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5">
          {infoImportante.map((item) => {
            const inner = (
              <>
                <span className="text-3xl block mb-3" aria-hidden>
                  {item.icono}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight max-w-[14rem] text-balance">
                  {item.titulo}
                </h3>
              </>
            );

            const isExternal =
              item.href.startsWith("http://") || item.href.startsWith("https://");

            if (isExternal) {
              return (
                <a
                  key={item.titulo}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {inner}
                </a>
              );
            }

            return (
              <Link key={item.titulo} href={item.href} className={cardClassName}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
