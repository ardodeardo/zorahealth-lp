// import Image from "next/image";

import { HeroBase } from "./components/Hero";
import Courses from "./components/Section/courses";

export default function Home() {
  return (
    <>
      <HeroBase></HeroBase>
      <div className="space-y-13 pb-32">
        <Courses></Courses>
      </div>
    </>
  );
}
