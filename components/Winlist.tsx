import Image from "next/image";
import React from "react";
import nissan from "../public/nissan.png";
import iphone from "../public/iphone.png";
import macbook from "../public/macbook.png";
import backpack from "../public/backpack.png";

const Winlist = () => {
  return (
    <div className="winlist_section bg-right-top md:bg-cover bg-no-repeat h-[500px] p-10 flex justify-center">
      <div className="flex flex-col md:flex-col justify-center w-[95%]">
        <div className="flex flex-row justify-start w-full gap-x-[20%] pl-[0%]">
          <Image className="z-10" width={250} src={nissan} alt="nissan" />
          <Image className="z-30" width={250} src={iphone} alt="iphone" />
        </div>
        <div className="flex flex-row justify-start w-full gap-x-[25%] pl-[24%] -mt-32">
          <Image className="z-20" width={250} src={macbook} alt="macbook" />
          <Image className="z-40" width={250} src={backpack} alt="backpack" />
        </div>
      </div>
    </div>
  );
};

export default Winlist;
