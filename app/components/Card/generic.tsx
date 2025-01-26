import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { ContentProps, Article, Lesson } from "@/app/interfaces/generic";

interface Props<T extends "article" | "lesson">
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "content"> {
  type: T;
  content: ContentProps<T>;
}

const CardGeneric = <T extends "article" | "lesson">({
  className,
  type,
  content,
}: Props<T>) => {
  const { slug, title } = content;

  const baseClass =
    "c-card c-card--generic block space-y-4 p-6 bg-[#F6F1E2] rounded-lg hover:shadow-md transition-shadow duration-300";

  return (
    <Link
      href={`${type.concat("s")}/${slug}`}
      className={cn(baseClass, className)}
    >
      <span className="text-xs font-semibold uppercase">
        {type === "article"
          ? (content as Article).category
          : (content as Lesson).subtitle}
      </span>
      {/* not using capitalize tailwind utilities on purpose. some text must lowercase */}
      <h3 className="font-ppeditorial text-2xl">{title}</h3>{" "}
    </Link>
  );
};

export default CardGeneric;
