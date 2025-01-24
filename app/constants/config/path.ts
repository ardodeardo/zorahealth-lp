interface Path {
  host: string;
  image: string;
  icon: string;
  font: string;
  defaultImage: string;
  defaultCta: string;
}

const domain: { [key: string]: string } = {
  local: "http://localhost:3030",
  vercel: "https://zora-landingpage.vercel.app",
  production: process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || "",
};

const static_domain = {
  local: "/",
  pub: "", // cdn url
  production: process.env.NEXT_PUBLIC_PRODUCTION_STATIC_DOMAIN || "",
};

const STATIC_ROOT: string =
  process.env.NODE_ENV === "production"
    ? static_domain["production"]
    : static_domain["local"];

const HOST: string =
  process.env.NODE_ENV === "production"
    ? domain["production"]
    : domain["local"];

export const PATH: Path = {
  host: HOST,
  image: STATIC_ROOT.concat("images/"),
  icon: STATIC_ROOT.concat("icons/"),
  font: STATIC_ROOT.concat("fonts/"),
  defaultImage: STATIC_ROOT.concat("images/common/defaultImage.png"),
  defaultCta: "https://zorahealth.co/",
};
