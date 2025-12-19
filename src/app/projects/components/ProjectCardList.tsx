'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 8);
  };

  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center pb-8'>
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
      {visibleProjects < data.length && (
        <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
          </span>
        </Badge>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/anon-ok.png",
    title: "Anonmily",
    description:
      "Anonmily is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Cookies",
      "Tanstack Query",
      "Prisma",
      "Postgress",

    ],
    link: "https://anonmily.vercel.app/",
    source: "https://github.com/rishav76dev/anonmily",
  },

  {
    logo: "/token-2.png",
    title: "Voix",
    description:
      "An decentralized social media platfrom where user and creator earn incentive for browsing it.",
    techStack: [
      "React Native",
      "Web3.js",
      "TypeScript",
      "spl-token",
      "Tailwind CSS",
    ],
    link: "https://www.voix.buzz/",
    source: "https://github.com/adisehrawat/VOIX",
  },
  {
    logo: "/stealth-startup.jpeg",
    title: "Truly Coded",
    description:
      "A premium B2B agency website built for Truly Coded, featuring a sophisticated design system, elegant typography, and lightning-fast performance. ",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
  
    ],
    link: "https://truely-coded.vercel.app",
    source: "https://github.com/rishav76dev/TruelyCoded",
  },

  {
    logo: "/book-1.png",
    title: "Attendance Viewer",
    description:
      "This project is a web-based attendance viewer designed for KIET college. It has 1500 unique users and 21000+ montly page visits",
    techStack: ["Next.js", "Typescript", "TailwindCss"],
    link: "cybervidya.pages.dev/",
    source: "https://github.com/AmanDevelops/attendance-kiet",
  },
  {
    logo: "/flick-ai.png",
    title: "Second-Brains",
    description:
      "Store tweets, YouTube videos, and documents with rich previews. Filter, organize, and access your curated content with a clean, minimalist interface built for focus.",
    techStack: [
      "React",
      "TypeScript",
      "MongoDb",
      "Express",
      "Tailwind CSS",
    ],
    link: "https://secondbrains.vercel.app/",
    source: "https://github.com/rishav76dev/brains",
  },
  {
    logo: "/malfoy.png",
    title: "Pathway — Productivity SaaS App",
    description:
      "A modern SaaS platform designed to boost productivity by helping users track progress, manage projects, and celebrate milestones. Features include intuitive task tracking, team collaboration tools, tiered pricing plans, and real-time testimonials built with a focus on usability, motivation, and design excellence.",
    techStack: ["React", "TypeScript", "Next", "Tailwind CSS", "Framer Motion"],
    link: "https://saas-landing-page-rishavdev.vercel.app/",
    source: "https://github.com/rishav76dev/landing-page",
  }
];
