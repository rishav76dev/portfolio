"use client";

import { MagicCard } from "@/components/ui/magic-card";
import ShineBorder from "@/components/ui/shine-border";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Project } from "@/types/project";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Badge, Link } from "@radix-ui/themes";
import Image from "next/image";

const ProjectCard = (props: Project) => {
  const { isDarkMode } = useDarkMode();
  return (
    <MagicCard
      className="cursor-pointer rounded-lg dark:shadow-2xl w-[45%] max-sm:w-full h-[310px] border-none !bg-transparent"
      gradientColor={`${isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"}`}
    >
      {/* <ShineBorder className={`border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none`} color={["#FF9933", "#FFFFFF", "#138808"]}> */}
      <ShineBorder
        className={`border dark:border-white/20 border-black/20 h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none`}
        color={["#", "#", "#"]}
      >
        {props.logo && (
          <div className="px-3">
            <Image src={props.logo} alt="project-logo" width={30} height={30} />
          </div>
        )}
        <div
          className={`px-3 !pointer-events-auto ${
            props.logo ? "mt-4" : "mt-0"
          }`}
        >
          <Link
            href={props.link || props.source || "#"}
            target="_blank"
            underline="none"
          >
            <h1
              className={`text-xl text-black dark:text-white font-bold tracking-tight text-start whitespace-nowrap ${bricolage_grotesque}`}
            >
              {props.title}
            </h1>
          </Link>
          <p className={`mt-2 text-sm md:text-[16px] text-neutral-600 ${inter}`}>
            {props.description}
          </p>
        </div>
        <div className="flex gap-1 px-3 mt-4 flex-wrap !pointer-events-auto">
          {props.techStack?.map((tech, idx) => (
            <Badge
              key={idx}
              color="gray"
              variant="outline"
              highContrast
              className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto ${bricolage_grotesque}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div
          className={`px-3 mt-3 !pointer-events-auto flex gap-1 ${
            props.techStack && props.techStack?.length > 0 ? "mt-3" : "mt-0"
          }`}
        >
          {props.link && (
            <Button asChild variant="default" size="sm" className={`h-8 px-3 text-[10px] ${bricolage_grotesque}`}>
              <Link href={props.link} target="_blank" underline="none">
                <GlobeIcon width={11} height={11} /> Website
              </Link>
            </Button>
          )}

          {props.source && (
            <Button asChild variant="default" size="sm" className={`h-8 px-3 text-[10px] ${bricolage_grotesque}`}>
              <Link href={props.source} target="_blank" underline="none">
                <GitHubLogoIcon width={11} height={11} /> Source
              </Link>
            </Button>
          )}
        </div>
      </ShineBorder>
    </MagicCard>
  );
};

export default ProjectCard;
