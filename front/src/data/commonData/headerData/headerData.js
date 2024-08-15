import {
  FiHome,
  FiInfo,
  FiPhone,
  FiBriefcase,
  FiSliders,
  FiBox,
} from "react-icons/fi";


import owlIcon from '../headerData/owl- black.png'
import waspIcon from '../headerData/wasp - gold and yellow.png'
import demoIcon from "../../person.png";

// Navigation menu items with icons, URLs, and submenus
const headerMenu = [
  {
    name: { en: "Home", tamil: "முகப்பு" },
    url: "/",
    icon: <FiHome />,
  },
  {
    name: { en: "About Us", tamil: "எங்களை பற்றி" },
    url: "/about",
    icon: <FiInfo />,
  },
  {
    name: { en: "Contacts", tamil: "தொடர்பு கொள்ள" },
    url: "/contact",
    icon: <FiPhone />,
  },
  // {
  //   name: { en: "Careers", tamil: "பணியாளர் வேலைகள்" },
  //   url: "/careers",
  //   icon: <FiBriefcase />,
  //   submenu: [
  //     {
  //       name: { en: "Internship", tamil: "தொழில்நுட்ப அனுமதி" },
  //       url: "/careers/internship",
  //       image: demoIcon,
  //       description:
  //         "Explore internship opportunities at Imaggar and integrate your skills with your favorite tools.",
  //     },
  //     {
  //       name: { en: "Job Openings", tamil: "வேலை விளக்கம்" },
  //       url: "/careers/job-openings",
  //       image: demoIcon,
  //       description:
  //         "Discover job openings at Imaggar and integrate your career with your favorite tools.",
  //     },
  //   ],
  // },
  {
    name: { en: "Services", tamil: "சேவைகள்" },
    url: "/services",
    icon: <FiSliders />,
    submenu: [
      {
        name: { en: "MaaS", tamil: "விபரீதமான சேவை" },
        url: "/services/maas",
        image: demoIcon,
        description:
          "Integrate Imaggar's Marketing as a Service with your favorite tools.",
      },
      {
        name: { en: "SDaaS", tamil: "மென்பொருள் வளங்கள் அணுகல் சேவை" },
        url: "/services/sdaas",
        image: demoIcon,
        description:
          "Integrate Imaggar's Software Development as a Service with your favorite tools.",
      },
      {
        name: { en: "VMaaS", tamil: "ஏவுகலும் அணுகல் சேவை" },
        url: "/services/vmaas",
        image: demoIcon,
        description:
          "Integrate Imaggar's Vulnerability Management as a Service with your favorite tools.",
      },
    ],
  },
   {
     name: { en: "Products", tamil: "தயாரிப்புகள்" },
     url: "/products",
     icon: <FiBox />,
     submenu: [
       {
         name: { en: "W.A.S.P", tamil: "உள்ளமைவு அறிவிப்பு கருவி" },
         url: "/products/w.a.s.p",
         icon : "https://drive.google.com/file/d/1LAn43FeAcnGsIj5E8nAe0xl_t9Q-VLug/view?usp=sharing",
         description:
           "Integrate Imaggar's S.I.T.E product with your favorite tools.",
       },
       {
         name: { en: "O.W.L", tamil: "முக்கிய பொருள் மைய கருவி" },
         url: "/products/o.w.l",
         icon: "https://drive.google.com/file/d/1TBkCHVniGF1bBJVZ7Jte27AppbvCu-H1/view?usp=sharing",
         description:
           "Integrate Imaggar's C.O.R.E product with your favorite tools.",
       },
      
     ],
   },
];

export default headerMenu;
