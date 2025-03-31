"use client";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export default function CountAnimation({ targetValue }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, targetValue, {
            duration: 1,
            ease: "easeInOut",
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div ref={ref} className="flex">
      <motion.p className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
        {rounded}
      </motion.p>
      <p className={`font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white ${targetValue > 400 ? "hidden": "block"}`}>
        +
      </p>
    </div>
  );
}
