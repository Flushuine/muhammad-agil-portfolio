import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Flushuine",
    icon: Icons.gitHub,
    link: "https://github.com/Flushuine",
  },
  {
    name: "LinkedIn",
    username: "Muhammad Agil",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/muhammad-agil",
  },
  {
    name: "Gmail",
    username: "aqillatas33",
    icon: Icons.gmail,
    link: "mailto:aqillatas33@gmail.com",
  },
];
