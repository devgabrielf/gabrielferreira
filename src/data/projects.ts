import Perguntai1Img from "../assets/images/perguntai/perguntai1.png";
import Perguntai2Img from "../assets/images/perguntai/perguntai2.png";
import Perguntai3Img from "../assets/images/perguntai/perguntai3.png";

import Dashgo1Img from "../assets/images/dashgo/dashgo1.png";
import Dashgo2Img from "../assets/images/dashgo/dashgo2.png";
import Dashgo3Img from "../assets/images/dashgo/dashgo3.png";

import Portfolio1Img from "../assets/images/portfolio/portfolio1.png";

import Calculadora1Img from "../assets/images/calculadora/calculadora1.png";

import FlappyDuck1Img from "../assets/images/flappyduck/flappyduck1.png";
import FlappyDuck2Img from "../assets/images/flappyduck/flappyduck2.png";

export const projects = [{
  id: 1,
  description: "Website de perguntas e respostas no qual os usuários podem" +
  " criar e entrar em salas, realizar perguntas, postar responsas e curtir" +
  " as postagens das outras pessoas. O login é feito através da conta do" +
  " Google e o banco de dados utilizado foi o Realtime Database do Firebase.",
  technologies: "ReactJS, Firebase, SASS",
  repository: "https://github.com/devgabrielf/perguntai",
  pics: [{
    id: 1,
    src: Perguntai1Img.src
  },{
    id: 2,
    src: Perguntai2Img.src
  },{
    id: 3,
    src: Perguntai3Img.src
  }]
}, {
  id: 2,
  description: "Dashboard desenvolvido durante a trilha de ReactJS do bootcamp" +
  " Ignite da Rocketseat, com o qual aprendi sobre a construção de interfaces" +
  " modernas, responsivas e acessíveis com o Chakra UI.",
  technologies: "NextJS, Chakra UI, MirageJS, ApexChartsJS, ReactQuery, Faker",
  repository: "https://github.com/devgabrielf/dashgo",
  pics: [{
    id: 1,
    src: Dashgo1Img.src
  },{
    id: 2,
    src: Dashgo2Img.src
  },{
    id: 3,
    src: Dashgo3Img.src
  }]
}, {
  id: 3,
  description: "Nada mais justo que este próprio portifólio apareça aqui também :)",
  technologies: "NextJS, Chakra UI, Express, Nodemailer",
  repository: "https://github.com/devgabrielf/portfolio",
  pics: [{
    id: 1,
    src: Portfolio1Img.src
  }]
}, {
  id: 4,
  description: "Calculadora 100% funcional. Meu primeiro projeto utilizando" +
  " ReactJS. Disponível no link https://devgabrielf.github.io/calculadora/.",
  technologies: "ReactJS, CSS",
  repository: "https://github.com/devgabrielf/calculadora",
  pics: [{
    id: 1,
    src: Calculadora1Img.src
  }]
}, {
  id: 5,
  description: "Jogo que imita o famoso Flappy Bird. Uma de minhas primeiras" +
  " aplicações web, desenvolvida apenas com JS, HTML e CSS. Disponível no link" +
  " https://devgabrielf.github.io/flappy-duck/.",
  technologies: "JavaScript, HTML, CSS",
  repository: "https://github.com/devgabrielf/flappy-duck",
  pics: [{
    id: 1,
    src: FlappyDuck1Img.src
  }, {
    id: 2,
    src: FlappyDuck2Img.src
  }]
}];