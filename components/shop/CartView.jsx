"use client";

import Link from "next/link";
import { useCart, useCoupon, setQty, removeItem } from "../../lib/cart";
import { PRODUCTS, cartTotals, formatINR } from "../../lib/products";
import QtyStepper from "./QtyStepper";
import OrderSummary from "./OrderSummary";

function ProductLink({ p, className, children }) {
  return p.href.startsWith("/")
    ? <Link href={p.href} className={className}>{children}</Link>
    : <a href={p.href} className={className} target="_blank" rel="noopener">{children}</a>;
}

export default function CartView() {
  const items = useCart();
  const totals = cartTotals(items, useCoupon());

  if (!items.length) {
    return (
      <div className="shop-empty">
        <span className="shop-empty__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></svg></span>
        <h2 className="shop-empty__title">Your cart is empty</h2>
        <p className="shop-empty__text">Add a product to see it here.</p>
        <Link href="/curelite" className="btn btn--primary shop-btn">Shop CureLite</Link>
      </div>
    );
  }

  return (
    <div className="shop-layout shop-layout--checkout">
      <div className="shop-main">
        <ul className="cart-list">
          {items.map(({ id, qty }) => {
            const p = PRODUCTS[id];
            return (
              <li key={id} className="cart-item">
                <ProductLink p={p} className="cart-item__img">
                  <img src={p.image} alt={p.name} width="120" height="120" loading="lazy" decoding="async" />
                </ProductLink>
                <div className="cart-item__info">
                  <ProductLink p={p} className="cart-item__name">{p.name}</ProductLink>
                  <p className="cart-item__unit">{formatINR(p.price)} <del>{formatINR(p.mrp)}</del></p>
                  <button type="button" className="cart-item__remove" onClick={() => removeItem(id)}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
                    Remove
                  </button>
                </div>
                <QtyStepper value={qty} onChange={(n) => setQty(id, n)} label={`${p.name} quantity`} small />
                <p className="cart-item__total">{formatINR(p.price * qty)}</p>
              </li>
            );
          })}
        </ul>
        <Link href="/curelite" className="shop-back">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          Continue shopping
        </Link>
      </div>

      <aside className="shop-side">
        <OrderSummary totals={totals}>
          <Link href="/checkout" className="btn btn--primary shop-btn shop-btn--block">Proceed to checkout</Link>
        </OrderSummary>
      </aside>
    </div>
  );
}
