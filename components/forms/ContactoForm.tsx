"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { getSupabaseClient, type ContactoInteresadoInsert } from "@/lib/supabase";

const COMO_SE_ENTERO_OPCIONES = [
  "Redes sociales",
  "Recomendación de alguien",
  "Medios de comunicación",
  "El Tec fue a mi escuela",
  "Expo de universidades",
] as const;

type FormState = {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  escuela_procedencia: string;
  ciudad_estado: string;
  como_se_entero: string;
  intereses: string;
  graduado: boolean;
  acepta_aviso_privacidad: boolean;
};

const initialState: FormState = {
  nombres: "",
  apellidos: "",
  email: "",
  telefono: "",
  escuela_procedencia: "",
  ciudad_estado: "",
  como_se_entero: "",
  intereses: "",
  graduado: false,
  acepta_aviso_privacidad: false,
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const isSubmitting = status.kind === "submitting";
  const isSuccess = status.kind === "success";

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = (): Partial<Record<keyof FormState, string>> => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!form.nombres.trim()) errors.nombres = "Ingresa tu nombre.";
    if (!form.apellidos.trim()) errors.apellidos = "Ingresa tus apellidos.";

    if (!form.email.trim()) {
      errors.email = "Ingresa tu correo electrónico.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      errors.email = "El correo electrónico no es válido.";
    }

    const telefonoDigitos = form.telefono.replace(/\D/g, "");
    if (!form.telefono.trim()) {
      errors.telefono = "Ingresa tu teléfono.";
    } else if (telefonoDigitos.length !== 10) {
      errors.telefono = "El teléfono debe tener exactamente 10 dígitos.";
    }

    if (!form.como_se_entero) {
      errors.como_se_entero = "Selecciona una opción.";
    } else if (!COMO_SE_ENTERO_OPCIONES.includes(form.como_se_entero as (typeof COMO_SE_ENTERO_OPCIONES)[number])) {
      errors.como_se_entero = "Opción no válida.";
    }

    if (!form.acepta_aviso_privacidad) {
      errors.acepta_aviso_privacidad = "Debes aceptar el aviso de privacidad.";
    }

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting || isSuccess) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({
        kind: "error",
        message: "Revisa los campos marcados y vuelve a intentarlo.",
      });
      return;
    }

    setFieldErrors({});
    setStatus({ kind: "submitting" });

    try {
      const supabase = getSupabaseClient();

      const payload: ContactoInteresadoInsert = {
        nombres: form.nombres.trim(),
        apellidos: form.apellidos.trim(),
        email: form.email.trim().toLowerCase(),
        telefono: form.telefono.replace(/\D/g, ""),
        escuela_procedencia: form.escuela_procedencia.trim() || null,
        ciudad_estado: form.ciudad_estado.trim() || null,
        como_se_entero: form.como_se_entero,
        intereses: form.intereses.trim() || null,
        graduado: form.graduado,
        acepta_aviso_privacidad: form.acepta_aviso_privacidad,
      };

      const { error } = await supabase.from("contacto_interesados").insert(payload);

      if (error) {
        const mensaje =
          error.code === "23505"
            ? "Ya recibimos un registro con estos datos. Te contactaremos pronto."
            : "No pudimos enviar tu registro. Intenta de nuevo en unos minutos.";
        setStatus({ kind: "error", message: mensaje });
        return;
      }

      setStatus({ kind: "success" });
      setForm(initialState);
    } catch (err) {
      const mensaje =
        err instanceof Error && err.message.includes("Supabase no está configurado")
          ? "El formulario aún no está conectado. Contacta al administrador del sitio."
          : "Ocurrió un error inesperado. Intenta más tarde.";
      setStatus({ kind: "error", message: mensaje });
    }
  };

  const telefonoLimpio = useMemo(() => form.telefono.replace(/\D/g, ""), [form.telefono]);

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="font-bold text-slate-900 text-xl mb-2">¡Registro enviado!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Gracias por tu interés en Ingeniería en Sistemas Computacionales. Un asesor te contactará muy pronto
          por correo o WhatsApp con información personalizada.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8"
    >
      <h3 className="font-bold text-slate-900 text-lg mb-6">Datos de contacto</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field
          label="Nombre(s) *"
          icon={<User className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.nombres}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            autoComplete="given-name"
            value={form.nombres}
            onChange={(e) => handleChange("nombres", e.target.value)}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>

        <Field
          label="Apellidos *"
          icon={<User className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.apellidos}
        >
          <input
            type="text"
            placeholder="Tus apellidos"
            autoComplete="family-name"
            value={form.apellidos}
            onChange={(e) => handleChange("apellidos", e.target.value)}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field
          label="Correo electrónico *"
          icon={<Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.email}
        >
          <input
            type="email"
            placeholder="tu@correo.com"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>

        <Field
          label="Teléfono / WhatsApp *"
          icon={<Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.telefono}
          hint={
            form.telefono && !fieldErrors.telefono
              ? `${telefonoLimpio.length}/10 dígitos`
              : undefined
          }
        >
          <input
            type="tel"
            placeholder="10 dígitos"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={14}
            value={form.telefono}
            onChange={(e) => handleChange("telefono", e.target.value.replace(/[^\d\s()+-]/g, ""))}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field
          label="Escuela de procedencia"
          icon={<GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.escuela_procedencia}
        >
          <input
            type="text"
            placeholder="Bachillerato / Preparatoria"
            value={form.escuela_procedencia}
            onChange={(e) => handleChange("escuela_procedencia", e.target.value)}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>

        <Field
          label="Ciudad / Estado"
          icon={<MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.ciudad_estado}
        >
          <input
            type="text"
            placeholder="Tu ciudad"
            value={form.ciudad_estado}
            onChange={(e) => handleChange("ciudad_estado", e.target.value)}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>
      </div>

      <div className="mb-4">
        <Field
          label="¿Cómo te enteraste de ISC? *"
          icon={<ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.como_se_entero}
        >
          <select
            value={form.como_se_entero}
            onChange={(e) => handleChange("como_se_entero", e.target.value)}
            disabled={isSubmitting}
            className={`flex-1 text-sm outline-none bg-transparent disabled:opacity-60 ${
              form.como_se_entero ? "text-slate-700" : "text-slate-400"
            }`}
          >
            <option value="">Selecciona una opción</option>
            {COMO_SE_ENTERO_OPCIONES.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mb-6">
        <Field
          label="¿Qué te interesa saber? (opcional)"
          icon={<MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />}
          error={fieldErrors.intereses}
          alignTop
        >
          <textarea
            placeholder="Becas, retícula, laboratorios, vida universitaria..."
            rows={3}
            value={form.intereses}
            onChange={(e) => handleChange("intereses", e.target.value)}
            disabled={isSubmitting}
            maxLength={1000}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 resize-none bg-transparent disabled:opacity-60"
          />
        </Field>
      </div>

      <div className="mb-6">
        <label
          htmlFor="graduado"
          className={`flex items-center gap-3 border rounded-xl px-3 py-3 cursor-pointer transition-all select-none ${
            form.graduado
              ? "border-primary-400 bg-primary-50"
              : "border-slate-200 hover:border-slate-300 bg-white"
          } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          <GraduationCap
            className={`w-4 h-4 flex-shrink-0 ${
              form.graduado ? "text-primary" : "text-slate-400"
            }`}
          />
          <span
            className={`flex-1 text-sm font-medium ${
              form.graduado ? "text-primary" : "text-slate-700"
            }`}
          >
            Graduado
          </span>
          <input
            id="graduado"
            type="checkbox"
            checked={form.graduado}
            onChange={(e) => handleChange("graduado", e.target.checked)}
            disabled={isSubmitting}
            className="w-4 h-4 accent-primary cursor-pointer"
          />
        </label>
        <p className="mt-1 text-xs text-slate-400">
          Marca esta casilla solo si ya te graduaste del bachillerato.
        </p>
      </div>

      <div className="flex items-start gap-3 mb-6">
        <input
          id="acepta_aviso_privacidad"
          type="checkbox"
          checked={form.acepta_aviso_privacidad}
          onChange={(e) => handleChange("acepta_aviso_privacidad", e.target.checked)}
          disabled={isSubmitting}
          className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
        />
        <label htmlFor="acepta_aviso_privacidad" className="text-xs text-slate-500 cursor-pointer select-none">
          Acepto el{" "}
          <a href="#" className="text-primary hover:underline">
            aviso de privacidad
          </a>{" "}
          y que me contacten para orientación sobre la carrera. Sin spam.
        </label>
      </div>
      {fieldErrors.acepta_aviso_privacidad && (
        <p className="-mt-4 mb-4 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {fieldErrors.acepta_aviso_privacidad}
        </p>
      )}

      {status.kind === "error" && (
        <div className="mb-4 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>{status.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mi registro"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  icon,
  children,
  error,
  hint,
  alignTop = false,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  alignTop?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
      <div
        className={`flex ${alignTop ? "items-start" : "items-center"} gap-3 border rounded-xl px-3 py-3 transition-all ${
          error
            ? "border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100"
            : "border-slate-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100"
        }`}
      >
        {icon}
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
      {!error && hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}
