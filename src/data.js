import dashboardImg from "./assets/dashboard.png";
import scraperImg from "./assets/scraper.png";
import portfolioImg from "./assets/portfolio.png"; // Make sure the extension matches (.png vs .jpg)

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A responsive dashboard for tracking sales and inventory using React and Tailwind.",
    image: dashboardImg, // We use the variable name here, not a string
    link: "#",
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
