import SectionTitle from "@/components/ui/SectionTitle";
import ContactoForm from "@/components/forms/ContactoForm";

export default function RegistroSection() {
  return (
    <section
      id="registro"
      className="py-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 relative overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(90,140,201,0.4) 1px, transparent 0)",
          backgroundSize: "35px 35px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="¿Listo para dar el paso?"
              title="Regístrate y recibe información personalizada"
              subtitle="Déjanos tus datos y un asesor te contactará para guiarte en cada etapa del proceso de admisión."
              light
            />
          </div>

          <ContactoForm />
        </div>
      </div>
    </section>
  );
}
