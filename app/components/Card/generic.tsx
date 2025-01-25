import React from "react";
import Link from "next/link";

import type { ContentProps, Article, Lesson } from "@/app/interfaces/generic";

interface Props<T extends "article" | "lesson"> {
  type: T;
  content: ContentProps<T>;
}

const CardGeneric = <T extends "article" | "lesson">({
  type,
  content,
}: Props<T>) => {
  const { slug, basepath, title } = content;

  return (
    <Link
      href={`${basepath}/${slug}`}
      className="c-card c-card--generic block space-y-4 p-6 bg-[#F6F1E2] rounded-lg hover:shadow-md transition-shadow duration-300"
    >
      <span className="text-xs font-semibold uppercase">
        {type === "article"
          ? (content as Article).category
          : (content as Lesson).subtitle}
      </span>
      <h3 className="font-ppeditorial text-2xl">{title}</h3>{" "}
      {/* not using capitalize tailwind utilities on purpose. some text must lowercase */}
    </Link>
  );
};

export default CardGeneric;
