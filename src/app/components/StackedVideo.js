"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ScrollVideo from "./ScrollVideo";
import FirstSection from "./Sections/FirstSection";

export default function StackedVideo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Delayed progress for FirstSection
  const delayedProgress = useTransform(scrollYProgress, [0.8, 1], [0, 1]); // Inicia en 30%

  return (
    <div ref={container} className="">
      <div className="h-[500vh]">
        <div className="h-[300vh] sticky top-0">
          <ScrollVideo />
        </div>
        {/* <div className="h-[100vh]" /> */}
        <div className="h-[200vh]">
          <FirstSection progress={delayedProgress} />
        </div>
      </div>
    </div>
  );
}
