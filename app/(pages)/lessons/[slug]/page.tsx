import React from "react";

// dummy content
import { lessons } from "@/app/constants/content/lessons";

// populate slug
export function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function Page({ params }: PageProps) {
  const { slug } = await params;

  // this could be fetch from the server. let's simulate by filtering from dummy data
  const selectedLesson = lessons.find((topic) => topic.slug === slug);

  return (
    <section className="bg-[#FCFAF5] min-h-[55vh]">
      <div className="container mx-auto">
        <div className="py-32 space-y-4">
          <span>LESSONS PAGE</span>
          <h1 className="font-ppeditorial text-5xl lg:text-[64px] leading-[120%]]">
            {selectedLesson?.title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Page;
