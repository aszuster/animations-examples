"use client";
import useMousePosition from "../utils/useMousePosition";
import {motion} from "framer-motion";
import {useState} from 'react'

export default function CircleHoverText() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;
  
    return (
      <div className=" h-[100vh] cursor-default">
        <motion.div className="w-full h-full flex items-center justify-center mask absolute" 
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
        >
          <p onMouseEnter={() =>{setIsHovered(true)}} onMouseLeave={() =>{setIsHovered(false)}} className="text-purple w-[1300px] p-[40px] font-noto font-medium text-[60px] leading-[65px]">
            The bitter scent of lemons remains embedded in my heart. 
            I can&apos;t make my way home &apos;til the rain lets up. Even now you remain my light.
          </p>
        </motion.div>
  
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-lilac-00 w-[1300px] font-poppins font-medium text-[70px] leading-[90px]">
            胸に残り離れない 苦いレモンの匂い <br />
            雨が降り止むまでは帰れない <br />
            今でもあなたはわたしの光
          </p>
        </div>
      </div>
    );
  }
  