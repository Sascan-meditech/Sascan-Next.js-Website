"use client";

import { useEffect, useRef, useState } from "react";
import { STATES } from "../lib/checkout";
import { DEPARTMENTS, CAREERS_EMAIL } from "../lib/careers";

/* "Apply now" pop-up for the Careers page.
   Opens from any element with data-apply-role (and data-apply-dept).
   There is no upload server yet, so Submit opens an email to the careers address with every
   detail filled in, and asks the applicant to attach the resume they picked before sending. */

const MAX = 1000;
const MAX_FILE = 10 * 1024 * 1024; // 10 MB
const FILE_TYPES = [".pdf", ".png", ".jpeg", ".jpg", ".docx"];
const BLANK = {
  first: "", last: "", email: "", phone: "", country: "India", state: "", place: "",
  dept: "", role: "", years: "", info: "", consent: false,
};

function validate(f, file) {
  const v = {
    ...f,
    first: f.first.trim().replace(/\s+/g, " "),
    last: f.last.trim().replace(/\s+/g, " "),
    email: f.email.trim().toLowerCase(),
    phone: f.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""),
    place: f.place.trim(),
    years: f.years.trim(),
    info: f.info.trim(),
  };
  const e = {};
  if (v.first.length < 2) e.first = "Enter your first name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "Enter a 10-digit mobile number.";
  if (!v.dept) e.dept = "Choose what you are applying for.";
  if (v.years && !/^\d{1,2}(\.\d)?$/.test(v.years)) e.years = "Enter years as a number, e.g. 3.";
  if (!file) e.file = "Add your resume.";
  else if (!FILE_TYPES.some((t) => file.name.toLowerCase().endsWith(t))) e.file = "Use a pdf, png, jpeg or docx file.";
  else if (file.size > MAX_FILE) e.file = "The file is larger than 10 MB.";
  if (!v.consent) e.consent = "Please confirm to continue.";
  return { v, e };
}

export default function ApplyModal() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [form, setForm] = useState(BLANK);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  useEffect(() => {
    const onClick = (ev) => {
      const t = ev.target.closest && ev.target.closest("[data-apply-role]");
      if (!t) return;
      ev.preventDefault();
      setForm({ ...BLANK, dept: t.dataset.applyDept || "", role: t.dataset.applyRole || "" });
      setFile(null);
      setErrors({});
      setSent(null);
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
  const roles = (DEPARTMENTS.find((d) => d.name === form.dept)?.roles || []).map((r) => r.title);

  const set = (key, value) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "dept") next.role = ""; // designation list depends on the department
      return next;
    });
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const bind = (key) => ({
    id: `ap-${key}`,
    name: key,
    value: form[key],
    onChange: (e) => set(key, e.target.value),
    "aria-invalid": errors[key] ? "true" : undefined,
    "aria-describedby": errors[key] ? `ap-${key}-err` : undefined,
  });

  const Err = ({ k }) => (errors[k] ? <p className="ct-field__err" id={`ap-${k}-err`}>{errors[k]}</p> : null);

  const submit = (ev) => {
    ev.preventDefault();
    const { v, e } = validate(form, file);
    if (Object.keys(e).length) {
      setErrors(e);
      const first = Object.keys(e)[0];
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    const position = v.role || v.dept;
    const lines = [
      "Hello Sascan Meditech,",
      "",
      `I would like to apply for ${position}.`,
      "",
      `Name: ${[v.first, v.last].filter(Boolean).join(" ")}`,
      `Email: ${v.email}`,
      `Phone: +91 ${v.phone}`,
      `Country: ${v.country}`,
    ];
    if (v.state) lines.push(`State: ${v.state}`);
    if (v.place) lines.push(`Place: ${v.place}`);
    lines.push(`Applying for: ${v.dept}`);
    if (v.role) lines.push(`Designation: ${v.role}`);
    if (v.years) lines.push(`Years of experience: ${v.years}`);
    if (v.info) lines.push("", `Additional information: ${v.info}`);
    lines.push("", `Resume: ${file.name} (attached)`);
    const subject = `Application – ${position}`;
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(file.name);
  };

  return (
    <dialog
      ref={ref}
      className="demo demo--wide"
      aria-labelledby="apply-title"
      onClose={() => document.documentElement.classList.remove("demo-open")}
      onClick={(e) => { if (e.target === ref.current) close(); }}
    >
      <div className="demo__panel">
        <header className="demo__head">
          <div>
            <p className="demo__eyebrow mono">Apply now{form.role ? ` · ${form.role}` : form.dept ? ` · ${form.dept}` : ""}</p>
            <h2 className="demo__title" id="apply-title">{sent ? "Almost done!" : "We See You, Not Your CV!"}</h2>
          </div>
          <button type="button" className="demo__close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>

        {sent ? (
          <div className="demo__done" role="status">
            <span className="demo__done-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
            <p className="demo__lead">
              Your application email to <strong>{CAREERS_EMAIL}</strong> is ready in your email app.
              Please attach your resume (<strong>{sent}</strong>) and press send.
            </p>
            <button type="button" className="demo__send" onClick={close}>Close</button>
          </div>
        ) : (
          <form className="demo__form" onSubmit={submit} noValidate ref={formRef}>
            <div className="demo__body">
              <div className="ct-form ap-form">
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-first">First Name*</label></div>
                  <input type="text" placeholder="Enter first name" autoComplete="given-name" {...bind("first")} />
                  <Err k="first" />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-last">Last Name</label></div>
                  <input type="text" placeholder="Enter last name" autoComplete="family-name" {...bind("last")} />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-email">Email*</label></div>
                  <input type="email" placeholder="Enter email" autoComplete="email" {...bind("email")} />
                  <Err k="email" />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-phone">Phone Number*</label></div>
                  <div className="ap-phone">
                    <span className="ap-phone__code">+91</span>
                    <input type="tel" inputMode="tel" maxLength={16} placeholder="Phone number" autoComplete="tel-national" {...bind("phone")} />
                  </div>
                  <Err k="phone" />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-country">Country</label></div>
                  <select autoComplete="country-name" {...bind("country")}>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-state">State</label></div>
                  <select className={form.state ? "" : "is-empty"} autoComplete="address-level1" {...bind("state")}>
                    <option value="">Select state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="ct-field">
                  <div className="ct-field__top"><label htmlFor="ap-place">Place</label></div>
                  <input type="text" placeholder="Enter your place" autoComplete="address-level2" {...bind("place")} />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-dept">Applying For*</label></div>
                  <select className={form.dept ? "" : "is-empty"} {...bind("dept")}>
                    <option value="">Select department</option>
                    {DEPARTMENTS.map((d) => <option key={d.name} value={d.name}>{d.name}</option>)}
                  </select>
                  <Err k="dept" />
                </div>
                <div className="ct-field ct-field--half">
                  <div className="ct-field__top"><label htmlFor="ap-role">Designation</label></div>
                  <select className={form.role ? "" : "is-empty"} disabled={!roles.length} {...bind("role")}>
                    <option value="">Select designation</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="ct-field">
                  <div className="ct-field__top"><label htmlFor="ap-years">Years of Experience</label></div>
                  <input type="text" inputMode="decimal" placeholder="Enter years of experience" {...bind("years")} />
                  <Err k="years" />
                </div>
                <div className="ct-field">
                  <div className="ct-field__top">
                    <label htmlFor="ap-info">Additional information</label>
                    <span className="ct-field__count">{form.info.length}/ {MAX}</span>
                  </div>
                  <textarea rows={4} maxLength={MAX} placeholder="Enter message" {...bind("info")} />
                </div>
                <div className="ct-field">
                  <div className="ct-field__top"><span className="ap-file__label">Add an attachment*</span></div>
                  <label className={`ap-file${errors.file ? " is-invalid" : ""}`} htmlFor="ap-file">
                    <input
                      id="ap-file"
                      name="file"
                      type="file"
                      accept={FILE_TYPES.join(",")}
                      onChange={(e) => { setFile(e.target.files?.[0] || null); if (errors.file) setErrors((er) => ({ ...er, file: undefined })); }}
                      aria-describedby="ap-file-hint"
                    />
                    <span className="ap-file__btn">Choose file</span>
                    <span className="ap-file__name">{file ? file.name : "No file chosen"}</span>
                  </label>
                  <p className="ap-file__hint" id="ap-file-hint">Max. 10 MB. (Type: pdf, png, jpeg, docx)</p>
                  {errors.file && <p className="ct-field__err">{errors.file}</p>}
                </div>
                <div className="ct-field">
                  <label className="ap-consent">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} />
                    <span>I have read the privacy policy and consent to the processing of my data for the purpose of handling my enquiry</span>
                  </label>
                  <Err k="consent" />
                </div>
              </div>
            </div>
            <div className="demo__foot">
              <button type="submit" className="demo__send">Submit</button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
