import { User } from "./interfaces";

import image1 from './../assets/user-1.png';
import image2 from './../assets/user-2.png';
import image3 from './../assets/user-3.png';
import image4 from './../assets/user-4.png';
import image5 from './../assets/user-5.png';
import image7 from './../assets/user-7.png';

const channelList: User[] = [
    {
        id: 1,
        name: "Doigby",
        image: image1,
        isPopular: true,
        streamTag: "WorldCup24",
        viewerNumber: 423
    },
    {
        id: 2,
        name: "BagheraJones",
        image: image2,
        isPopular: false,
        streamTag: "SuperBowl",
        viewerNumber: 740
    },
    {
        id: 3,
        name: "AngleDroit",
        image: image3,
        isPopular: false,
        streamTag: "TourdeFrance",
        viewerNumber: 429
    },
    {
        id: 4,
        name: "Gom4rt",
        image: image4,
        isPopular: true,
        streamTag: "RugbyWorldCup",
        viewerNumber: 453
    },
    {
        id: 5,
        name: "Horty_",
        image: image5,
        isPopular: false,
        streamTag: "GranPrix",
        viewerNumber: 185
    },
    {
        id: 2,
        name: "BagheraJones",
        image: image2,
        isPopular: false,
        streamTag: "WorldCup24",
        viewerNumber: 561
    },
    {
        id: 6,
        name: "Joueur_du_Grenier",
        image: image7,
        isPopular: false,
        streamTag: "CommonwealthGames",
        viewerNumber: 357
    },
  ];
  
  export default channelList;
  