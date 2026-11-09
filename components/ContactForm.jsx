"use client";

import { useState } from "react";
import { STATES } from "../lib/checkout";

/* Contact Us form with tabs: General Enquiry / Get a Quote / Request a Demo.
   "Get a Quote" and "Request a Demo" ask for exactly the same details as the site pop-up
   (components/DemoModal.jsx) and send the same WhatsApp message.
   There is no mail server yet, so Submit opens WhatsApp with the details filled in. */

const WHATSAPP = "919446697551";
const MAX = 1000;
const BLANK = { name: "", phone: "", email: "", company: "", org: "", state: "", subject: "", message: "" };

const TABS = [
  { key: "general", label: "General Enquiry", fields: ["name", "phone", "email", "company", "subject", "message"] },
  { key: "quote", label: "Get a Quote", fields: ["name", "phone", "email", "message"] },
  { key: "demo", label: "Request a Demo", fields: ["name", "phone", "email", "org", "state"] },
];

const LABEL = {
  name: "Full Name", phone: "Phone", email: "Email", company: "Company", org: "Organization",
  state: "State", subject: "Subject", message: "Tell Us More",
};
const PLACEHOLDER = {
  name: "Enter full name", phone: "Enter 10-digit mobile number", email: "Enter email", company: "Enter your company name",
  org: "Hospital, clinic or organization", subject: "Enter your subject", message: "Message",
};
const HALF = ["name", "phone", "email", "company", "org", "state"];
const OPTIONAL = { quote: ["message"] }; // the pop-up's quote message is optional

function validate(f, tab) {
  const v = {
    name: f.name.trim().replace(/\s+/g, " "),
    phone: f.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""),
    email: f.email.trim().toLowerCase(),
    company: f.company.trim(),
    org: f.org.trim().replace(/\s+/g, " "),
    state: f.state,
    subject: f.subject.trim(),
    message: f.message.trim(),
  };
  const has = (k) => tab.fields.includes(k);
  const e = {};
  if (v.name.length < 2) e.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "Enter a 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email address.";
  if (has("company") && !v.company) e.company = "Enter your company.";
  if (has("org") && v.org.length < 2) e.org = "Enter your hospital, clinic or organization.";
  if (has("state") && !STATES.includes(v.state)) e.state = "Choose your state.";
  if (has("subject") && !v.subject) e.subject = "Enter a subject.";
  if (has("message") && !(OPTIONAL[tab.key] || []).includes("message") && !v.message) e.message = "Tell us a little more.";
  return { v, e };
}

function whatsappText(v, tab) {
  if (tab.key === "general") {
    return [`Hello Sascan Meditech, ${v.subject}`, "", `Name: ${v.name}`, `Phone: +91 ${v.phone}`, `Email: ${v.email}`, `Company: ${v.company}`, "", v.message];
  }
  // same wording as the pop-up (DemoModal)
  const intro = tab.key === "quote"
    ? "Hello Sascan Meditech, I would like a quote."
    : "Hello Sascan Meditech, I would like to request a demo.";
  const lines = [intro, "", `Name: ${v.name}`, `Phone: +91 ${v.phone}`, `Email: ${v.email}`];
  if (tab.key === "demo") lines.push(`Organization: ${v.org}`, `State: ${v.state}`);
  if (tab.key === "quote" && v.message) lines.push(`Message: ${v.message}`);
  return lines;
}

const DONE = {
  general: "Your message is ready in WhatsApp — press send there and we will be in touch shortly.",
  quote: "Your quote request is ready in WhatsApp — press send there and our team will get back to you with the price details.",
  demo: "Your request is ready in WhatsApp — press send there and our team will get in touch to schedule your demo.",
};

export default function ContactForm() {
  const [tabKey, setTabKey] = useState("general");
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const tab = TABS.find((t) => t.key === tabKey);

  const submit = (ev) => {
    ev.preventDefault();
    const { v, e } = validate(form, tab);
    if (Object.keys(e).length) {
      setErrors(e);
      ev.currentTarget.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const text = whatsappText(v, tab).join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    setForm(BLANK);
  };

  const field = (key) => {
    const optional = (OPTIONAL[tab.key] || []).includes(key);
    const common = {
      id: `ct-${key}`,
      name: key,
      value: form[key],
      "aria-invalid": errors[key] ? "true" : undefined,
      "aria-describedby": errors[key] ? `ct-${key}-err` : undefined,
      onChange: (e) => {
        setForm((s) => ({ ...s, [key]: e.target.value }));
        if (errors[key]) setErrors((s) => ({ ...s, [key]: undefined }));
      },
    };
    let control;
    if (key === "message") {
      control = <textarea rows={5} maxLength={MAX} placeholder={PLACEHOLDER.message} {...common} />;
    } else if (key === "state") {
      control = (
        <select className={form.state ? "" : "is-empty"} autoComplete="address-level1" {...common}>
          <option value="" disabled>Select state</option>
          {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      );
    } else {
      const type = key === "email" ? "email" : key === "phone" ? "tel" : "text";
      const auto = { name: "name", phone: "tel", email: "email", company: "organization", org: "organization" }[key];
      control = (
        <input
          type={type}
          inputMode={key === "phone" ? "tel" : undefined}
          maxLength={key === "phone" ? 16 : undefined}
          autoComplete={auto}
          placeholder={PLACEHOLDER[key]}
          {...common}
        />
      );
    }
    return (
      <div key={key} className={`ct-field${HALF.includes(key) ? " ct-field--half" : ""}`}>
        <div className="ct-field__top">
          <label htmlFor={`ct-${key}`}>{LABEL[key]}{optional ? " (optional)" : "*"}</label>
          {key === "message" && <span className="ct-field__count">{form.message.length}/ {MAX}</span>}
        </div>
        {control}
        {errors[key] && <p className="ct-field__err" id={`ct-${key}-err`}>{errors[key]}</p>}
      </div>
    );
  };

  return (
    <div className="ct-formbox">
      <div className="ct-tabs" role="tablist" aria-label="Enquiry type">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={t.key === tabKey}
            className={`ct-tab${t.key === tabKey ? " is-active" : ""}`}
            onClick={() => { setTabKey(t.key); setErrors({}); setSent(false); }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {sent ? (
        <div className="ct-done" role="status">
          <span className="ct-done__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
          <p>{DONE[tab.key]}</p>
          <button type="button" className="btn btn--secondary" onClick={() => setSent(false)}>Send another message</button>
        </div>
      ) : (
        <form className="ct-form" onSubmit={submit} noValidate>
          {tab.fields.map(field)}
          <div className="ct-form__foot">
            <button type="submit" className="btn btn--primary ct-form__send">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
