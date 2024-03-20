import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Full Stack",
    title: "Cer03",
    description:
      "Cero03 es una plataforma digital que ayuda a pequeños y grandes negocios a vender y administrar sus productos de forma simple y eficiente.",
    technologies: [
      "React",
      "Redux",
      "Tailwind css",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    siteUrl: "https://cer03.vercel.app/",
    repositoriesUrl: "https://github.com/jeisson333/Cer03",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Full Stack",
    title: "Dogs - MaxMas",
    description:
      "Maxmas: plataforma web para explorar y estudiar 200+ razas de perros globalmente. Ofrece información detallada sobre historia, características y temperamento. Permite a usuarios contribuir con datos como peso, altura y origen, fomentando participación comunitaria.",
    technologies: [
      "React",
      "Redux",
      "Css Module",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    siteUrl: "https://deployfrontend-wheat.vercel.app/",
    repositoriesUrl: "https://github.com/jeisson333/PI-Dogs-main",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Front End",
    title: "Zombieland",
    description:
      "Proyecto de juego 2D en JavaScript con Phaser: 10 niveles desafiantes donde un guerrero atraviesa laberintos en busca de llaves. Recolecta monedas para mejorar y enfrenta zombies cada vez más rápidos y numerosos. Sumérgete en esta aventura llena de acción y demuestra tus habilidades para superar cada desafío",
    technologies: ["JavaScript", "Canvas"],
    siteUrl: "https://jeisson333.github.io/zombieland/",
    repositoriesUrl: "https://github.com/jeisson333/zombieland",
  },
];

export default portfolios;
