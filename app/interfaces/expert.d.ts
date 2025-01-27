import type { Image } from "./image";

interface Expert {
  uuid: string;
  name: string;
  roles: Array<string | React.ReactNode>;
  image: Image;
}

export type { Expert };
