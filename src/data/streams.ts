import { Stream } from "./interfaces";
import categories from "./streamCategories";

import image1 from "./../assets/stream-thumbnail-1.png";
import image2 from "./../assets/stream-thumbnail-2.png";
import image3 from "./../assets/stream-thumbnail-3.png";
import image4 from "./../assets/stream-thumbnail-4.png";
import image5 from "./../assets/stream-thumbnail-5.png";
import image6 from "./../assets/stream-thumbnail-6.png";
import image7 from "./../assets/stream-thumbnail-7.png";
import image8 from "./../assets/stream-thumbnail-8.png";
import image9 from "./../assets/stream-thumbnail-9.png";

const streams: Stream[] = [
  {
    id: 1,
    name: "Super Bowl",
    image: image1,
    url: "",
    categories: [categories[0], categories[1]],
  },
  {
    id: 2,
    name: "Cycling",
    image: image2,
    url: "",
    categories: [categories[2], categories[3]],
  },
  {
    id: 3,
    name: "Rugby World Cup",
    image: image3,
    url: "",
    categories: [categories[4], categories[5]],
  },
  {
    id: 4,
    name: "Baseball World Series",
    image: image4,
    url: "",
    categories: [categories[6], categories[7]],
  },
  {
    id: 5,
    name: "F1",
    image: image5,
    url: "",
    categories: [categories[1], categories[6]],
  },
  {
    id: 6,
    name: "FIFA WWC",
    image: image6,
    url: "",
    categories: [categories[2], categories[5]],
  },
  {
    id: 7,
    name: "Ryder Cup",
    image: image7,
    url: "",
    categories: [categories[1], categories[4]],
  },
  {
    id: 8,
    name: "Wimbledon Championship",
    image: image8,
    url: "",
    categories: [categories[0], categories[4]],
  },
  {
    id: 9,
    name: "Golf Masters",
    image: image9,
    url: "",
    categories: [categories[0], categories[4]],
  },
];

export default streams;
