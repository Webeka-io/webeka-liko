import { useEffect, useState, useRef } from "react";
export function useInViewport<T extends HTMLElement>(rootMargin="200px"){
  const ref = useRef<T|null>(null);
  const [inView, set] = useState(true);
  useEffect(()=>{
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e])=> set(e.isIntersecting), { rootMargin });
    io.observe(el); return ()=> io.disconnect();
  },[]);
  return { ref, inView };
}