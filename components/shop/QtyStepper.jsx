"use client";

import { MAX_QTY } from "../../lib/products";
import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";

/* − [n] + quantity box */
export default function QtyStepper({ value, onChange, label = "Quantity", small = false }) {
  const set = (v) => onChange(Math.max(1, Math.min(MAX_QTY, Math.round(Number(v)) || 1)));
  return (
    <div className={`cl-qty${small ? " cl-qty--sm" : ""}`}>
      <button type="button" aria-label={`Decrease ${label.toLowerCase()}`} onClick={() => set(value - 1)} disabled={value <= 1}>
        <Minus weight="regular" className="pi" aria-hidden="true" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min="1"
        max={MAX_QTY}
        value={value}
        aria-label={label}
        onChange={(e) => set(e.target.value)}
      />
      <button type="button" aria-label={`Increase ${label.toLowerCase()}`} onClick={() => set(value + 1)} disabled={value >= MAX_QTY}>
        <Plus weight="regular" className="pi" aria-hidden="true" />
      </button>
    </div>
  );
}
