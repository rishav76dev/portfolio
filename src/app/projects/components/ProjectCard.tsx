"use client";

import { MagicCard } from "@/components/ui/magic-card";
import ShineBorder from "@/components/ui/shine-border";
import { Project } from "@/types/project";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";
import Image from "next/image";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiReact,
  SiMongodb, SiPrisma, SiPostgresql, SiRedis,
  SiExpress, SiVite, SiShadcnui, SiFramer, SiBun,
} from "react-icons/si";
import React from "react";

const techIconMap: Record<string, React.ReactNode> = {
  "Next.js":        <SiNextdotjs />,
  "Next":           <SiNextdotjs />,
  "TypeScript":     <SiTypescript />,
  "Typescript":     <SiTypescript />,
  "Tailwind CSS":   <SiTailwindcss />,
  "TailwindCss":    <SiTailwindcss />,
  "React":          <SiReact />,
  "MongoDb":        <SiMongodb />,
  "Prisma":         <SiPrisma />,
  "Postgress":      <SiPostgresql />,
  "PostgreSQL":     <SiPostgresql />,
  "Redis":          <SiRedis />,
  "Express":        <SiExpress />,
  "Bun":            <SiBun />,
  "Vite":           <SiVite />,
  "Framer Motion":  <SiFramer />,
  "Shadcn":         <SiShadcnui />,
  "shadcn/ui":      <SiShadcnui />,
  "Tanstack Query": <span style={{ fontSize: 10, fontWeight: 800 }}>TQ</span>,
  "Cookies":        <span style={{ fontSize: 13 }}>🍪</span>,
};

const ProjectCard = (props: Project) => {
  return (
    <MagicCard
      className="cursor-pointer rounded-lg dark:shadow-2xl w-[45%] max-sm:w-full h-[310px] border-none !bg-transparent"
      gradientColor="rgba(197, 241, 241, 0.4)"
    >
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

        <div className="flex gap-2 px-3 mt-4 flex-wrap !pointer-events-auto">
          {props.techStack?.map((tech, idx) => (
            <div
              key={idx}
              className={`group/badge relative inline-flex items-center justify-center size-8 rounded-md border border-zinc-400/60 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-800 transition-all duration-200 ease-out hover:scale-[1.08] hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:shadow-md cursor-default !pointer-events-auto ${bricolage_grotesque}`}
            >
              <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 text-xs font-bold">
                {techIconMap[tech] ?? <span style={{ fontSize: 10, fontWeight: 700 }}>{tech[0]}</span>}
              </span>
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 text-[10px] font-medium px-1.5 py-0.5 opacity-0 scale-95 transition-all duration-200 ease-out group-hover/badge:opacity-100 group-hover/badge:scale-100 z-10">
                {tech}
              </span>
            </div>
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
