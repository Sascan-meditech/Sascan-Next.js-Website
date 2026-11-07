"use client";

/* Shopping cart kept in the visitor's browser (localStorage), shared by every component through useCart(). */
import { useSyncExternalStore } from "react";
import { MAX_QTY, cleanItems, normalizeCode } from "./products";

const KEY = "sascan-cart-v1";
const EMPTY = [];
const listeners = new Set();
let cache = null;

function read() {
  try {
    return cleanItems(JSON.parse(localStorage.getItem(KEY) || "[]"));
  } catch {
    return EMPTY;
  }
}

function getCart() {
  if (cache === null) cache = read();
  return cache;
}

function write(items) {
  cache = cleanItems(items);
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    /* private mode / storage full: the cart still works until the page is closed */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  const onStorage = (e) => {
    if (e.key === KEY) {
      cache = read();
      listener();
    }
  };
  window.addEventListener("storage", onStorage); // keeps other open tabs in step
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  return useSyncExternalStore(subscribe, getCart, () => EMPTY);
}

export function addItem(id, qty = 1) {
  const items = getCart();
  const found = items.find((it) => it.id === id);
  write(found
    ? items.map((it) => (it.id === id ? { ...it, qty: Math.min(MAX_QTY, it.qty + qty) } : it))
    : [...items, { id, qty }]);
}

export function setQty(id, qty) {
  write(getCart().map((it) => (it.id === id ? { ...it, qty: Math.max(1, Math.min(MAX_QTY, qty)) } : it)));
}

export function removeItem(id) {
  write(getCart().filter((it) => it.id !== id));
}

export function clearCart() {
  write([]);
  setCoupon("");
}

/* Applied coupon code (checked against the cart in cartTotals) — kept so it carries from cart to checkout */
const COUPON_KEY = "sascan-coupon-v1";
const couponListeners = new Set();
let couponCache = null;

function readCoupon() {
  try {
    return normalizeCode(localStorage.getItem(COUPON_KEY) || "");
  } catch {
    return "";
  }
}

function getCoupon() {
  if (couponCache === null) couponCache = readCoupon();
  return couponCache;
}

function subscribeCoupon(listener) {
  couponListeners.add(listener);
  const onStorage = (e) => {
    if (e.key === COUPON_KEY) {
      couponCache = readCoupon();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    couponListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCoupon() {
  return useSyncExternalStore(subscribeCoupon, getCoupon, () => "");
}

export function setCoupon(code) {
  couponCache = normalizeCode(code);
  try {
    if (couponCache) localStorage.setItem(COUPON_KEY, couponCache);
    else localStorage.removeItem(COUPON_KEY);
  } catch {
    /* ignore */
  }
  couponListeners.forEach((l) => l());
}
