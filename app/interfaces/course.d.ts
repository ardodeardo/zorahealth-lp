interface Course {
  uuid: string;
  slug: string;
  title: string;
  category: string;
  description: string | React.ReactNode;
  experts: Array<string>;
  view: number;
}

export type { Course };
