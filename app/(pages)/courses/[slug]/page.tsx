// components
import { HeroCourse } from "@/app/components/Hero";

// sections
import Experts from "@/app/(pages)/courses/[slug]/experts";
import Pricing from "@/app/(pages)/courses/[slug]/pricing";
import Syllabus from "@/app/(pages)/courses/[slug]/syllabus";
import Testimonials from "@/app/(pages)/courses/[slug]/testimonials";

function Page() {
  return (
    <>
      <HeroCourse></HeroCourse>
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
    </>
  );
}

export default Page;
