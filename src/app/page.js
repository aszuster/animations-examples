"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import StackedCards from "./components/StackedCards";
import CircleHoverText from "./components/CircleHoverText";
import ScrollVideo from "./components/ScrollVideo";
import StackedVideo from "./components/StackedVideo";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <StackedVideo />
      <CircleHoverText />
      <StackedCards />
      {/* <div ref={container} className="">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div> */}
    </div>
  );
}
