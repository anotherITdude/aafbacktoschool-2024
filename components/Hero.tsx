"use client";
import React from "react";
import hero_en_right from "./../public/hero_en_right.png";
import hero_en_left_top from "./../public//hero_en_left_top.png";
import hero_en_left_bot from "./../public/hero_en_left_bottom.png";
import hero_en from "./../public/hero_en.png";
import hero_ar from "./../public/hero_ar.png";
import mobile_en from "./../public/mobile_en.png";
import mobile_ar from "./../public/mobile_ar.png";

import hero_left_ar from "./../public/hero_left_ar.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const HeroAr = () => {
  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const how_to_title =
    locale === "/"
      ? "howtocard_title font-DIN-Bold"
      : "howtocard_title font-HelveticaNeueLTArabic-Roman pt-0";

  const how_to_card =
    locale === "/"
      ? "howtocard font-DIN-Bold"
      : "howtocard font-HelveticaNeueLTArabic-Roman";

  return (
    <div
      className="hero
    bg-opacity-15 bg-left-bottom md:bg-right-bottom bg-no-repeat
    
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Navbar />

      <div
        className="flex flex-col justify-center   md:flex-row md:justify-between items-center
        pl-4 pr-4 -mb-10 h-[600px]
        "
      >
        <div
          className={`
          flex h-full justify-evenly items-center w-full
          ${locale === "/" ? "pr-0 md:pl-16 -mt-[10%]" : "pr-6 md:pr-16 "}
          `}
        >
          <motion.div
            {...motionSettingsleft2right}
            className={` mt-0 md:mt-0 
            ${
              locale === "/"
                ? " -mb-16 md:mb-0 md:mr-20"
                : " -mb-0 md:mb-0 md:ml-20"
            }
            `}
          >
            {" "}
            {locale === "/" ? (
              <div>
                <Image className="hidden md:block" alt="how to enter" src={hero_en} />
                <Image className="block md:hidden -mt-12" alt="how to enter" src={mobile_en} />
              </div>
            ) : (
              <div>
                <Image className="hidden md:block" alt="how to enter" src={hero_ar} />
                <Image className="block md:hidden" alt="how to enter" src={mobile_ar} />
              </div>
            )}
          </motion.div>
        </div>
       
      </div>
    </div>
  );
};

export default HeroAr;
