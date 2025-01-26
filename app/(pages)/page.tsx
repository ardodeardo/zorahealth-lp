import { HeroBase } from "@/app/components/Hero";
import Lessons from "../components/Section/lessons";
import Courses from "../components/Section/courses";
import Articles from "../components/Section/articles";

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
