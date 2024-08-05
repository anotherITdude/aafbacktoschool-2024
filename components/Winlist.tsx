"use client"
import Image from "next/image";
import React from "react";
import nissan from "../public/nissan.png";
import nissan_ar from "../public/nissan_ar.png";
import iphone from "../public/iphone.png";
import iphone_ar from "../public/iphone_ar.png";
import macbook_ar from "../public/macbook_ar.png";
import macbook from "../public/macbook.png";
import backpack from "../public/backpack.png";
import backpack_ar from "../public/backpack_ar.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Winlist = () => {
  const motionSettingsleft2right = {
    initial: { opacity: 0.5, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };
  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };
  const locale = usePathname();
  return (
    <div className="winlist_section bg-right-top md:bg-cover bg-no-repeat h-[500px] p-10 flex justify-center">
      <div className="flex flex-col md:flex-col justify-center w-[95%]">
        <div className={`flex flex-row justify-start w-full  
          ${ locale === "/" ? "pl-9 gap-x-[20%]" : "pr-9 gap-x-[20%]"}`}>
          <motion.div className={`${locale === "/" ? "z-10" : "z-50"}`} {...motionSettingsleft2right}>
            {locale === "/"
              ? <Image width={250} src={nissan} alt="nissan" />
              : <Image width={250} src={nissan_ar} alt="nissan" />
            }
          </motion.div>
          <motion.div className="z-30" {...motionSettingsleft2right}>
            {locale === "/"
              ? <Image width={250} src={iphone} alt="iphone" />
              : <Image width={250} src={iphone_ar} alt="iphone" />
            }
            
          </motion.div>
        </div>
        <div className={`flex flex-row justify-end w-full   -mt-32 pr-9
          ${ locale === "/" ? "pl-9 gap-x-[20%]" : "pl-9 gap-x-[22%]"}`}>
          <motion.div className={`${locale === "/" ? "z-20" : "z-40"}`} {...motionSettingsright2left}>
            {locale === "/"
              ? <Image width={250} src={macbook} alt="macbook" />
              : <Image width={250} src={macbook_ar} alt="macbook" />
            }
          </motion.div>
          <motion.div className={`${locale === "/" ? "z-40" : "z-20"}`} {...motionSettingsright2left}>
            {locale === "/"
              ? <Image width={250} src={backpack} alt="backpack" />
              : <Image width={250} src={backpack_ar} alt="backpack" />
            }
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Winlist;
