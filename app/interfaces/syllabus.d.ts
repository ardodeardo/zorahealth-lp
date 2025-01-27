type Item = {
  uuid: string;
  slug: string;
  title: string;
};

type Lesson = {
  uuid: string;
  title: string;
  duration: number; // in minutes
  items: Array<Item>;
};

type Syllabus = Array<Lesson>;

export type { Syllabus, Lesson };
