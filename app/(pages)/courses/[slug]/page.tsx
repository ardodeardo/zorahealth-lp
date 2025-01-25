// sections
import { HeroCourse } from "@/app/components/Hero";
import Experts from "@/app/(pages)/courses/experts";
import Syllabus from "@/app/(pages)/courses/syllabus";

function Page() {
  return (
    <>
      <HeroCourse></HeroCourse>
      <Experts></Experts>
      <Syllabus></Syllabus>
    </>
  );
}

export default Page;
