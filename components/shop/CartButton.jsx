"use client";

import Link from "next/link";
import { useCart } from "../../lib/cart";
import { cartTotals } from "../../lib/products";

/* Header cart icon with the number of items in the cart */
export default function CartButton() {
  const { count } = cartTotals(useCart());
  return (
    <Link href="/cart" className="btn btn--secondary btn--icon header__cart" aria-label={count ? `Cart, ${count} item${count > 1 ? "s" : ""}` : "Cart"}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" /><circle cx="9.5" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></svg>
      {count > 0 && <span className="header__cart-count" aria-hidden="true">{count > 9 ? "9+" : count}</span>}
    </Link>
  );
}
