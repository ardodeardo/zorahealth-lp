interface BaseProps {
  uuid: string;
  slug: string;
  title: string;
}

interface Lesson extends BaseProps {
  subtitle: string;
}

interface Article extends BaseProps {
  category: string;
}

type ContentProps<T> = T extends "article" ? Article : Lesson;

export type { ContentProps, Article, Lesson };
