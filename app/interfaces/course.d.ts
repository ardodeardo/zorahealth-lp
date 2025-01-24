import { Image } from "./image";

interface Course {
  uuid: string;
  slug: string;
  title: string;
  thumbnail: Image;
  category: string;
  description: string | React.ReactNode;
  experts: Array<string>;
  view: number;
}

export type { Course };
