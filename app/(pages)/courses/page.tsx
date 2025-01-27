// sections
import { HeroBase } from "@/app/components/Hero";
import Courses from "./courses";
import Lessons from "./lessons";
import Articles from "./articles";
import Topics from "./topics";

// dummy content
import { courses } from "@/app/constants/content/courses";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const category = searchParams.category || "all";

  const filteredCourses =
    category === "all"
      ? courses
      : courses.filter((course) => course.category === category);

  return (
    <>
      <HeroBase></HeroBase>
      <div className="space-y-14 pb-32">
        <Courses context={{ courses: filteredCourses }}></Courses>
        <Lessons></Lessons>
        <Articles></Articles>
        <Topics></Topics>
      </div>
    </>
  );
}
