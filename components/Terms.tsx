"use client";
import React from "react";
import Section from "./Section";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const Terms = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div
      id="terms"
      className="text-webWhite bg-webLightBlue"
     
    >
      <Section>
        <div
          className="w-full md:w-[90%] pl-4 pr-4 md:pl-20 "
          style={{ margin: "auto", marginTop: "3%" }}
        >
          <h1
            className={`  mb-4 ${
              locale === "/"
                ? "font-Circular-Bold text-2xl md:text-2xl"
                : "text-4xl font-helvetica-neue-lt-arabic-75-bol  md:text-2xl"
            }`}
          >
            {t.terms_heading}
          </h1>
          <ul
            className={`list-decimal mt-4 flex flex-col gap-y-2
          ${
            locale === "/"
              ? "font-Circular-Book text-sm md:text-sm pl-4"
              : "font-HelveticaNeueLTArabic-Roman text-sm md:text-sm pr-4"
          }
          `}
          >
            <li>{t.terms1}</li>
            <li>{t.terms2}</li>
            <li>{t.terms3}</li>
            <li>{t.terms4}</li>
            <li>{t.terms5}</li>
            <li>{t.terms6}</li>
          </ul>
          <div className="border-b-2 border-white opacity-5 mt-4 mb-4 -ml-2"></div>
          <div className={` opacity-45 text-xs ${locale === "/" ? "font-Circular-Book" : "font-HelveticaNeueLTArabic-Roman"}`}>
            {t.copywrite}</div>
        </div>
        
       
      </Section>
    </div>
  );
};

export default Terms;
