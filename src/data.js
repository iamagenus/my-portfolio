import dashboardImg from "./assets/dashboard.png";
import scraperImg from "./assets/scraper.png";
import portfolioImg from "./assets/portfolio.png"; // Make sure the extension matches (.png vs .jpg)

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce website built with Wordpress and Breakdance.",
    image: dashboardImg, // We use the variable name here, not a string
    link: "https:www.rlpartssupply.com",
  },
  {
    id: 2,
    title: "Python Web Scraper",
    description:
      "A script that extracts product data from supplier websites using Scrapy and Playwright.",
    image: scraperImg,
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This website! Built with React, Vite, and Tailwind CSS to showcase my work.",
    image: portfolioImg,
    link: "#",
  },
];
