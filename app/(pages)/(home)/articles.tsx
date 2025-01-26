import React from "react";

// components
import { CardGeneric } from "@/app/components/Card";

// dummy content
import { articles } from "@/app/constants/content/articles";

function Articles() {
  return (
    <section id="c-articles" className="c-articles">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">QUICK READS</p>

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
            <button
              type="button"
              className="block font-semibold text-sm hover:underline underline-offset-2"
            >
              Show 50 more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
