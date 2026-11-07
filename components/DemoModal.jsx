"use client";

import { useEffect, useRef, useState } from "react";
import { STATES } from "../lib/checkout";

/* "Request a demo" popup, available on every page.
   Open it from any link or button with href="#demo" or a data-demo attribute
   (data-demo="OralScan" also notes which product the request is about).
   There is no server yet, so Send opens WhatsApp with the details filled in. */

const WHATSAPP = "919446697551";
const BLANK = { name: "", phone: "", email: "", org: "", state: "" };

function validate(f) {
  const v = {
    name: f.name.trim().replace(/\s+/g, " "),
    phone: f.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""),
    email: f.email.trim().toLowerCase(),
    org: f.org.trim().replace(/\s+/g, " "),
    state: f.state,
  };
  const e = {};
  if (v.name.length < 2) e.name = "Enter your full name.";
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "Enter a 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.org.length < 2) e.org = "Enter your hospital, clinic or organization.";
  if (!STATES.includes(v.state)) e.state = "Choose your state.";
  return { v, e };
}

export default function DemoModal() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onClick = (ev) => {
      const t = ev.target.closest && ev.target.closest('[data-demo], a[href="#demo"], a[href="/#demo"]');
      if (!t) return;
      ev.preventDefault();
      setProduct(t.dataset.demo || "");
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
    const { v, e } = validate(form);
    if (Object.keys(e).length) {
      setErrors(e);
      formRef.current?.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    const text = [
      `Hello Sascan Meditech, I would like to request a demo${product ? ` of ${product}` : ""}.`,
      "",
      `Name: ${v.name}`,
      `Phone: +91 ${v.phone}`,
      `Email: ${v.email}`,
      `Organization: ${v.org}`,
      `State: ${v.state}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    setForm(BLANK);
  };

  const Err = ({ k }) => (errors[k] ? <p className="demo__err" id={`demo-${k}-err`}>{errors[k]}</p> : null);

  return (
    <dialog
      ref={ref}
      className="demo"
      aria-labelledby="demo-title"
      onClose={() => document.documentElement.classList.remove("demo-open")}
      onClick={(e) => { if (e.target === ref.current) close(); }}
    >
      <div className="demo__card">
        <span className="demo__shape" aria-hidden="true" />
        <button type="button" className="demo__close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        {sent ? (
          <div className="demo__done" role="status">
            <span className="demo__done-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <h2 className="demo__title" id="demo-title">Thank you!</h2>
            <p className="demo__lead">Your request is ready in WhatsApp — press send there and our team will get in touch to schedule your demo.</p>
            <button type="button" className="demo__send" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="demo__form" onSubmit={submit} noValidate ref={formRef}>
            <h2 className="demo__title" id="demo-title">Request a demo form</h2>
            {product && <p className="demo__product mono">{product}</p>}
            <div className="demo__field">
              <label className="sr-only" htmlFor="demo-name">Full Name</label>
              <input type="text" placeholder="Full Name" autoComplete="name" {...bind("name")} />
              <Err k="name" />
            </div>
            <div className="demo__field">
              <label className="sr-only" htmlFor="demo-phone">Phone</label>
              <input type="tel" inputMode="tel" placeholder="Phone" autoComplete="tel" maxLength={16} {...bind("phone")} />
              <Err k="phone" />
            </div>
            <div className="demo__field">
              <label className="sr-only" htmlFor="demo-email">Email</label>
              <input type="email" placeholder="Email" autoComplete="email" {...bind("email")} />
              <Err k="email" />
            </div>
            <div className="demo__field">
              <label className="sr-only" htmlFor="demo-org">Organization</label>
              <input type="text" placeholder="Organization" autoComplete="organization" {...bind("org")} />
              <Err k="org" />
            </div>
            <div className="demo__field">
              <label className="sr-only" htmlFor="demo-state">State</label>
              <select className={form.state ? "" : "is-empty"} autoComplete="address-level1" {...bind("state")}>
                <option value="" disabled>Select state</option>
                {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <Err k="state" />
            </div>
            <button type="submit" className="demo__send">
              Send
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
