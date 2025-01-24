import React from "react";
import Link from "next/link";

function HeaderMenu() {
  const nav: Array<{
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
      title: "Sign In",
      slug: "signin",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-x-7">
        {nav.map((item) => {
          const { title, slug } = item;

          return (
            <li key={slug}>
              <Link
                href={slug}
                className="text-sm font-semibold hover:underline underline-offset-2"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
