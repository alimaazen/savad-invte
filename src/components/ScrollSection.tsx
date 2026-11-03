import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isFirst?: boolean;
}

const ScrollSection = ({
  children,
  className = "",
  delay = 0,
  isFirst = false,
}: ScrollSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(isFirst);

  useEffect(() => {
    if (isFirst) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isFirst]);

  return (
    <section
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        isFirst
          ? "min-h-[100svh] w-full flex flex-col items-center justify-center pt-28 pb-14 sm:pt-36 sm:pb-16 px-4 relative overflow-visible transition-all duration-1200 ease-out"
          : "min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 relative overflow-visible transition-all duration-1200 ease-out",
        isVisible ? "opacity-100 blur-0 scale-100 translate-y-0" : "opacity-0 translate-y-12",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default ScrollSection;
