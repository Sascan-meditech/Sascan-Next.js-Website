"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSite } from "./site-effects";

/* Re-runs the site behaviour on every page change (pages switch without a full reload). */
export default function SiteEffects() {
  const pathname = usePathname();
  useEffect(() => initSite(), [pathname]);
  return null;
}
