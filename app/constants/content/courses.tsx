import { Course } from "@/app/interfaces/course";

const courses: Array<Course> = [
  {
    uuid: "7524aff0-bfa2-47d6-adac-a40dba35ef0d",
    slug: "ivf-in-vitro-vertilization",
    title: "IVF - In Vitro Vertilization",
    category: "introductory",
    thumbnail: {
      alt: "zorahealth",
      url: "image.png",
    },
    description: (
      <>
        The most complex fertility treatment, this course will help you do it
        right the first time
      </>
    ),
    experts: [
      "Cornell",
      "CCRM",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 631, // assume clean data in thousands
  },
  {
    uuid: "106cbc70-031d-4274-90f8-0e60acd93c19",
    slug: "fertility-101",
    title: "Fertility 101",
    category: "introductory",
    thumbnail: {
      alt: "zorahealth",
      url: "image.png",
    },
    description: (
      <>
        You took sex ed, but now you need to understand fertility. Data to
        answer your questions about natural conception and diagnosing what might
        be wrong
      </>
    ),
    experts: [
      "Cornell",
      "John Hopkins",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 19, // assume clean data in thousands
  },
  {
    uuid: "6a7ab7a8-8d3f-4504-9c46-01017ca1ccec",
    slug: "mental-health-and-fertility",
    title: "Mental Health & Fertility",
    category: "introductory",
    thumbnail: {
      alt: "zorahealth",
      url: "image.png",
    },
    description: (
      <>
        Breaking down every important topic realting to mental health &
        fertility. We cover data around anxiety, depression, and stress as they
        relate to fertility & fertility outcomes. Studies on relaxation
        techniques & SSRI antidepressants. Tools for managing relationships with
        your partner, family, friend & co-workers
      </>
    ),
    experts: [
      "Cornell",
      "Harvard",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 8, // assume clean data in thousands
  },
  {
    uuid: "a47d57fd-7e35-4f96-95ed-648d3afae4b1",
    slug: "pcos-polycystic-ovary-syndrome",
    title: "PCOS - Polycystic Ovary Syndrome",
    category: "introductory",
    thumbnail: {
      alt: "zorahealth",
      url: "image.png",
    },
    description: (
      <>
        A comprehensive overview of everything you need to know about polycystic
        ovary syndrome (PCOS) from diagnosis to treatment as well as
        expert-guided lifestyle and diet changes to help you live your best life
        with this condition.
      </>
    ),
    // experts: [
    //   "Columbia",
    //   "UCLA",
    //   "dummy_filler3",
    //   "dummy_filler4",
    //   "dummy_filler5",
    // ],
    experts: [],
    view: 0, // assume clean data in thousands
  },
];

export { courses };
