import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//variants

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setPlayMarquee(true);
    }, 2000)
  }, []);

  return (
    <motion.div className="banner z-50 relative mt-[50px]" variants={banner}>
      <BannerRowTop title={"brand"} />
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
      <BannerRowBottom title={"studio"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
    className="row-title  text-[12rem] leading-[14rem]  font-semibold relative inline-block whitespace-nowrap text-green-00 font-montserrat"
  >
    {[...title].map((letter) => (
      <motion.span
        variants={letterAnimation}
        className="row-letter left-0 text-[12rem] leading-[14rem] font-semibold relative inline-block whitespace-nowrap font-montserrat"
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div
      className={
        "banner-row overflow-hidden flex items-center text-green-00 font-montserrat"
      }
    >
      <div className="row-col w-[50%] flex content-center justify-center">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col w-[50%] flex content-center justify-center"
      >
        <span className="row-message text-[1rem] leading-[1.8rem] w-[320px]">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div
      className={
        "banner-row center overflow-hidden flex items-center justify-center"
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1, delay: 1 }}
        className="scroll h-[160px] w-[160px] rounded-[100%] bg-lilac-00 absolute flex items-center justify-center flex-col left-[160px]"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
          className="text-[18px] font-semibold my-[4px] mx-0 text-black-purple"
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
          className="text-[18px] font-semibold my-[4px] mx-0 text-black-purple"
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};
const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} disabled/>
      </div>
    </div>
  );
};

export default Banner;
