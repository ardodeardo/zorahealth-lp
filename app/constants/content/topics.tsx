import { Topic } from "@/app/interfaces/topic";

const topics: Array<Topic> = [
  {
    uuid: "7524aff0-bfa2-47d6-adac-a40dba35ef0d",
    slug: "ivf-and-fertility-treatments",
    title: "IVF & Fertility Treatments",
    view: 999, // assume clean data in thousands
  },

  {
    uuid: "106cbc70-031d-4274-90f8-0e60acd93c19",
    slug: "preparing-mind-and-body",
    title: "Preparing Mind & Body",
    view: 135, // assume clean data in thousands
  },
  {
    uuid: "6a7ab7a8-8d3f-4504-9c46-01017ca1ccec",
    slug: "egg-freezing",
    title: "Egg Freezing",
    view: 242, // assume clean data in thousands
  },

  {
    uuid: "a47d57fd-7e35-4f96-95ed-648d3afae4b1",
    slug: "race-and-ethnicity",
    title: "Race & Ethnicity",
    view: 14, // assume clean data in thousands
  },
  {
    uuid: "0fe36301-7de7-4409-be92-c3f00a5e09a3",
    slug: "adoption-and-foster",
    title: "Adoption & Foster",
    view: 15, // assume clean data in thousands
  },
  {
    uuid: "e7cf3c53-2c24-444c-a7b0-46fc9adde018",
    slug: "fertility-diagnoses",
    title: "Fertility Diagnoses",
    view: 144, // assume clean data in thousands
  },
  {
    uuid: "35afcd40-278e-4a4b-8f8a-303c98aa74de",
    slug: "grief-and-loss",
    title: "Grief & Loss",
    view: 30, // assume clean data in thousands
  },
];

export { topics };
