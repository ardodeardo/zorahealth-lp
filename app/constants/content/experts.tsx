import type { Expert } from "@/app/interfaces/expert";

const experts: Array<Expert> = [
  {
    uuid: "7524aff0-bfa2-47d6-adac-a40dba35ef0d",
    name: "Dr. Torie Comeaux Plowden",
    roles: [<>Assistant Division Director wlater Reed Medical Center</>],
    image: {
      url: "torie.png",
      alt: "Dr. Torie Comeaux Plowden",
    },
  },
  {
    uuid: "e49a1db6-cbed-46b1-bd25-3a0957d27d6b",
    name: "Dr. Chantel Cross",
    roles: [<>Associate Director Johns Hopkins School of Medicine</>],
    image: {
      url: "chantel.png",
      alt: "Dr. Chantel Cross",
    },
  },
  {
    uuid: "341a1721-085d-4f57-93f5-60314dbf1a73",
    name: "Dr. Caroline McCaffrey",
    roles: [<>Laboratory Director NYU School of Medicine</>],
    image: {
      url: "caroline.png",
      alt: "Dr. Caroline McCaffrey",
    },
  },
  {
    uuid: "0d34eef6-4441-4900-8d74-422d7dfe286e",
    name: "Dr. Christian M. Becker",
    roles: [
      <>Co-Director, Oxford BSGE Endometriosis Centre</>,
      <>Associate Professor, Oxford University United Kindgom</>,
    ],
    image: {
      url: "christian.png",
      alt: "Dr. Christian M. Becker",
    },
  },
  {
    uuid: "34d76fbe-bd8c-4d01-a951-ddc5d739e727",
    name: "Dr. Eric Forman",
    roles: [<>Medical Director Columbia University Medical Center</>],
    image: {
      url: "eric.png",
      alt: "Dr. Eric Forman",
    },
  },
  {
    uuid: "ded8cdd0-21c7-46fa-9f2c-281e703549d0",
    name: "Dr. Nalini Kaul (Mahajan)",
    roles: [
      <>
        Director, Mother & Child Hospital Scientific Director, Ferticity
        Fertility Clinincs India
      </>,
    ],
    image: {
      url: "nalini.png",
      alt: "Dr. Nalini Kaul (Mahajan)",
    },
  },
];

export { experts };
