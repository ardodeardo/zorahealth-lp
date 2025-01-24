import React from "react";

import Image from "next/image";

import FooterBacklink from "./backlink";

import { PATH } from "@/app/constants/config/path";

function Footer() {
  return (
    <footer id="c-footer" className="c-footer bg-[#F48265] pt-[72px] pb-6">
      <div className="container mx-auto">
        <div className="grid gap-y-[104px]">
          <div className="w-full flex justify-between items-center">
            <Image
              alt="zorahealth"
              src={PATH.image.concat("footer/inflection.png")}
              height={44}
              width={164}
              className="h-11 w-auto"
            ></Image>
            <div className="flex items-center gap-x-10">
              <Image
                alt="zorahealth"
                src={PATH.image.concat("footer/women-owned.png")}
                height={48}
                width={115}
                className="h-12 w-auto"
              ></Image>
              <Image
                alt="zorahealth"
                src={PATH.image.concat("footer/avatar.png")}
                height={136}
                width={136}
                className="h-[136px] w-auto"
              ></Image>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-12">
            <div className="col-span-8">
              <FooterBacklink></FooterBacklink>
            </div>
            <div className="col-span-4">
              <p className="text-sm text-white font-semibold">
                Our content is for informational purposes only - it&apos;s not a
                substitue for medical advice, dagnosis, or treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
