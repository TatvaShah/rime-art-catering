import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Rime Art Catering",
  tagline: "Appetizers, grazing boxes, salads and hot dishes for celebrations across Toronto and the GTA.",
  category: "Event catering",
  schemaType: "FoodEstablishment",
  area: "Toronto, ON",
  siteUrl: "https://rime-art-catering.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#8B3A4A" },
    wordmark: "script",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Catering in Toronto and the GTA",
    headline: "Menus made for your celebration",
    subhead: "From colourful canapes and grazing boxes to hot dishes and kids favourites. Tell us your taste, guest count and budget, and we will build the menu.",
    images: [
      { src: "/images/post-1.jpg", alt: "Canape skewers, tartlets and mini salads by Rime Art Catering" },
      { src: "/images/post-7.jpg", alt: "Appetizer boxes with bruschetta and tartlets" },
      { src: "/images/post-4.jpg", alt: "Artfully plated catering spread" },
    ],
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: [
    "Toronto and GTA catering",
    "Menus tailored to taste and budget",
    "Kids catering available",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Your celebration, our menu",
    body: [
      "Rime Art Catering brings appetizers, grazing boxes, salads and hot dishes to birthdays, family gatherings and corporate events across Toronto and the GTA.",
      "Every menu is built around what you love and what you want to spend. Share your date, guest count and favourites, and we will put together a spread that fits.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Celebration catering menu selection" },
  },

  menu: {
    label: "Menu",
    title: "What we can bring",
    intro: "A taste of what we offer. Final menus and pricing are quoted for your date and guest count.",
    variant: "list",
    layout: "tabs",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Appetizers and bites",
        items: [
          { name: "Canape skewers", description: "Salmon, shrimp, mozzarella, cured meats and sweet berry bites" },
          { name: "Assorted tartlets", description: "Including caviar and pate options" },
          { name: "Bruschetta", description: "Tomato and mozzarella, prosciutto and creamy cheese, and more" },
          { name: "Mozzarella and cherry tomato bites" },
          { name: "Salmon crepe rolls" },
          { name: "Chicken wraps", description: "Crispy wraps made to share" },
        ],
      },
      {
        title: "Platters and boxes",
        items: [
          { name: "Appetizer and grazing boxes", description: "Assorted open box spreads for gatherings" },
          { name: "Mini salads" },
          { name: "Fruit and veggie platters" },
          { name: "Hot dishes", description: "Quoted for your occasion" },
        ],
      },
      {
        title: "Kids catering",
        items: [
          { name: "Mini burgers" },
          { name: "Pizza" },
          { name: "Chicken nuggets and fries" },
          { name: "Mac and cheese" },
          { name: "Colourful fruit and veggie platters" },
        ],
      },
    ],
    footnote: "Menus are tailored to your taste, guest count and budget.",
  },

  gallery: {
    title: "From our table to yours",
    items: [
      { src: "/images/post-1.jpg", width: 960, height: 1280, alt: "Canape skewers and tartlets", caption: "Small bites, big flavour", href: "https://www.instagram.com/p/DeVVBzqCd1s/" },
      { src: "/images/post-2.jpg", width: 838, height: 1117, alt: "Kids catering spread", caption: "Kids catering", href: "https://www.instagram.com/p/DeRk16km86F/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1080, alt: "Art food catering platter", caption: "Art on the plate", href: "https://www.instagram.com/p/DePC-UmoKXx/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1423, alt: "Celebration menu overview", caption: "Your celebration, our menu", href: "https://www.instagram.com/p/DeLYlIAAA-c/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1349, alt: "Appetizer boxes", caption: "Appetizer boxes", href: "https://www.instagram.com/p/DeLNitYgNy6/" },
      { src: "/images/post-3.jpg", width: 624, height: 1104, alt: "Bruschetta with toppings", caption: "Crispy bruschetta", href: "https://www.instagram.com/p/DePIJ2Rxjh1/" },
      { src: "/images/post-8.jpg", width: 900, height: 1600, alt: "Chicken wraps", caption: "Crispy chicken wraps", href: "https://www.instagram.com/p/DeJ8freRInB/" },
      { src: "/images/post-6.jpg", width: 576, height: 1024, alt: "Catering for any occasion", caption: "Toronto and GTA catering", href: "https://www.instagram.com/p/DeLQZp1AG9M/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "rimeartcatering",
    embeds: [
      "https://www.instagram.com/p/DeVVBzqCd1s/",
      "https://www.instagram.com/p/DeLNitYgNy6/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Rime Art Catering! I would like to order catering.\nOccasion:\nDate needed:\nGuest count / servings:\nMenu ideas (appetizers, grazing, hot dishes, kids):\nBudget range:\nDelivery area (Toronto / GTA):",
    links: [],
    note: "Menus are tailored to your taste and budget. Message us for options and pricing.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, guest count, menu ideas and budget. We will reply with options and pricing." },
    { q: "Where do you cater?", a: "We cater across Toronto and the GTA." },
    { q: "Do you offer kids menus?", a: "Yes. We can put together mini burgers, pizza, nuggets, mac and cheese, and colourful fruit and veggie platters for little guests." },
    { q: "Can you work to a budget?", a: "Yes. Menus are tailored to your taste and budget for the occasion." },
  ],

  contact: {
    area: "Toronto and the GTA, Ontario",
  },

  seo: {
    title: "Rime Art Catering | Event catering in Toronto and the GTA",
    description: "Appetizers, grazing boxes, salads, hot dishes and kids catering for celebrations across Toronto and the GTA. Order by Instagram DM.",
    keywords: ["Toronto catering", "GTA event catering", "appetizer boxes Toronto", "kids catering Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
