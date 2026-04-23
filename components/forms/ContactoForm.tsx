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
  ArrowRight,
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
const PHONE_DIGITS = /^\d{10}$/;

function formatTelefono(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const isSubmitting = status.kind === "submitting";
  const isSuccess = status.kind === "success";

  const telefonoDigitos = useMemo(() => form.telefono.replace(/\D/g, ""), [form.telefono]);

  const emailValid = EMAIL_REGEX.test(form.email.trim());
  const telefonoValid = PHONE_DIGITS.test(telefonoDigitos);

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleEmailChange = (raw: string) => {
    handleChange("email", raw);
    if (touched.email) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        if (!raw.trim()) {
          next.email = "Ingresa tu correo electrónico.";
        } else if (!EMAIL_REGEX.test(raw.trim())) {
          next.email = "El correo electrónico no es válido.";
        } else {
          delete next.email;
        }
        return next;
      });
    }
  };

  const handleTelefonoChange = (raw: string) => {
    const formatted = formatTelefono(raw);
    handleChange("telefono", formatted);
    if (touched.telefono) {
      const digits = formatted.replace(/\D/g, "");
      setFieldErrors((prev) => {
        const next = { ...prev };
        if (!digits) {
          next.telefono = "Ingresa tu teléfono.";
        } else if (digits.length < 10) {
          next.telefono = `Faltan ${10 - digits.length} dígito${digits.length === 9 ? "" : "s"}.`;
        } else {
          delete next.telefono;
        }
        return next;
      });
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (field === "email") {
        if (!form.email.trim()) {
          next.email = "Ingresa tu correo electrónico.";
        } else if (!EMAIL_REGEX.test(form.email.trim())) {
          next.email = "El correo electrónico no es válido.";
        } else {
          delete next.email;
        }
      }
      if (field === "telefono") {
        const digits = form.telefono.replace(/\D/g, "");
        if (!digits) {
          next.telefono = "Ingresa tu teléfono.";
        } else if (digits.length < 10) {
          next.telefono = `Faltan ${10 - digits.length} dígito${digits.length === 9 ? "" : "s"}.`;
        } else {
          delete next.telefono;
        }
      }
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

    const digits = form.telefono.replace(/\D/g, "");
    if (!digits) {
      errors.telefono = "Ingresa tu teléfono.";
    } else if (digits.length !== 10) {
      errors.telefono = `Faltan ${10 - digits.length} dígito${digits.length === 9 ? "" : "s"}.`;
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

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
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
      className="bg-white rounded-3xl shadow-2xl p-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-6">Quiero más información</h3>

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
          valid={touched.email && emailValid && !fieldErrors.email}
        >
          <input
            type="email"
            placeholder="tu@correo.com"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={() => handleBlur("email")}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>

        <Field
          label="Teléfono / WhatsApp *"
          icon={<Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />}
          error={fieldErrors.telefono}
          valid={touched.telefono && telefonoValid && !fieldErrors.telefono}
          hint={
            touched.telefono && !fieldErrors.telefono && !telefonoValid && telefonoDigitos.length > 0
              ? `${telefonoDigitos.length}/10 dígitos`
              : undefined
          }
        >
          <input
            type="tel"
            placeholder="(XXX) XXX-XXXX"
            autoComplete="tel"
            inputMode="numeric"
            value={form.telefono}
            onChange={(e) => handleTelefonoChange(e.target.value)}
            onBlur={() => handleBlur("telefono")}
            disabled={isSubmitting}
            className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent disabled:opacity-60"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Field
          label="Escuela de procedencia"
          icon={<GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />}
        >
          <input
            type="text"
            placeholder="Preparatoria o bachillerato"
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
            placeholder="Becas, laboratorios, retícula..."
            rows={2}
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
          Al registrarte aceptas nuestro{" "}
          <a href="#" className="text-primary-500 hover:underline">
            aviso de privacidad
          </a>
          . Sin spam, prometido.
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
        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mi información
            <ArrowRight className="w-4 h-4" />
          </>
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
  valid = false,
  alignTop = false,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  valid?: boolean;
  alignTop?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
      <div
        className={`flex ${alignTop ? "items-start" : "items-center"} gap-3 border rounded-xl px-3 py-3 transition-all ${
          error
            ? "border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100"
            : valid
            ? "border-green-400 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100"
            : "border-slate-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100"
        }`}
      >
        {icon}
        {children}
        {valid && !error && (
          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
        )}
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
