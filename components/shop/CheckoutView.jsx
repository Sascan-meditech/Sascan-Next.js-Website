"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useCart, useCoupon } from "../../lib/cart";
import { PRODUCTS, cartTotals, formatINR } from "../../lib/products";
import { STATES, validateCustomer } from "../../lib/checkout";
import OrderSummary from "./OrderSummary";

const WHATSAPP = "919446697551";
const BLANK = { name: "", phone: "", email: "", address1: "", address2: "", city: "", state: "Kerala", pin: "", notes: "" };

function Field({ id, label, error, optional, wide, children }) {
  return (
    <div className={`co-field${wide ? " co-field--wide" : ""}${error ? " has-error" : ""}`}>
      <label htmlFor={`co-${id}`}>{label}{optional && <span className="co-opt"> (optional)</span>}</label>
      {children}
      {error && <p className="co-err" id={`co-${id}-err`}>{error}</p>}
    </div>
  );
}

export default function CheckoutView() {
  const items = useCart();
  const totals = cartTotals(items, useCoupon());
  const [form, setForm] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(null); // validated details, set when "Pay" is pressed
  const formRef = useRef(null);

  const bind = (key) => ({
    id: `co-${key}`,
    name: key,
    value: form[key],
    onChange: (e) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
      setReady(null);
    },
    "aria-invalid": errors[key] ? "true" : undefined,
    "aria-describedby": errors[key] ? `co-${key}-err` : undefined,
  });

  if (!items.length) {
    return (
      <div className="shop-empty">
        <span className="shop-empty__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></svg></span>
        <h2 className="shop-empty__title">Your cart is empty</h2>
        <p className="shop-empty__text">Add a product before checking out.</p>
        <Link href="/curelite" className="btn btn--primary shop-btn">Shop CureLite</Link>
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    const { value, errors: errs } = validateCustomer(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setReady(null);
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    // Online payment (Razorpay) is connected in a later step. Until then the validated order can be sent on WhatsApp.
    setReady(value);
  };

  const waLink = (c) => {
    const lines = items.map((it) => `• ${PRODUCTS[it.id].name} × ${it.qty} — ${formatINR(PRODUCTS[it.id].price * it.qty)}`).join("\n");
    const text = [
      "Hello Sascan Meditech, I would like to place this order:",
      lines,
      totals.coupon ? `Coupon: ${totals.coupon.code} (−${formatINR(totals.discount)})` : "",
      `Total: ${formatINR(totals.total)}`,
      "",
      `Name: ${c.name}`,
      `Mobile: +91 ${c.phone}`,
      `Email: ${c.email}`,
      `Address: ${[c.address1, c.address2, c.city, `${c.state} ${c.pin}`].filter(Boolean).join(", ")}`,
      c.notes ? `Notes: ${c.notes}` : "",
    ].filter((l) => l !== "").join("\n");
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  return (
    <form className="shop-layout shop-layout--checkout" onSubmit={submit} noValidate ref={formRef}>
      <div className="shop-main">
        <fieldset className="co-card">
          <legend className="co-card__title"><span className="co-step">1</span>Contact details</legend>
          <div className="co-grid">
            <Field id="name" label="Full name" error={errors.name} wide><input type="text" autoComplete="name" {...bind("name")} /></Field>
            <Field id="phone" label="Mobile number" error={errors.phone}>
              <div className="co-prefix"><span>+91</span><input type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={14} {...bind("phone")} /></div>
            </Field>
            <Field id="email" label="Email" error={errors.email}><input type="email" autoComplete="email" {...bind("email")} /></Field>
          </div>
        </fieldset>

        <fieldset className="co-card">
          <legend className="co-card__title"><span className="co-step">2</span>Delivery address</legend>
          <div className="co-grid">
            <Field id="address1" label="House no., building, street" error={errors.address1} wide><input type="text" autoComplete="address-line1" {...bind("address1")} /></Field>
            <Field id="address2" label="Area, landmark" optional wide><input type="text" autoComplete="address-line2" {...bind("address2")} /></Field>
            <Field id="city" label="City / town" error={errors.city}><input type="text" autoComplete="address-level2" {...bind("city")} /></Field>
            <Field id="pin" label="PIN code" error={errors.pin}><input type="text" inputMode="numeric" autoComplete="postal-code" maxLength={6} {...bind("pin")} /></Field>
            <Field id="state" label="State" error={errors.state} wide>
              <select autoComplete="address-level1" {...bind("state")}>
                {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field id="notes" label="Order notes" optional wide><textarea rows={3} {...bind("notes")} /></Field>
          </div>
        </fieldset>

        <Link href="/cart" className="shop-back">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          Back to cart
        </Link>
      </div>

      <aside className="shop-side">
        <OrderSummary
          totals={totals}
          items={
            <ul className="sum__items">
              {items.map(({ id, qty }) => {
                const p = PRODUCTS[id];
                return (
                  <li key={id}>
                    <span className="sum__thumb"><img src={p.image} alt="" width="56" height="56" /><span className="sum__qty">{qty}</span></span>
                    <span className="sum__name">{p.name}</span>
                    <span className="sum__price">{formatINR(p.price * qty)}</span>
                  </li>
                );
              })}
            </ul>
          }
        >
          <button type="submit" className="btn btn--primary shop-btn shop-btn--block">Pay {formatINR(totals.total)}</button>
          {ready && (
            <div className="co-msg" role="status">
              <p>Online payment is coming soon. To order now, send these details to our team on WhatsApp.</p>
              <a className="btn btn--secondary shop-btn shop-btn--block" href={waLink(ready)} target="_blank" rel="noopener">Send order on WhatsApp</a>
            </div>
          )}
        </OrderSummary>
      </aside>
    </form>
  );
}
