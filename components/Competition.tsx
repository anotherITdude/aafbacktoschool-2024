"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import girl from "../public/girl.png";
import boy from "../public/boy.png";
import Image from "next/image";
import en from "../locales/en";
import ar from "../locales/ar";
import star from "../public/star.png";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

interface CompetitionProps {
  title?: string;
}
const Competition: React.FC<CompetitionProps> = ({ title }) => {
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

  const motionSettingsOpacity = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center bg-webWhite">
        <div
          className="flex w-full bg-red-200 text-center justify-center items-center competition_section
          competition_section bg-right md:bg-cover    bg-no-repeat h-[540px]"
        >
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <motion.div {...motionSettingsleft2right}>
              <Image
                src={boy}
                alt="boy"
                className="hidden md:block w-[100px] md:w-[240px]"
              />
            </motion.div>
            <div className="flex flex-col gap-y-0 max-w-[500px] capitalize">
              <div
                className={`text-webBlue ${
                  locale === "/"
                    ? "font-Circular-Bold text-3xl md:text-4xl gap-y-2"
                    : "font-helvetica-neue-lt-arabic-75-bol text-3xl md:text-3xl  mb-6"
                }`}
              >
                <p className="">{t.arrive_line_1}</p>
                <p className="">{t.arrive_line_2}</p>
              </div>
              <div
                className={`  ${
                  locale === "/"
                    ? "font-Circular-Bold text-3xl md:text-4xl gap-y-0"
                    : "font-helvetica-neue-lt-arabic-75-bol text-3xl md:text-3xl mb-2 gap-y-2"
                }`}
              >
                <p className={`bg-webBlue text-webWhite  m-auto 
                  ${
                    locale === "/"
                      ? "pt-1 pb-1"
                      : "pt-3 pb-5"
                  }
                  `}>
                  {t.win_nissan_x_trails}
                </p>
                <p
                  className={`bg-webSkyBlue text-webWhite w-full md:w-[50%] m-auto 
                    ${
                      locale === "/"
                        ? "pt-1 pb-1"
                        : "pt-0 pb-2"
                    }
                    `}
                >
                  {t.and_more}
                </p>
              </div>
              <p className={`text-sm text-center text-webBlue mt-4
                ${
                  locale === "/"
                    ? "font-Circular-Bold text-sm md:text-sm gap-y-0"
                    : "font-helvetica-neue-lt-arabic-75-bol text-3xl md:text-sm mb-2 gap-y-2"
                }
                `}>
                {t.competition_p}
              </p>
              <div className={`flex justify-center gap-x-8 mt-4 text-webBlue  ${locale === "/" ? "text-left" : "text-right"}`}>
                <div className="flex left border-2  border-webBlue p-2 gap-x-3 rounded-xl">
                  <motion.div >
                    <Image
                      src={star}
                      alt="star"
                      className="w-[20px] md:w-[20px]"
                    />
                  </motion.div>
                  <div className={`flex-col text-xs 
                    ${
                      locale === "/"
                        ? "font-Circular-Bold text-3xl md:text-sm gap-y-0"
                        : "font-helvetica-neue-lt-arabic-75-bol text-3xl md:text-sm mb-2 gap-y-2"
                    }
                    `}>
                    <p className="uppercase">{t.period_title}</p>
                    <p className={`${locale === "/" ? "" : "mt-2 "}`}>{t.period_from}</p>
                    <p>{t.period_to}</p>
                  </div>
                </div>
                <div className="flex right border-2  border-webBlue p-2 gap-x-3 rounded-xl">
                <div>
                    <Image
                      src={star}
                      alt="star"
                      className="w-[20px] md:w-[20px]"
                    />
                  </div>
                  <div className={`flex-col text-xs 
                    ${
                      locale === "/"
                        ? "font-Circular-Bold text-3xl md:text-sm gap-y-0"
                        : "font-helvetica-neue-lt-arabic-75-bol text-3xl md:text-sm mb-2 gap-y-2"
                    }
                    `}>
                    <p className="uppercase">{t.winners_announcement}</p>
                    <p className={`
                      ${
                        locale === "/"
                          ? "font-Circular-Bold text-3xl md:text-sm gap-y-0"
                          : "font-HelveticaNeueLTArabic-Romanl mt-2 text-3xl md:text-sm mb-2 gap-y-2"
                      }
                      `}>{t.winners_announcement_date}</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div {...motionSettingsright2left}>
              <Image
                src={girl}
                alt="girl"
                className="hidden md:block w-[50px] md:w-[200px] md:mt-[300px]"
              />
            </motion.div>
            {/* <div className="flex w-full p-4  justify-between md:hidden">
              <Image src={boy} alt="boy" className="w-[110px] " />
              <Image src={girl} alt="girl" className=" w-[70px]" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
