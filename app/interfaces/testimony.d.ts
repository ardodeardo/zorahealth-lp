import type { Expert } from "./expert";

interface Testimony extends Expert {
  testimony_words: string | React.ReactNode;
}

export type { Testimony };
