import { useEffect, useState, useMemo } from "react";
import { drawCherryBlossoms } from "components/DarwCherryBlossoms";

export function useEnhance() {
  const [image, setImage] = useState<string | null>(null);
  import("assets/napo-spring-2020.jpg")
    .then(res => res.default as string)
    .then(res => setImage(res));

  const requesting = useMemo(() => image === null, [image]);
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

  useEffect(() => {
    !requesting && drawCherryBlossoms();
  }, [requesting]);

  return { image, requesting };
}
