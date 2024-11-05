"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Lottie from "react-lottie-player";
import animationData from "../../../public/videos/test-video.json";

const ScrollVideo = () => {
  const { scrollYProgress } = useScroll();

  // Map scroll progress to frame range (adjust 0 to total frames if needed)
  const frame = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const lottieRef = useRef(null);

  // Update Lottie frame on scroll change
  useEffect(() => {
    const unsubscribe = frame.on("change", (latestFrame) => {
      if (lottieRef.current) {
        lottieRef.current.goToAndStop(latestFrame, true);
      }
    });

    return () => unsubscribe();
  }, [frame]);

  return (
    <motion.div className="sticky top-0 ">
      <Lottie
        ref={lottieRef}
        animationData={animationData}
        play={false} // Set to false to control manually
        className="w-full h-auto"
      />
    </motion.div>
  );
};

export default ScrollVideo;