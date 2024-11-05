"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const FirstSection = ({ progress }) => {
    const container = useRef(null);

  
    return (
      <div
        ref={container}
        className="h-[calc(100vh+50px)] flex items-center justify-center sticky top-[-50px]"
      >
        <motion.div
          style={{ y: progress  }} // Controla el movimiento con el retraso
          className="flex flex-col relative w-screen h-[calc(100vh+50px)] rounded-[25px] p-[50px] origin-top bg-lilac-00"
        >
          <h2 className="font-montserrat font-semibold text-left m-0 text-[50px] pt-[50px] uppercase">
           Title
          </h2>
          <div className="flex h-full mt-[10px] gap-[50px]">
            <div className="w-[40%] relative top-[10%]">
              <p className="text-[16px] first-letter:text-28px">Text example</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

export default FirstSection;
