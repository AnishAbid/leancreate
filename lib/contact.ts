export type ContactState = {
  ok: boolean;
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export const initialContactState: ContactState = {
  ok: false,
  message: "",
  errors: {},
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContact(formData: FormData): ContactState {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) {
    errors.message = "Tell us a little more about your challenge.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "", errors };
  }

  return {
    ok: true,
    message: "Thanks — we received your note and will be in touch shortly.",
    errors: {},
  };
}
