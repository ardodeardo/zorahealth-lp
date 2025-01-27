"use client";

import React, { useState } from "react";

// components
import { CardGeneric } from "@/app/components/Card";

// dummy content
import { articles } from "@/app/constants/content/articles";

function Articles() {
  const limit = 4;
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <section id="c-articles" className="c-articles">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">QUICK READS</p>

          <div className="grid lg:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              return (
                <CardGeneric
                  key={article.uuid}
                  type="article"
                  content={article}
                  className={index + 1 > limit ? (expand ? "" : "hidden") : ""}
                ></CardGeneric>
              );
            })}
          </div>

          <div className="w-full flex justify-end">
            <button
              type="button"
              className="block font-semibold text-sm hover:underline underline-offset-2"
              onClick={() => setExpand(!expand)}
            >
              {expand ? "Show less" : <>Show {articles.length - limit} more</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
