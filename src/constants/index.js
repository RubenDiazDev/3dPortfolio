import {
  bootstrap,
  contact,
  css,
  drupal,
  figma,
  film,
  git,
  github,
  html,
  todolist,
  javascript,
  nextjs,
  nodejs,
  photos,
  react,
  sass,
  snap,
  maker,
  tailwindcss,
  game,
  wordpress,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  { imageUrl: git, name: "Git", type: "Version Control" },
  {
    imageUrl: drupal,
    name: "Drupal",
    type: "CMS",
  },

  {
    imageUrl: wordpress,
    name: "WordPress",
    type: "CMS",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "UX/UI",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
];

export const projects = [
  {
    iconUrl: snap,
    theme: "btn-back-pink",
    name: "Image Fetching App",
    description:
      "Built a web application that fetches copyright free images , helping users to find their favourite art and being capable of using it without risk of being sued...for now.",
    link: "https://fotofetched.netlify.app/",
  },
  {
    iconUrl: game,
    theme: "btn-back-green",
    name: "Snake Game",
    description:
      "Created a  replica of the all mighty Nokia Snake. It is a popular Snake game with a few improvements enabling users to replay this awesome game from the 90s with their computers and mobile phones.",
    link: "https://rubensnakegame.netlify.app/",
  },
  {
    iconUrl: photos,
    theme: "btn-back-red",
    name: "Photographer Website",
    description:
      "Designed and built an aesthetically beautiful fully responsive website making use of grids and flexbox.This was one of my very first projects and it has a special place in my heart.",
    link: "https://harukisatophotograph.netlify.app/",
  },
  {
    iconUrl: maker,
    theme: "btn-back-blue",
    name: "Beatmaker App",
    description:
      "I made this very colourful beatmaker app wich allow users to create their own tunes using a variety of sounds, rythm and tempo controls.It is fully responsive and can be used on any device.",
    link: "https://beatmker.netlify.app/",
  },
  {
    iconUrl: film,
    theme: "btn-back-black",
    name: "Next.js Film Website",
    description:
      "This is a Next.js film searcher website with a fully responsive design styled using tailwind CSS. The website allows users to search for any movie and get more information about it.",
    link: "https://film-database-indol.vercel.app/",
  },
  {
    iconUrl: todolist,
    theme: "btn-back-yellow",
    name: "To Do List Application",
    description:
      "This to-do list app allows users to create, edit, and delete tasks. It is a classic web application in every portfolio.",
    link: "https://t0dolistpjct.netlify.app/",
  },
];
