import type { Syllabus } from "@/app/interfaces/syllabus";

/*
    in real case, this syllabus might be inside every course,
    but for dummy simplicity, lets make it as if they are separated for each others
*/
const syllabus: Syllabus = [
  {
    uuid: "24b25b87-412e-4ae2-af50-2a0440c7faba",
    title: "What is IVF?",
    duration: 8,
    items: [
      {
        uuid: "dcf16dcb-46ca-4acb-8e0d-41ef63931038",
        slug: "summary-of-the-ivf-process",
        title: "Summary of The IVF Process",
      },
      {
        uuid: "f19c9c76-7924-4e22-a46a-be402a83192d",
        slug: "why-do-ivf-who-does-it-help",
        title: "Why do IVF? Who does it help?",
      },
      {
        uuid: "852d8420-adaa-44f4-af39-51c633ed0c5e",
        slug: "success-rates-how-often-does-ivf-work",
        title: "Success Rates: how Often Does IVF Work?",
      },
      {
        uuid: "4f9dad4f-43b4-4a2c-88f9-48e44f1d7506",
        slug: "ivf-compared-to-other-fertility-treatments",
        title: "IVF Compared to Other Fertility Treatments",
      },
    ],
  },
  {
    uuid: "7a6b8d82-b5f1-4c5d-b8f0-fae8a1b890ce",
    title: "The Steps and Decisions In The IVF Process",
    duration: 14,
    items: [
      {
        uuid: "2d5ef0c5-473a-4e78-a66e-89d73246f8e6",
        slug: "overview-of-ivf-steps",
        title: "Overview of IVF Steps",
      },
      {
        uuid: "5b9e8b74-341f-4f77-9236-b97c8c72af29",
        slug: "choosing-an-ivf-protocol",
        title: "Choosing an IVF Protocol",
      },
      {
        uuid: "3ea8d8d0-d967-488b-9419-f9d8f1616a9a",
        slug: "medications-and-monitoring",
        title: "Medications and Monitoring in IVF",
      },
      {
        uuid: "6e3a2973-308d-4b0e-b1d8-3f6f8d82e5b3",
        slug: "making-embryo-transfer-decisions",
        title: "Making Embryo Transfer Decisions",
      },
    ],
  },
  {
    uuid: "4a8f7b9a-3e97-4e16-9145-2e9dc5e2c2d4",
    title: "IVF Success Rate",
    duration: 4,
    items: [
      {
        uuid: "81d24762-6e7f-4943-b9d4-52645b8d3b87",
        slug: "understanding-success-factors",
        title: "Understanding Success Factors",
      },
      {
        uuid: "fac4d4f6-9d85-4f9c-b8fd-3c9e1fbe8714",
        slug: "age-and-ivf-outcomes",
        title: "Age and IVF Outcomes",
      },
      {
        uuid: "9dfab356-d03c-4e6e-8d46-9f5cfcc3eb4a",
        slug: "clinic-selection-impact",
        title: "How Clinic Selection Impacts Success",
      },
      {
        uuid: "ea47b3c9-ef59-493a-bde1-8314c8654b71",
        slug: "optimizing-ivf-results",
        title: "Tips for Optimizing IVF Results",
      },
    ],
  },
  {
    uuid: "c176dc91-df69-45d5-91d6-63a11b9c3726",
    title: "Ovarian Stimulation Protocols",
    duration: 44,
    items: [
      {
        uuid: "69e4172f-c6a9-40f4-87df-4e75fd02c1d5",
        slug: "individualized-stimulation",
        title: "What is Individualized Stimulation?",
      },
      {
        uuid: "93b8d713-36c3-4d4d-8158-821bfafec94d",
        slug: "antagonist-vs-long-protocol",
        title: "Antagonist vs. Long Protocols",
      },
      {
        uuid: "ff7af819-45c9-46c4-9158-c5c89b91b4c5",
        slug: "monitoring-during-stimulation",
        title: "Monitoring During Ovarian Stimulation",
      },
      {
        uuid: "48e3a2f6-c3b7-4fdb-b5c3-cdb7322c42f6",
        slug: "side-effects-and-risks",
        title: "Side Effects and Risks of Stimulation",
      },
    ],
  },
  {
    uuid: "3e6ab7c5-fc4e-464c-810d-d7196d75852d",
    title: "Conventional Insemination or ICSI",
    duration: 9,
    items: [
      {
        uuid: "a7d5e2f9-6725-41d6-bfa9-8db3a3c761cf",
        slug: "differences-between-methods",
        title: "Differences Between Insemination and ICSI",
      },
      {
        uuid: "d25f9cb7-c25e-4b1e-97d8-b4e5f6b7194f",
        slug: "when-to-choose-icsi",
        title: "When to Choose ICSI",
      },
      {
        uuid: "5fcab872-f1e6-4e8a-9c75-3ea7f4c1b26b",
        slug: "icsi-success-rates",
        title: "ICSI Success Rates",
      },
      {
        uuid: "c7f9a825-94d7-42f8-9e6c-2b46f3d8b4df",
        slug: "risks-of-icsi-and-conventional",
        title: "Risks of ICSI and Conventional Insemination",
      },
    ],
  },
];

export { syllabus };
