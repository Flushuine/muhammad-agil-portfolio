import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Golang",
    rating: 5,
    icon: Icons.golang,
  },
  {
    name: "Node.js",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Laravel",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Fastify",
    rating: 5,
    icon: Icons.fastify,
  },
  {
    name: "Express.js",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "PostgreSQL",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MySQL",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Redis",
    rating: 4,
    icon: Icons.redis,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
