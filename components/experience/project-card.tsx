import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg flex flex-col">
    //   <div className="relative w-full h-[200px]">
    //     <Image
    //       className="rounded-lg border border-border object-cover"
    //       src={project.companyLogoImg}
    //       alt="img"
    //       fill
    //     />
    //   </div>
    //   <div className="pt-5 space-y-3">
    //     <h5 className="text-2xl font-bold tracking-tight text-foreground">
    //       {project.companyName}
    //     </h5>
    //     <p className="line-clamp-3 font-normal text-muted-foreground">
    //       {project.shortDescription}
    //     </p>
    //     <div className="flex gap-2 flex-wrap">
    //       <ChipContainer textArr={project.techStack} />
    //     </div>
    //     <Link href={`${project.websiteLink}`} target="_blank">
    //       <Button variant={"default"} className="mt-2">
    //         View more
    //         <Icons.chevronRight className="w-4 ml-1" />
    //       </Button>
    //     </Link>
    //   </div>
    //   <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
    //     {project.type === "Personal Project" ? (
    //       <Icons.userFill className="h-4 w-4" />
    //     ) : (
    //       <Icons.work className="h-4 w-4" />
    //     )}
    //   </div>
    // </div>
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg flex flex-col">
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>

      {/* Content wrapper with flex-grow */}
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.techStack} />
        </div>

        {/* Spacer that pushes button to bottom */}
        <div className="flex-grow" />

        <Link href={`${project.websiteLink}`} target="_blank">
          <Button variant={"default"} className="mt-2">
            Visit website
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>

      {/* Floating icon */}
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        {project.type === "Personal Project" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
