import FrontendImage from "../assets/images/abilities/frontend.png";
import BackendImage from "../assets/images/abilities/backend.png";

export const abilities = [{
  id: 1,
  name: "FRONT-END",
  image: FrontendImage.src,
  alt: "Front-end",
  knowledges: [{
    id: 1,
    name: "ReactJS"
  }, {
    id: 2,
    name: "Next"
  }, {
    id: 3,
    name: "HTML/CSS/SASS"
  },
  {
    id: 4,
    name: "Styled Components"
  }, {
    id: 5,
    name: "Chakra UI"
  },]
}, {
  id: 2,
  name: "BACK-END",
  image: BackendImage.src,
  alt: "Back-end",
  knowledges: [{
    id: 1,
    name: "Node.js"
  }, {
    id: 2,
    name: "Express"
  }, {
    id: 3,
    name: "TypeORM"
  }]
}];