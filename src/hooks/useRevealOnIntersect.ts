import { useEffect, useRef } from "react";

export function useRevealOnIntersect<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const rootNode = containerRef.current;
    if (!rootNode) {
      return;
    }

    const nodes = rootNode.querySelectorAll("h1, p, p > span");
    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("wave-in");
          activeObserver.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.18,
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
