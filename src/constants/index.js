import { people01, people02, people03, binance, coinbase, support, shield, star, paxos, tradingView  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Our best contracts offer some mouthwatering combinations of essential capital and profit",
      link: "/about-us"
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
      link: "/about-us"
  },
  {
    id: "feature-3",
    icon: support,
    title: "Integrated Support",
    content:
      "Functional support team ready to take on your challenges updating you on our trading plans and services.",
      link: "/about-us"
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "This company maintains its top position for exceptional customer service and prompt payments. Kudos to you!",
    name: "Herman Jensen",
    title: "Banker",
    img: people01,
  },
  {
    id: "feedback-2", 
    content:
      "I've been navigating the investment world since my teenage years, giving me the knack for identifying promising opportunities. Quivas stands out among the rest. Your team is truly impresive",
    name: "Steve Mark",
    title: "Computer Engineer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Investor",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Users",
    value: "11,465+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "50+",
  },
  {
    id: "stats-3",
    title: "Transactions",
    value: "$100M+",
  },
];

export const footerLinks = [

  {
    title: "Services",
    links: [
      {
        name: "Help Center",
        link: "https://wa.me/447529652325",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
      {
        name: "Team",
        link: "/our-team",
      },
      {
        name: "Blog",
        link: "/news",
      },
      {
        name: "Investment",
        link: "/investment",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About us",
        link: "/about-us"
      },
      {
        name: "Become a Partner",
        link: "/register",
      },
      {
        name: "contact us",
        link: "/contact-us"
      },
      {
        name: "+447529652325",
        link: "https://wa.me/447529652325"
      },
      {
        name: "@quivasfinance.com",
        link: "/"
      },
    ],
  },

];



export const clients = [
  {
    id: "client-1",
    logo: tradingView,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: paxos,
  },
];