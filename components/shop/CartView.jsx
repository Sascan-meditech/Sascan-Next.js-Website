"use client";

import Link from "next/link";
import { useCart, useCoupon, setQty, removeItem } from "../../lib/cart";
import { PRODUCTS, cartTotals, formatINR } from "../../lib/products";
import QtyStepper from "./QtyStepper";
import OrderSummary from "./OrderSummary";
import { CaretLeft, ShoppingCart, Trash } from "@phosphor-icons/react/dist/ssr";

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
        <span className="shop-empty__icon"><ShoppingCart weight="regular" className="pi" aria-hidden="true" /></span>
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
                    <Trash weight="regular" className="pi" aria-hidden="true" />
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
          <CaretLeft weight="regular" className="pi" aria-hidden="true" />
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
