"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { initialContactState, validateContact, type ContactState } from "@/lib/contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const classes = cn(
    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-shadow",
    error
      ? "border-orange ring-2 ring-orange/20"
      : "border-transparent focus:ring-2 focus:ring-orange/40",
    textarea && "min-h-36 resize-y",
  );

  return (
    <label className="block">
      <span className="text-sm font-medium text-charcoal">
        {label}
        {required ? " *" : ""}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          className={classes}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={classes}
        />
      )}
      {error ? <p className="mt-1 text-xs text-orange">{error}</p> : null}
    </label>
  );
}

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initialContactState);
  const [pending, setPending] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const next = validateContact(formData);
    if (!next.ok) {
      setState(next);
      return;
    }

    setPending(true);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Lean Create inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setState(next);
    setPending(false);
  }

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-cream p-8 md:p-10">
        <h3 className="text-xl font-bold text-charcoal">Message sent.</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-cream p-8 md:p-10">
      <div className="space-y-5">
        <Field label="Name" name="name" required error={state.errors?.name} />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={state.errors?.email}
        />
        <Field label="Organization (Optional)" name="organization" />
        <Field
          label="Describe your challenge."
          name="message"
          required
          textarea
          placeholder="Message here"
          error={state.errors?.message}
        />
      </div>
      {state.message && !state.ok ? (
        <p className="mt-4 text-sm text-orange">{state.message}</p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" variant="orange" arrow disabled={pending}>
          {pending ? "Sending..." : "Submit Now"}
        </Button>
      </div>
    </form>
  );
}
