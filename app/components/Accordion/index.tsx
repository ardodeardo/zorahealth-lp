"use client";

import React, { useState } from "react";
import Link from "next/link";

import { ChevronDown, ChevronRight } from "lucide-react";

import type { Lesson } from "@/app/interfaces/syllabus";

interface Props {
  idx: number;
  expanded?: boolean;
  content: Lesson;
}

function Accordion(props: Props) {
  const { idx, expanded = false, content } = props;
  const { title, duration, items } = content;

  const [expand, setExpand] = useState<boolean>(expanded);

  return (
    <div className="border border-[#F6F4EE] rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      {/* head */}
      <button
        type="button"
        onClick={() => setExpand(!expand)}
        className="p-4 flex justify-between items-center w-full"
      >
        <span className="block space-y-3 text-left">
          <span className="font-semibold text-sm text-slate-800">
            Lesson {idx + 1}
          </span>
          <h3 className="font-ppeditorial text-2xl">{title}</h3>
        </span>

        <span className="flex gap-x-7 items-center min-w-28 justify-end">
          <span className="font-semibold text-xs">{duration} min</span>
          {expand ? (
            <ChevronDown className="min-w-5 min-h-5"></ChevronDown>
          ) : (
            <ChevronRight className="min-w-5 min-h-5"></ChevronRight>
          )}
        </span>
      </button>

      {/* body */}
      {expand && (
        <ul>
          {items.map((item) => {
            const { uuid, title } = item;

            return (
              <li key={uuid} className="px-4 py-3 border-t border-[#F6F4EE]">
                <Link
                  href={"/"}
                  className="font-medium text-sm text-slate-800 hover:underline underline-offset-2"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Accordion;
