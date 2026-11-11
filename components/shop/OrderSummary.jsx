import { formatINR } from "../../lib/products";
import CouponBox from "./CouponBox";
import { Lock, Truck } from "@phosphor-icons/react/dist/ssr";

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
        <li><Lock weight="light" className="pi" aria-hidden="true" />Secure Payment</li>
        <li><Truck weight="light" className="pi" aria-hidden="true" />Free shipping across India</li>
      </ul>
    </div>
  );
}
