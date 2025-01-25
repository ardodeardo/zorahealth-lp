import React from "react";

// components
import TopicList from "@/app/components/List";

// dummy content
import { topics } from "@/app/constants/content/topics";

function Articles() {
  return (
    <section id="c-articles" className="c-articles">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">EXPLORE TOPICS</p>

          <ul className="grid gap-y-6">
            {topics.map((topic) => {
              return <TopicList key={topic.uuid} {...topic}></TopicList>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Articles;
