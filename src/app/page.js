"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import StackedCards from "./components/StackedCards";
import CircleHoverText from "./components/CircleHoverText";
import ScrollVideo from "./components/ScrollVideo";

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
      <div className="h-[300vh]">
        <h1>Scroll down to control the video</h1>
        <ScrollVideo />
      </div>
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
