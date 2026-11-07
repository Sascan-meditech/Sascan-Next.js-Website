"use client";

import { useState } from "react";
import { setCoupon } from "../../lib/cart";
import { checkCoupon, formatINR } from "../../lib/products";

/* "Apply coupon" field for the order summary. `totals` comes from cartTotals(items, couponCode). */
export default function CouponBox({ totals }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  if (totals.coupon) {
    return (
      <div className="coupon coupon--on">
        <span className="coupon__tag">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.3" /></svg>
          <span><strong>{totals.coupon.code}</strong> applied · {totals.coupon.label}</span>
        </span>
        <button type="button" className="coupon__remove" onClick={() => setCoupon("")}>Remove</button>
        <p className="coupon__saved">You saved {formatINR(totals.discount)} with this coupon.</p>
      </div>
    );
  }

  const apply = () => {
    const res = checkCoupon(code, totals.items);
    if (res.error) {
      setError(res.error);
      return;
    }
    setError("");
    setCode("");
    setCoupon(res.coupon.code);
  };

  return (
    <div className="coupon">
      <button type="button" className="coupon__toggle" aria-expanded={open} aria-controls="coupon-form" onClick={() => setOpen((o) => !o)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.3" /></svg>
        Have a coupon code?
        <svg className="coupon__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div className="coupon__form" id="coupon-form">
          <div className="coupon__row">
            <label className="sr-only" htmlFor="coupon-code">Coupon code</label>
            <input
              id="coupon-code"
              type="text"
              placeholder="Enter coupon code"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              value={code}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={error ? "coupon-err" : undefined}
              onChange={(e) => { setCode(e.target.value); setError(""); }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); apply(); } }}
            />
            <button type="button" className="btn btn--secondary coupon__apply" onClick={apply}>Apply</button>
          </div>
          {error && <p className="coupon__err" id="coupon-err" role="alert">{error}</p>}
        </div>
      )}
      {totals.couponError && !error && <p className="coupon__err">{totals.couponError}</p>}
    </div>
  );
}
