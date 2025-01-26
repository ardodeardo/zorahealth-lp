// components
import { HeroCourse } from "@/app/components/Hero";

// sections
import Experts from "@/app/(pages)/courses/[slug]/experts";
import Pricing from "@/app/(pages)/courses/[slug]/pricing";
import Syllabus from "@/app/(pages)/courses/[slug]/syllabus";
import Testimonials from "@/app/(pages)/courses/[slug]/testimonials";
import Information from "@/app/(pages)/courses/[slug]/information";
import RelatedCourse from "./related-course";

// dummy content
import { courses } from "@/app/constants/content/courses";

// populate slug
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function Page({ params }: PageProps) {
  const { slug } = await params;

  // this could be fetch from the server. let's simulate by filtering from dummy data
  const selectedCourse = courses.find((course) => course.slug === slug);

  // simulate related course except current selected course
  const relatedCourse = courses
    .slice(0, 8)
    .filter((course) => course.slug !== slug);

  return (
    <>
      <HeroCourse
        context={{
          title: selectedCourse?.title || "IVF - In Vitro Fertilization",
        }}
      ></HeroCourse>
      <Experts></Experts>
      <section
        id="c-syllabus-testimonials"
        className="c-syllabus-testimonials py-12"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
            {/* left */}
            <div className="lg:col-span-8 space-y-32 lg:pr-[72px]">
              <Pricing></Pricing>
              <Syllabus></Syllabus>
            </div>

            {/* right */}
            <div className="lg:col-span-4">
              <Testimonials></Testimonials>
            </div>
          </div>
        </div>
      </section>
      <Information></Information>
      <RelatedCourse context={{ courses: relatedCourse }}></RelatedCourse>
    </>
  );
}

export default Page;
