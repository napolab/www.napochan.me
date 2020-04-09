import { useEffect } from "react";

export function useEnhance() {
  useEffect(() => {
    const el = document.body;
    const handler = (e: Event) => e.preventDefault();

    el.addEventListener("scroll", handler, { passive: false });
    el.addEventListener("touchmove", handler, { passive: false });
    el.style.overflowX = "none";
    el.style.overflowY = "none";
    return () => {
      el.removeEventListener("scroll", handler);
      el.removeEventListener("touchmove", handler);
    };
  });
}
