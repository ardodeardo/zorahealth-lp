import React from "react";
import Link from "next/link";

function FooterBacklink() {
  const backlink: Array<{
    title: string;
    slug: string;
  }> = [
    {
      title: "Courses",
      slug: "courses",
    },
    {
      title: "Find a Doctor",
      slug: "doctors",
    },
    {
      title: "For Employers",
      slug: "employers",
    },
    {
      title: "For Doctors and Clinics",
      slug: "clinics",
    },
    {
      title: "All US Providers",
      slug: "providers",
    },

    {
      title: "info@fertilityiq.com",
      slug: "mailto:info@fertilityiq.com",
    },
    {
      title: "Terms of Use",
      slug: "termsofuse",
    },
    {
      title: "Privacy Policy",
      slug: "privacypolicy",
    },
    {
      title: "FAQs",
      slug: "faq",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-5">
      {backlink.map((item) => {
        const { title, slug } = item;

        return (
          <li key={slug}>
            <Link
              href={slug}
              className="text-sm font-semibold underline underline-offset-2 text-white"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterBacklink;
