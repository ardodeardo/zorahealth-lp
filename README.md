<div align="center">
  <h1 align="center" style="font-weight:bold">Z O R A&nbsp;&nbsp;H E A L T H</h1>
  <p align="center">
    Frontend Engineer Take Home Test
    <br /><br />
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/61144146/406743365-838acbea-091b-412d-8e7b-15834774a31a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250126T153630Z&X-Amz-Expires=300&X-Amz-Signature=27f67f700fae3102307214c1751cbf0414997b41ace8027069cef03d99ec41e9&X-Amz-SignedHeaders=host">
  </p>
</div>


## About The Project
Hi there!
This repo was specifically created for Zora Health - Frontend Engineer test. 

At the beginning, the test comes with a Figma consists of 2 screenshot image of the design page and several static assets, yet to ensure the frontend implementation, i **_recreate_** the design of the pages by tracing the original screenshot. please kindly take a look at the [Figma Design](https://www.figma.com/design/BwFcOEQSBZjsEkfNkTS37N/ardodeardo---Zora-Health?node-id=1302-6&t=eIA1tCTKh8uzOSvG-1) (might need to sign in as a Figma user to see more about the layers and design implementation) :v:

The deployed version of this landing page can be found at [ardodeardo-zorahealth-lp.vercel.app](https://ardodeardo-zorahealth-lp.vercel.app/). When trying out the live version of this landing page, please kindly check and give it a try for some of it's features on each page:

**

**Page A (/courses)**
 - Category Tab: will trigger courses card filter based on selected category
 - Courses: All courses cards will be redirected to Page B (/courses/[slug])
 - Popular Lessons: All cards will be redirected to Lessons page (/lessons/[slug] - *an additional placeholder page only*) 
 - Quick Reads
	 - All cards will be redirected to Articles page (/articles/[slug] - *an additional placeholder page only*)
	 - Show more button will trigger more cards
- Explore Topics: Each list will be redirected to Topics page (/topics/[slug] - *an additional placeholder page only*) 

**Page B (/courses[slug])**
- Hero: *dynamic* hero title based on the selected slug (selected card on Page A)
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

## Built With
This is a [Next.js](https://nextjs.org/) (v15.1.6 - App Router) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project was built with some extra dependencies, such as:
 - [Embla Carousel](https://www.embla-carousel.com/): A lightweight carousel library with fluid motion and great swipe precision.
 - [Lucide Icon](https://lucide.dev/guide/): An open-source icon library that provides 1000+ vector (svg).
 - [cva](https://cva.style/docs), [clsx](https://www.npmjs.com/package/clsx), [tailwind-merge](https://www.npmjs.com/package/clsx): Tiny CSS utilities to support and speed up the development


## Quick tour of the structure

All the folders below is considered as the core structure for a quick explanation of the project structure

```
zorahealth-lp
└── app
  └── (pages)
	  ├── articles
	  ├── courses
		  ├── page.tsx // page A
		  └── [slug]
			  ├── page.tsx // page B
			  └── ...
	  ├── lessons
	  └── topics
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
-   [Node.js 18.18](https://nodejs.org/)  or later.
-  [npm 10.8.*](https://www.npmjs.com/)  or later

**Installation**
 1. Clone the repository
	 ```
	 git clone https://github.com/ardodeardo/zorahealth-lp.git
	 ```
 2. Install the dependencies
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
