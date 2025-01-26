import { Course } from "@/app/interfaces/course";

const courses: Array<Course> = [
  {
    uuid: "7524aff0-bfa2-47d6-adac-a40dba35ef0d",
    slug: "ivf-in-vitro-vertilization",
    title: "IVF - In Vitro Vertilization",
    category: "introductory",
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
  {
    uuid: "ef2517e5-a7ba-4eab-98c4-88ea95f8d3f2",
    slug: "lifestyle-choices-from-diet-to-supplements",
    title: "Lifestyle Choices, From Diet To Supplements",
    category: "introductory",
    description: (
      <>
        All the data on lifestyle choices and their impact on fertility,
        including decisions around diet, exercise, drinking alcohol, caffeine
        consumption, smoking, recreational drugs, and using supplements.
      </>
    ),
    experts: [
      "YALE",
      "UCLA",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 86, // assume clean data in thousands
  },

  {
    uuid: "b309e46b-713e-469a-be8d-b1bedf47a4df",
    slug: "iui-or-artificial-insemination",
    title: 'IUI or "Artificial Insemination"',
    category: "introductory",
    description: (
      <>
        Data on IUI success rates depending on who you are, what it costs, the
        risks, and how to decide between doing IUI and IVF.
      </>
    ),
    experts: [
      "YALE",
      "Northwestern",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 531, // assume clean data in thousands
  },

  {
    uuid: "f04dcd91-a125-4c72-9499-1079fdd5a029",
    slug: "miscarriage",
    title: "Miscarriage",
    category: "introductory",
    description: (
      <>
        How to navigate miscarriage & ectopic pregnancy. Diagnostics; beta hCG;
        surgical vs. medical vs. natural options; genetic testing; and
        emotionally coping.
      </>
    ),
    experts: [
      "Johns Hopkins",
      "Columbia",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 30, // assume clean data in thousands
  },

  {
    uuid: "004ad9d1-2d48-450f-bf71-f00462d3d3b2",
    slug: "egg-freezing",
    title: "Egg Freezing",
    category: "introductory",
    description: (
      <>
        Preparing you to be a confident self- advocate as you make decisions
        around fertility preservation.
      </>
    ),
    experts: [
      "Johns Hopkins",
      "Cornell",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 30, // assume clean data in thousands
  },

  {
    uuid: "9a083b06-311c-4e09-82a6-7ea829a08428",
    slug: "adoption",
    title: "Adoption",
    category: "introductory",
    description: (
      <>
        This course covers the crucial steps of domestic infant adoption,
        including the home study, locating expectant parents, validating the
        social medical history form, as well as preparing the hospital plan and
        post-adoption steps. We cover the total costs, timelines as well as
        crucial factors post-adoption.
      </>
    ),
    experts: [],
    view: 0,
  },

  {
    uuid: "109d634e-ea74-4d12-a0b3-394ebe66774d",
    slug: "foster-parenting-101",
    title: "Foster Parenting 101",
    category: "introductory",
    description: (
      <>
        In this course, we&apos;ll cover the steps to starting the foster
        parenting process, how to help children who&apos;ve suffered emotional
        and physical trauma, how to navigate transracial challenges, what the
        process looks like for single and LGBTQ individuals, and the process of
        adopting through the foster care system.
      </>
    ),
    experts: [],
    view: 0,
  },

  {
    uuid: "e823952d-0792-4564-a52c-381cb8128856",
    slug: "workplace-guide-to-fertility-for-colleagues",
    title: "Workplace Guide to Fertility: For Colleagues",
    category: "introductory",
    description: (
      <>
        This workplace guide is meant for colleagues to better understand what
        their co-workers or employees are going through when they need to
        undergo fertility treatments. Includes sensitivity training on what to
        say and not to say when a co- worker is going through infertility or
        needs fertility treatments to build their family
      </>
    ),
    experts: [
      "Harvard",
      "ITB",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 0,
  },

  {
    uuid: "4323f93c-4052-42cc-ae4f-1c34eee40a14",
    slug: "managing-fertility-treatment-and-work",
    title: "Managing Fertility Treatment & Work",
    category: "introductory",
    description: (
      <>
        We share ways to navigate & balance work and career with infertility or
        fertility treatments. Hear from other patients about things that have
        worked for them. Understand more about the impacts of stress on
        fertility, and the ways that fertility logistics will impact work, and
        vise versa.
      </>
    ),
    experts: [
      "Harvard",
      "Johns Hopkins",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 0,
  },

  {
    uuid: "b472fc1c-b60d-4926-a114-b288303f752c",
    slug: "managing-fertility-treatment-and-work",
    title: "Managing Fertility Treatment & Work",
    category: "introductory",
    description: (
      <>
        We share ways to navigate & balance work and career with infertility or
        fertility treatments. Hear from other patients about things that have
        worked for them. Understand more about the impacts of stress on
        fertility, and the ways that fertility logistics will impact work, and
        vise versa.
      </>
    ),
    experts: [
      "Harvard",
      "Johns Hopkins",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 0,
  },

  {
    uuid: "25cf35b4-cc9b-405e-8d83-b98fc1f5247a",
    slug: "fertility-on-a-budget",
    title: "Fertility on a Budget",
    category: "introductory",
    description: (
      <>
        We unpack the major expenses of fertility treatment, discuss how to
        avoid unnecessary (and often costly) add-on options, give an overview of
        insurance coverage, finally we provide expert tips to help you save
        money & avoid overpaying for treatment.
      </>
    ),
    experts: ["NYU", "UCSF", "dummy_filler3", "dummy_filler4", "dummy_filler5"],
    view: 10,
  },

  {
    uuid: "c2774431-c45b-40b8-8b71-42b4bef13cfa",
    slug: "childless-by-circumstance",
    title: "Childless by Circumstance",
    category: "introductory",
    description: (
      <>
        This video course focuses on the experiences of those who desired to
        become parents, but, ultimately, for any reason, find themselves without
        children of their own. We discuss the cultural messages surrounding
        childlessness, the grieving process, and finding support as an
        individual or couple.
      </>
    ),
    experts: [],
    view: 0,
  },

  {
    uuid: "9ea965a4-356b-4e6a-91ab-be8621b75ffb",
    slug: "childless-by-circumstance-a-guide-for-friends-family-and-colleagues",
    title:
      "Childless by Circumstance: A Guide for Friends, Family, & Colleagues",
    category: "introductory",
    description: (
      <>
        Unpacking the experience of those who are childless due to circumstance
        & preparing you to be a supportive person that your non-parent friends,
        family members, & colleagues can rely on.
      </>
    ),
    experts: [],
    view: 0,
  },

  {
    uuid: "2ea6effa-29e2-4d4f-99f6-74eda4bc3ab1",
    slug: "acupuncture",
    title: "Acupuncture",
    category: "introductory",
    description: (
      <>
        Does acupuncture & traditional Chinese medicine really make a difference
        for fertility? See the data on IVF, other fertility treatments, and
        trying naturally with acupuncture and Chinese herbs.
      </>
    ),
    experts: [],
    view: 41,
  },

  {
    uuid: "f94bf67e-a83d-47bf-abf8-90556a0d672e",
    slug: "embryo-transfer",
    title: "Embryo Transfer",
    category: "introductory",
    description: (
      <>
        We cover how many embryos to transfer, medicated vs. unmedicated cycles,
        fresh vs. frozen, and the do&apos;s and don&apos;ts on transfer day
        itself.
      </>
    ),
    experts: [],
    view: 145,
  },

  {
    uuid: "ae381027-9c41-4e53-969f-a2a7c48f03e5",
    slug: "low-testosterone-in-men",
    title: "Low Testosterone in Men",
    category: "introductory",
    description: (
      <>
        This course explores testosterone&apos;s role in male health, addressing
        causes and symptoms of low levels. Learn about diagnosis, treatments,
        and lifestyle interventions aimed at optimal well-being.
      </>
    ),
    experts: [
      "Cornell",
      "UCSF",
      "dummy_filler3",
      "dummy_filler4",
      "dummy_filler5",
    ],
    view: 145,
  },
];

export { courses };
