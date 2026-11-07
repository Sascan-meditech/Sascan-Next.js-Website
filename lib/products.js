/* Products sold online. Prices are in rupees and are the single source of truth:
   the payment server re-prices every order from this list, so prices sent by a browser are never trusted. */
export const PRODUCTS = {
  curelite: {
    id: "curelite",
    name: "CureLite",
    price: 15999,
    mrp: 28000,
    image: "/assets/curelite/curelite-1.webp",
    href: "/curelite",
  },
  "curelaze-watch": {
    id: "curelaze-watch",
    name: "CureLaze Watch",
    price: 17999,
    mrp: 29999,
    image: "/assets/curelaze/curelaze-1.webp",
    href: "/curelaze",
  },
  curewrap: {
    id: "curewrap",
    name: "CureWrap",
    price: 14999,
    mrp: 25000,
    image: "/assets/curewrap/curewrap-1.webp",
    href: "/curewrap",
  },
};

export const MAX_QTY = 10;
export const SHIPPING = 0; // free shipping across India

export const formatINR = (n) =>
  "₹" + Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* Keeps only known products with a whole quantity from 1 to MAX_QTY. */
export function cleanItems(items) {
  if (!Array.isArray(items)) return [];
  const seen = new Map();
  for (const it of items) {
    const id = it && typeof it.id === "string" ? it.id : null;
    const qty = Math.floor(Number(it && it.qty));
    if (!id || !PRODUCTS[id] || !(qty >= 1)) continue;
    seen.set(id, Math.min(MAX_QTY, (seen.get(id) || 0) + qty));
  }
  return [...seen].map(([id, qty]) => ({ id, qty }));
}

/* Coupon codes — none yet; the real codes for each product will be added here.
   Codes are matched without regard to case. Each entry looks like:
     CODE: { type: "percent" | "flat", value: 10, label: "10% off", products: ["curelite"], minSubtotal: 0 }
   type "percent": value is a percentage; type "flat": value is rupees off.
   products (optional): product ids the code works on (curelite, curelaze-watch, curewrap);
     the discount is worked out on those products only. Leave it out for a code that works on the whole cart.
   minSubtotal (optional): smallest total of the eligible products the code works on.
   Note: on this static site the list is visible in the page code, so use public promo codes only. */
export const COUPONS = {};

export const normalizeCode = (code) => String(code || "").trim().toUpperCase().replace(/\s+/g, "");

/* Returns { coupon, discount } or { error } for a code against the cart items. */
export function checkCoupon(code, items) {
  const key = normalizeCode(code);
  if (!key) return { error: "Enter a coupon code." };
  const c = COUPONS[key];
  if (!c) return { error: "This coupon code is not valid." };
  const eligible = c.products ? items.filter((it) => c.products.includes(it.id)) : items;
  if (!eligible.length) {
    const names = (c.products || []).map((id) => PRODUCTS[id]?.name).filter(Boolean).join(" / ");
    return { error: `This coupon only works on ${names || "selected products"}.` };
  }
  const base = eligible.reduce((s, it) => s + PRODUCTS[it.id].price * it.qty, 0);
  if (c.minSubtotal && base < c.minSubtotal) {
    return { error: `This coupon needs a total of at least ${formatINR(c.minSubtotal)}.` };
  }
  const raw = c.type === "percent" ? (base * c.value) / 100 : c.value;
  const discount = Math.min(base, Math.round(raw * 100) / 100);
  return { coupon: { code: key, label: c.label }, discount };
}

export function cartTotals(items, couponCode = "") {
  const subtotal = items.reduce((s, it) => s + PRODUCTS[it.id].price * it.qty, 0);
  const mrp = items.reduce((s, it) => s + PRODUCTS[it.id].mrp * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  const applied = couponCode && subtotal ? checkCoupon(couponCode, items) : null;
  const coupon = applied && applied.coupon ? applied.coupon : null;
  const discount = coupon ? applied.discount : 0;
  return {
    items,
    subtotal,
    savings: mrp - subtotal,
    coupon,
    couponError: applied && applied.error ? applied.error : "",
    discount,
    shipping: SHIPPING,
    total: subtotal - discount + SHIPPING,
    count,
  };
}
