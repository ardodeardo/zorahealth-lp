<div align="center">
  <h1 align="center" style="font-weight:bold">Z O R A&nbsp;&nbsp;H E A L T H</h1>
  <p align="center">
    Frontend Engineer Take Home Test
    <br /><br />
    <img src="./public//images/cover.png">
  </p>
</div>

## About The Project

Hi there!
This repo was specifically created for Zora Health - Frontend Engineer test.

**Introduction**

At the beginning, the test comes with a Figma consists of 2 screenshot image of the design page and several static assets, yet to ensure the frontend implementation, i **_recreate_** the design of the pages by tracing the original screenshot. please kindly take a look at the [Figma Design](https://www.figma.com/design/BwFcOEQSBZjsEkfNkTS37N/ardodeardo---Zora-Health?node-id=1302-6&t=eIA1tCTKh8uzOSvG-1) (might need to sign in as a Figma user to see the details of layers and design implementation). In addition, i also create the Figma [Prototype](https://www.figma.com/proto/BwFcOEQSBZjsEkfNkTS37N/ardodeardo---Zora-Health?node-id=1304-8&t=28PptMBvnN44IhG1-1&scaling=scale-down&content-scaling=fixed&page-id=1302%3A6&starting-point-node-id=1304%3A8). Feel free trying to click/hover the elements (course card, topics list, syllabus accordion, and the carousel) :v:

**Implementation**

The deployed version of this landing page can be found at [ardodeardo-zorahealth-lp.vercel.app](https://ardodeardo-zorahealth-lp.vercel.app/). When trying out the live version of this landing page, please kindly check and give it a try for some of it's features on each page:

**Page A (/courses)**

- Category Tab: will trigger courses card filter based on selected category
- Courses: All courses cards will be redirected to Page B (/courses/[slug])
- Popular Lessons: All cards will be redirected to Lessons page (/lessons/[slug] - _an additional placeholder page only_)
- Quick Reads
  - All cards will be redirected to Articles page (/articles/[slug] - _an additional placeholder page only_)
  - Show more button will trigger more cards
- Explore Topics: Each list will be redirected to Topics page (/topics/[slug] - _an additional placeholder page only_)

**Page B (/courses[slug])**

- Hero: _dynamic_ hero title based on the selected slug (selected card on Page A)
- Experts: Show more button will trigger more cards
- Course Syllabus: collapse/expand accordion component
- Carousel: testimonial carousel content
- Other Courses:
  - Suggested/filtered courses other than the selected one (simulate suggested content)
  - All courses cards will be redirected to Page B (/courses/[slug])

**Extras**

- The design was only provide the desktop viewport, yet i try to adapt the implementation with the most basic responsive pattern of frontend implementation such as:
  - horizontal stacking flex element
  - grid column adjustments
  - text size adjustments

**Keypoint**

- Live Website: [Open](https://ardodeardo-zorahealth-lp.vercel.app/)
- Recreated Figma Design: [Open](https://www.figma.com/design/BwFcOEQSBZjsEkfNkTS37N/ardodeardo---Zora-Health?node-id=1302-6&t=eIA1tCTKh8uzOSvG-1)
- Recreated Figma Prototype: [Open](https://www.figma.com/proto/BwFcOEQSBZjsEkfNkTS37N/ardodeardo---Zora-Health?node-id=1304-8&t=28PptMBvnN44IhG1-1&scaling=scale-down&content-scaling=fixed&page-id=1302%3A6&starting-point-node-id=1304%3A8)

## Built With

This is a [Next.js](https://nextjs.org/) (v15.1.6 - App Router) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project was built with some extra dependencies, such as:

- [Embla Carousel](https://www.embla-carousel.com/): A lightweight carousel library with fluid motion and great swipe precision.
- [Lucide Icon](https://lucide.dev/icons/): An open-source icon library that provides 1000+ vector (svg).
- [cva](https://cva.style/docs), [clsx](https://www.npmjs.com/package/clsx), [tailwind-merge](https://www.npmjs.com/package/clsx): Tiny sized CSS utilities to support and speed up the development.

## Quick tour of the structure

All the folders below is considered as the core structure for a quick explanation of the project structure

```
zorahealth-lp
└── app
  └── (pages)
	  ├── articles
	  └── courses
		  ├── page.tsx // page A
		  ├── ...
		  └── [slug]
			  ├── page.tsx // page B
			  └── ...
	  ├── lessons
	  ├── topics
	  └── page.tsx // homepage will always redirected to page A
  ├── components
	  ├── Accordion
	  ├── Card
	  ├── common // Header, Footer, Carousel, Button
	  ├── Hero
	  ├── List
	  └── Tab
  ├── constants
	  ├── config
	  ├── content // all dummy content
	  └── thumbnail
  ├── helper
  └── interfaces
├── lib
├── public
└── ...
```

## Getting Started

**System Requirements**

- [Node.js 18.18](https://nodejs.org/) or later
- [npm 10.8.\*](https://www.npmjs.com/) or later

**Installation**

1.  Clone the repository
    ```
    git clone https://github.com/ardodeardo/zorahealth-lp.git
    ```
2.  Install the dependencies
    ```
    cd zorahealth-lp
    ```
    ```
    npm run install
    ```

**First Run**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
