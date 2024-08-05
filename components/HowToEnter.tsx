"use client";
import Image from "next/image";
import React from "react";
import nissan from "../public/nissan.png";
import iphone from "../public/iphone.png";
import macbook from "../public/macbook.png";
import backpack from "../public/backpack.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import girl from "../public/girl_howtoenter.png";
import en from "../locales/en";
import ar from "../locales/ar";

const HowToEnter = () => {
  const motionSettingsleft2right = {
    initial: { opacity: 0.5, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingstop2bottom = {
    initial: { opacity: 0.5, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };
  
  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div className="howtoenter_section bg-right-top md:bg-cover bg-no-repeat h-[580px] p-10 flex justify-center">
      <div className="flex flex-row md:flex-row justify-between ">
        <div
          className={`w-full hidden md:flex justify-center items-center  
          ${locale === "/" ? "" : ""}`}
        >
          <motion.span {...(locale === '/' ? motionSettingsleft2right : motionSettingsright2left)}>
  <Image className="max-h-[450px] w-auto" src={girl} alt="girl" />
</motion.span>
        </div>
        <div className=" w-full flex flex-col justify-center">
          <motion.h2 {...motionSettingstop2bottom}
            className={`text-webWhite text-5xl ${
              locale === "/"
                ? "font-Circular-Bold"
                : "font-helvetica-neue-lt-arabic-75-bol"
            }`}
          >
            {t.How_to_enter}
          </motion.h2>
          <div>
            <div className={`flex flex-col  ${locale === "/" ? "mt-6" : "mt-8"} ` }>
              <div
                className={ `flex flex-col   ${
                  locale === "/"
                    ? "font-Circular-Bold gap-y-4"
                    : "font-HelveticaNeueLTArabic-Roman gap-y-6"
                }`}
              >
                <motion.div className="flex gap-x-4">
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webSkyBlue text-webBlue mt-2  text-sm"
                    >
                      {t.step_1}
                    </div>
                  </div>
                  <div className=" text-lg text-webWhite pr-8">
                    {t.step_1_content}
                  </div>
                </motion.div>

                <motion.div className="flex gap-x-4">
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webSkyBlue text-webBlue mt-2  text-sm"
                    >
                      {t.step_2}
                    </div>
                  </div>
                  <div className=" text-lg text-webWhite pr-8">
                    {t.step_2_content}
                  </div>
                </motion.div>

                <motion.div className="flex gap-x-4">
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webSkyBlue text-webBlue mt-2 "
                    >
                      {t.step_3}
                    </div>
                  </div>
                  <div className=" text-lg text-webWhite pr-8">
                    {t.step_3_content}
                  </div>
                </motion.div>

                <motion.div className="flex gap-x-4">
                  <div className="">
                    <div
                      className="w-7 h-7 flex justify-center items-center rounded-full
                 bg-webSkyBlue text-webBlue mt-1  text-sm"
                    >
                      {t.step_4}
                    </div>
                  </div>
                  <div className="text-lg text-webWhite pr-8">
                    {t.step_4_content}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToEnter;
