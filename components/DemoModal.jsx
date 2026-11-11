"use client";

import { useEffect, useRef, useState } from "react";
import { STATES } from "../lib/checkout";
import { ArrowRight, Buildings, ChatText, Check, EnvelopeSimple, MapPin, Phone, User, X } from "@phosphor-icons/react/dist/ssr";

/* Popup forms, available on every page:
   - "Request a demo": open with href="#demo" or a data-demo attribute
   - "Get a free quote": open with href="#quote" or a data-quote attribute
   data-demo="OralScan" / data-quote="OralScan" notes which product the request is about.
   There is no server yet, so Send opens WhatsApp with the details filled in. */

const WHATSAPP = "919446697551";
const BLANK = { name: "", phone: "", email: "", org: "", state: "", message: "" };

const FIELDS = {
  demo: ["name", "phone", "email", "org", "state"],
  quote: ["name", "phone", "email", "message"],
};

function validate(f, mode) {
  const v = {
    name: f.name.trim().replace(/\s+/g, " "),
    phone: f.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""),
    email: f.email.trim().toLowerCase(),
    org: f.org.trim().replace(/\s+/g, " "),
    state: f.state,
    message: f.message.trim(),
  };
  const e = {};
  if (v.name.length < 2) e.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "Enter a 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email address.";
  if (mode === "demo") {
    if (v.org.length < 2) e.org = "Enter your hospital, clinic or organization.";
    if (!STATES.includes(v.state)) e.state = "Choose your state.";
  }
  return { v, e };
}

export default function DemoModal() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [mode, setMode] = useState("demo");
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onClick = (ev) => {
      const t = ev.target.closest && ev.target.closest(
        '[data-demo], [data-quote], a[href="#demo"], a[href="/#demo"], a[href="#quote"], a[href="/#quote"]'
      );
      if (!t) return;
      ev.preventDefault();
      const isQuote = t.hasAttribute("data-quote") || /#quote$/.test(t.getAttribute("href") || "");
      setMode(isQuote ? "quote" : "demo");
      setProduct((isQuote ? t.dataset.quote : t.dataset.demo) || "");
      setErrors({});
      setSent(false);
      const d = ref.current;
      if (d && !d.open) {
        d.showModal();
        document.documentElement.classList.add("demo-open");
        setTimeout(() => formRef.current?.querySelector("input")?.focus(), 60);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = () => ref.current?.close();

  const bind = (key) => ({
    id: `demo-${key}`,
    name: key,
    value: form[key],
    onChange: (e) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    },
    "aria-invalid": errors[key] ? "true" : undefined,
    "aria-describedby": errors[key] ? `demo-${key}-err` : undefined,
  });

  const submit = (ev) => {
    ev.preventDefault();
    const { v, e } = validate(form, mode);
    if (Object.keys(e).length) {
      setErrors(e);
      formRef.current?.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const intro = mode === "quote"
      ? `Hello Sascan Meditech, I would like a quote${product ? ` for ${product}` : ""}.`
      : `Hello Sascan Meditech, I would like to request a demo${product ? ` of ${product}` : ""}.`;
    const lines = [intro, "", `Name: ${v.name}`, `Phone: +91 ${v.phone}`, `Email: ${v.email}`];
    if (mode === "demo") lines.push(`Organization: ${v.org}`, `State: ${v.state}`);
    if (mode === "quote" && v.message) lines.push(`Message: ${v.message}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
    setForm(BLANK);
  };

  const Err = ({ k }) => (errors[k] ? <p className="demo__err" id={`demo-${k}-err`}>{errors[k]}</p> : null);

  const title = mode === "quote" ? `${product ? `${product} ` : ""}Product Quote Request form` : "Request a demo form";
  const show = (k) => FIELDS[mode].includes(k);

  const ICON = {
    name: <User weight="light" className="pi" aria-hidden="true" />,
    phone: <Phone weight="light" className="pi" aria-hidden="true" />,
    email: <EnvelopeSimple weight="light" className="pi" aria-hidden="true" />,
    org: <Buildings weight="light" className="pi" aria-hidden="true" />,
    state: <MapPin weight="light" className="pi" aria-hidden="true" />,
    message: <ChatText weight="light" className="pi" aria-hidden="true" />,
  };
  const Icon = ({ k }) => <span className="demo__icon" aria-hidden="true">{ICON[k]}</span>;

  return (
    <dialog
      ref={ref}
      className="demo"
      aria-labelledby="demo-title"
      onClose={() => document.documentElement.classList.remove("demo-open")}
      onClick={(e) => { if (e.target === ref.current) close(); }}
    >
      <div className="demo__panel">
        <header className="demo__head">
          <div>
            <p className="demo__eyebrow mono">{mode === "quote" ? "Get a free quote" : "Request a demo"}{product ? ` · ${product}` : ""}</p>
            <h2 className="demo__title" id="demo-title">{sent ? "Thank you!" : title}</h2>
          </div>
          <button type="button" className="demo__close" onClick={close} aria-label="Close">
            <X weight="regular" className="pi" aria-hidden="true" />
          </button>
        </header>

        {sent ? (
          <div className="demo__done" role="status">
            <span className="demo__done-icon"><Check weight="regular" className="pi" aria-hidden="true" /></span>
            <p className="demo__lead">
              {mode === "quote"
                ? "Your quote request is ready in WhatsApp — press send there and our team will get back to you with the price details."
                : "Your request is ready in WhatsApp — press send there and our team will get in touch to schedule your demo."}
            </p>
            <button type="button" className="demo__send" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="demo__form" onSubmit={submit} noValidate ref={formRef}>
            <div className="demo__body">
              <div className="demo__field">
                <Icon k="name" />
                <label className="sr-only" htmlFor="demo-name">Full Name</label>
                <input type="text" placeholder="Full Name" autoComplete="name" {...bind("name")} />
                <Err k="name" />
              </div>
              <div className="demo__field">
                <Icon k="phone" />
                <label className="sr-only" htmlFor="demo-phone">Phone</label>
                <input type="tel" inputMode="tel" placeholder="Phone" autoComplete="tel" maxLength={16} {...bind("phone")} />
                <Err k="phone" />
              </div>
              <div className="demo__field">
                <Icon k="email" />
                <label className="sr-only" htmlFor="demo-email">Email</label>
                <input type="email" placeholder="Email" autoComplete="email" {...bind("email")} />
                <Err k="email" />
              </div>
              {show("org") && (
                <div className="demo__field">
                  <Icon k="org" />
                  <label className="sr-only" htmlFor="demo-org">Organization</label>
                  <input type="text" placeholder="Organization" autoComplete="organization" {...bind("org")} />
                  <Err k="org" />
                </div>
              )}
              {show("state") && (
                <div className="demo__field">
                  <Icon k="state" />
                  <label className="sr-only" htmlFor="demo-state">State</label>
                  <select className={form.state ? "" : "is-empty"} autoComplete="address-level1" {...bind("state")}>
                    <option value="" disabled>Select state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <Err k="state" />
                </div>
              )}
              {show("message") && (
                <div className="demo__field demo__field--area">
                  <Icon k="message" />
                  <label className="sr-only" htmlFor="demo-message">Message</label>
                  <textarea rows={4} placeholder="Message" {...bind("message")} />
                </div>
              )}
            </div>
            <div className="demo__foot">
              <button type="submit" className="demo__send">
                Send
                <ArrowRight weight="regular" className="pi" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
