import React from "react";
import Link from "next/link";

import { CardGeneric } from "@/app/components/Card";

import { articles } from "@/app/constants/content/articles";

function Articles() {
  return (
    <section id="c-articles" className="c-articles">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">
            QUICK READS ({articles.length})
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {articles.map((article) => {
              return (
                <CardGeneric
                  key={article.uuid}
                  type="article"
                  content={article}
                ></CardGeneric>
              );
            })}
          </div>

          <div className="w-full flex justify-end">
            <Link
              href={"/articles"}
              className="block font-semibold text-base hover:underline underline-offset-2"
            >
              Show 50 more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
