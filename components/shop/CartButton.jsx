"use client";

import Link from "next/link";
import { useCart } from "../../lib/cart";
import { cartTotals } from "../../lib/products";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

/* Header cart icon with the number of items in the cart */
export default function CartButton() {
  const { count } = cartTotals(useCart());
  return (
    <Link href="/cart" className="btn btn--secondary btn--icon header__cart" aria-label={count ? `Cart, ${count} item${count > 1 ? "s" : ""}` : "Cart"}>
      <ShoppingCart weight="regular" className="pi" aria-hidden="true" />
      {count > 0 && <span className="header__cart-count" aria-hidden="true">{count > 9 ? "9+" : count}</span>}
    </Link>
  );
}
