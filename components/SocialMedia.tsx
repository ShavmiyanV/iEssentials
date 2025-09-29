import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.linkedin.com/in/vijayakumar-shavmiyan-6264b4255/overlay/contact-info/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.linkedin.com/in/vijayakumar-shavmiyan-6264b4255/overlay/contact-info/",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/vijayakumar-shavmiyan-6264b4255/overlay/contact-info/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.linkedin.com/in/vijayakumar-shavmiyan-6264b4255/overlay/contact-info/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.linkedin.com/in/vijayakumar-shavmiyan-6264b4255/overlay/contact-info/",
    icon: <Facebook className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <a
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border border-shop_light_green",
                tooltipClassName
              )}
            >
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
