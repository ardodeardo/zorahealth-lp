import React from "react";
import Image from "next/image";

import { PATH } from "@/app/constants/config/path";

function Pricing() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-x-3 w-3/4 lg:w-auto">
        <Image
          alt="zorahealth"
          src={PATH.image.concat("pages/course/syllabus/verified-badge.svg")}
          width={28}
          height={28}
          className="min-w-7 min-h-7 mt-0.5"
        ></Image>
        <div className="space-y-3">
          <p className="text-sm font-medium">
            &quot;Full refund withind 30 days, no question asked&quot;
          </p>
          <p className="text-sm font-medium">Elligible for FSA/HSA</p>
        </div>
      </div>

      <p className="font-ppeditorial text-[32px]">$195</p>
    </div>
  );
}

export default Pricing;
