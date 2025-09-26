import { title } from "process"

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