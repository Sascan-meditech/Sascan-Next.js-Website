import { formatINR } from "../../lib/products";
import CouponBox from "./CouponBox";

/* Totals card used by the cart and checkout pages. `children` goes under the total (buttons). */
export default function OrderSummary({ totals, items = null, children }) {
  return (
    <div className="sum">
      <h2 className="sum__title">Order summary</h2>
      {items}
      <CouponBox totals={totals} />
      <dl className="sum__rows">
        <div><dt>Subtotal ({totals.count} item{totals.count === 1 ? "" : "s"})</dt><dd>{formatINR(totals.subtotal)}</dd></div>
        {totals.savings > 0 && <div className="sum__save"><dt>You save</dt><dd>−{formatINR(totals.savings)}</dd></div>}
        {totals.coupon && <div className="sum__save"><dt>Coupon ({totals.coupon.code})</dt><dd>−{formatINR(totals.discount)}</dd></div>}
        <div><dt>Shipping</dt><dd>{totals.shipping ? formatINR(totals.shipping) : "Free"}</dd></div>
        <div className="sum__total"><dt>Total</dt><dd>{formatINR(totals.total)}</dd></div>
      </dl>
      {children}
      <ul className="sum__trust">
        <li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Secure Payment</li>
        <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6h11v9H2zM13 9h4l3 3v3h-7" /><circle cx="6" cy="17.5" r="1.6" /><circle cx="16.5" cy="17.5" r="1.6" /></svg>Free shipping across India</li>
      </ul>
    </div>
  );
}
