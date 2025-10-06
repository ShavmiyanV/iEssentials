import { title } from "process";

export type HeaderItem = {
  title: string;
  href: string;
};

export const headerData: HeaderItem[] = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  //{ title: "Contact", href: "/contact" },
  { title: "Hot Deal", href: "/deal" },
];

export const quickLinksData = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy & Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];

export const categoriesData = [
  { title: "Mobiles", href: "/mobiles" },
  { title: "Appliances", href: "/appliances" },
  { title: "Smartphones", href: "/smartphones" },
  { title: "Air Conditioner", href: "/air-conditioner" },
  { title: "Washing Machine", href: "/washing-machine" },
  { title: "Kitchen Appliances", href: "/kitchen-appliances" },
  { title: "Gadget Accessories", href: "/gadget-accessories" },
];

export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];
