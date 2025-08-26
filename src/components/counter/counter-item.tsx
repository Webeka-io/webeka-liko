import { useEffect, useRef, useState } from "react";

type CounterProps = {
  min: number;
  max: number;
  durationMs?: number; // 👉 durée totale du comptage
};

export default function CounterItem({ min, max, durationMs = 5000 }: CounterProps) {
  const [counted, setCounted] = useState<number>(min);
  const targetRef = useRef<HTMLSpanElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const runningRef = useRef(false);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3); // optionnel mais plus agréable

  const startCountup = () => {
    if (runningRef.current) return;
    runningRef.current = true;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const value = Math.round(min + (max - min) * easeOutCubic(t));
      setCounted(value);

      if (t < 1) {
        rafIdRef.current = requestAnimationFrame(tick);
      } else {
        runningRef.current = false;
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounted(min);
            startCountup();
            observer.unobserve(el); // 👉 déclenche une seule fois
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      observer.disconnect();
    };
  }, [min, max, durationMs]);

  return <i ref={targetRef}>{counted}</i>;
}
