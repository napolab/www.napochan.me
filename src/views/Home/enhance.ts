import { useEffect, useState, useMemo } from "react";
import { drawCherryBlossoms } from "components/DarwCherryBlossoms";

export function useEnhance() {
  const [image, setImage] = useState<string | null>(null);
  Promise.all<string, never>([
    import("assets/napo-spring-2020.jpg").then(res => res.default as string),
    new Promise(resolve => setTimeout(resolve, 1000)),
  ]).then(res => setImage(res[0]));

  const requesting = useMemo(() => image === null, [image]);
  useEffect(() => {
    const el = document.body;
    const handler = (e: Event) => {
      console.log(e);
      e.preventDefault();
    };

    el.addEventListener("scroll", handler, { passive: false });
    el.addEventListener("touchmove", handler, { passive: false });
    el.style.overflowX = "none";
    el.style.overflowY = "none";
    return () => {
      el.removeEventListener("scroll", handler);
      el.removeEventListener("touchmove", handler);
    };
  }, []);

  useEffect(() => {
    // !requesting && drawCherryBlossoms();
  }, [requesting]);

  return { image, requesting };
}
