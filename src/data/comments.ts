import { Comment } from "./interfaces";

import image1 from "./../assets/commenter-1.png";
import image2 from "./../assets/commenter-2.png";
import image3 from "./../assets/commenter-3.png";
import image4 from "./../assets/commenter-4.png";

const comments: Comment[] = [
  {
    id: 1,
    commenter: {
      name: "Jane Cooper",
      image: image1,
    },
    content: "Rashford!!!!! *Chefs kiss* 🤌😘",
    timeStamp: "12:45",
    isNew: false,
  },
  {
    id: 2,
    commenter: {
      name: "Wade Warren",
      image: image2,
    },
    content: "GOALLLLL",
    timeStamp: "12:45",
    isNew: false,
  },
  {
    id: 3,
    commenter: {
      name: "Jenny Wilson",
      image: image3,
    },
    content: "Best game of football this year. Nice one lads!",
    timeStamp: "12:45",
    isNew: false,
  },
  {
    id: 4,
    commenter: {
      name: "Savannah Nguyen",
      image: image4,
    },
    content: "You guys are hilarious, I love how stressed Kevin is getting. That man loves his football.",
    timeStamp: "12:45",
    isNew: true,
  },
];

export default comments;
