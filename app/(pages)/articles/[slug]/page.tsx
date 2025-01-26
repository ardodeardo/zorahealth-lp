import React from "react";

// dummy content
import { articles } from "@/app/constants/content/articles";

// populate slug
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function Page({ params }: PageProps) {
  const { slug } = await params;

  // this could be fetch from the server. let's simulate by filtering from dummy data
  const selectedArticle = articles.find((topic) => topic.slug === slug);

  return (
    <section className="bg-[#FCFAF5] min-h-[55vh]">
      <div className="container mx-auto">
        <div className="py-32 space-y-4">
          <span>ARTICLES PAGE</span>
          <h1 className="font-ppeditorial text-5xl lg:text-[64px] leading-[120%]">
            {selectedArticle?.title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Page;
