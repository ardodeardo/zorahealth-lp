import { HeroBase } from "@/app/components/Hero";
import Courses from "@/app/components/section/courses";
import Lessons from "@/app/components/section/lessons";
import Articles from "@/app/components/section/articles";

export default function Home() {
  return (
    <>
      <HeroBase></HeroBase>
      <div className="space-y-14 pb-32">
        <Courses></Courses>
        <Lessons></Lessons>
        <Articles></Articles>
      </div>
    </>
  );
}
