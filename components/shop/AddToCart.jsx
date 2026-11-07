"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addItem } from "../../lib/cart";
import QtyStepper from "./QtyStepper";

const CartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></svg>
);

/* Product page: quantity + Add to cart + Buy now.
   compact: a single small "Add to cart" button (related product cards). */
export default function AddToCart({ productId, name, compact = false }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const add = () => {
    addItem(productId, compact ? 1 : qty);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), compact ? 2000 : 6000);
  };

  if (compact) {
    return (
      <button type="button" className={`cl-mini-add${added ? " is-added" : ""}`} onClick={add} aria-label={`Add ${name} to cart`}>
        {added ? (
          <><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Added</>
        ) : (
          <><CartIcon />Add to cart</>
        )}
      </button>
    );
  }

  return (
    <div className="cl-buyrow">
      <div className="cl-cart">
        <QtyStepper value={qty} onChange={setQty} label={`${name} quantity`} />
        <button type="button" className="btn btn--primary cl-cart__btn" onClick={add}>
          <CartIcon />
          Add to cart
        </button>
        <button
          type="button"
          className="btn cl-buynow"
          onClick={() => {
            addItem(productId, qty);
            router.push("/checkout");
          }}
        >
          Buy now
        </button>
      </div>
      <p className={`cl-added${added ? " is-on" : ""}`} role="status">
        {added && (
          <>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            Added to your cart. <Link href="/cart">View cart</Link>
          </>
        )}
      </p>
    </div>
  );
}
