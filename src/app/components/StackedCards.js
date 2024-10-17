"use client";
import {useRef} from 'react';
import { projects } from "../data";
import { useScroll } from "framer-motion";
import Card from "./Card";

export default function StackedCards() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  return (
      <div ref={container} className="">
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
      </div>
  );
}
