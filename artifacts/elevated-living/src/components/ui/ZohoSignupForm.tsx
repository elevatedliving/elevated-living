import { FormEvent } from "react";

const ZOHO_FORM_ID = "webform991504000000658317";

function validateSignupForm(form: HTMLFormElement) {
  const requiredFields = ["First Name", "Last Name", "Email"];

  for (const fieldName of requiredFields) {
    const field = form.elements.namedItem(fieldName) as HTMLInputElement | null;
    if (!field || !field.value.trim()) {
      window.alert(`${fieldName} cannot be empty`);
      field?.focus();
      return false;
    }
  }

  const email = form.elements.namedItem("Email") as HTMLInputElement;
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
    window.alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  const privacy = form.elements.namedItem("privacyTool991504000000658317") as HTMLInputElement | null;
  if (!privacy?.checked) {
    window.alert("Please accept the email updates consent.");
    privacy?.focus();
    return false;
  }

  return true;
}

export function ZohoSignupForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!validateSignupForm(event.currentTarget)) {
      event.preventDefault();
      return;
    }

    const submit = event.currentTarget.elements.namedItem("formsubmit") as HTMLInputElement | null;
    if (submit) submit.disabled = true;
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      <form
        id={ZOHO_FORM_ID}
        action="https://crm.zoho.eu/crm/WebToLeadForm"
        name="WebToLeads991504000000658317"
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
        className="grid gap-5 md:grid-cols-2"
      >
        <input type="hidden" name="xnQsjsdp" value="be8f1eff89211a22631ab23f490f103f1c9e97fb02421590cb2a1a48359aae66" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="5af9a9ed33424ca243bd1cf006a441ee47e13380df7c7fc52b9a551fd4e34c83cc32069a2ba30cc48689c0718691dcc4" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />
        <input type="hidden" name="aG9uZXlwb3Q" value="" />

        <SignupField id="First_Name" name="First Name" label="First Name" required />
        <SignupField id="Last_Name" name="Last Name" label="Last Name" required />
        <SignupField id="Email" name="Email" label="Email" type="email" required />
        <SignupField id="Phone" name="Phone" label="Phone" />
        <SignupField id="Company" name="Company" label="Company" />
        <SignupField id="Website" name="Website" label="Website" />

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              id="privacyTool991504000000658317"
              type="checkbox"
              name="privacyTool991504000000658317"
              className="mt-1 h-4 w-4 shrink-0 accent-primary"
            />
            <span>
              By signing up, you agree to receive email updates from Elevated Living Enterprise Limited.
              Your name and email are used to send you these emails; any phone number, website or company
              details you provide help us understand our audience but are never sold or shared with third
              parties. You can unsubscribe at any time via the link in every email. See our full privacy
              policy at <a href="/privacy" className="text-primary underline underline-offset-2">elevatedliving.uk/privacy</a>.
              <span className="mt-1 block">ICO ZB668763</span>
            </span>
          </label>
        </div>

        <div className="flex flex-wrap gap-3 md:col-span-2">
          <input
            type="submit"
            id="formsubmit"
            name="formsubmit"
            value="Sign up"
            aria-label="Sign up"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          />
          <input
            type="reset"
            value="Clear"
            aria-label="Clear form"
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          />
        </div>
      </form>
    </div>
  );
}

function SignupField({
  id,
  name,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        maxLength={type === "email" ? 100 : undefined}
        className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}