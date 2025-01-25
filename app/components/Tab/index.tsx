"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const tab: Array<{
  label: string;
  value: string;
}> = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Introductory",
    value: "introductory",
  },
  {
    label: "Advanced",
    value: "advanced",
  },
  {
    label: "Population Specific",
    value: "population_specific",
  },
];

function Tab() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";

  return (
    <ul className="flex gap-x-7 border-b-2 border-[#F0EEE4]">
      {tab.map((item) => {
        const { label, value } = item;

        return (
          <li key={value} className="group">
            <Link
              href={pathname.concat(`?category=${value}`)}
              className="block relative text-sm font-semibold py-7"
            >
              {label}
              <span
                className={`block absolute bottom-[-2px] left-0 origin-center w-full h-1 bg-[#D75555] z-10 transition-transform transform group-hover:transform-none ${
                  category === value ? "" : "scale-x-0"
                }`}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Tab;
