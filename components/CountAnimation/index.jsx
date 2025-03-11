"use client";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export default function CountAnimation({ targetValue }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, targetValue, {
            duration: 1,
            ease: "linear",
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex">
      <motion.p className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
        {rounded}
      </motion.p>
      <p className="font-black text-xl md:text-4xl lg:text-6xl xl:text-7xl text-white">
        +
      </p>
    </div>
  );
}
