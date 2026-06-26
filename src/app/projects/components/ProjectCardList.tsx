'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { bricolage_grotesque } from '@/utils/fonts';
import { Button } from '@/components/ui/button';


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
        <Button
          variant="default"
          size="sm"
          onClick={loadMoreProjects}
          className={`mt-6 h-8 text-xs max-sm:text-[10px] ${bricolage_grotesque}`}
        >
          <span>Load More</span>
          <span className='!ml-[-3px] mt-[1px]'>
            <ChevronDownIcon className='h-3 w-3 shrink-0 text-current transition-transform duration-200' />
          </span>
        </Button>
      )}
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
 
  {
    title: "Rate Limiter",
    description:
      "Cloudflare-inspired rate limiter with sliding window algorithm, async background processing, and Redis-backed distributed state. Handles 400K+ req/s with 0% false positives.",
    techStack: [
      "TypeScript",
      "Bun",
      "Express",
      "Redis",
    ],
    source: "https://github.com/rishav76dev/RateLimiter",
  },
  {
    title: "Load Balancer",
    description:
      "Layer 7 HTTP Load Balancer built from scratch with round-robin routing, parallel health checks, automatic failover, and clean strategy-pattern architecture.",
    techStack: [
      "TypeScript",
      "Bun",
      "Express",
    ],
    source: "https://github.com/rishav76dev/LoadBalancer",
  },
   {
    logo: "/aurelius-logo.png",
    title: "Aurelius",
    description:
      "A B2B marketing agency website for Aurelius Global Marketing LLC, serving engineering consultancies across Oil & Gas, Semiconductors, Pharma, and Renewables sectors.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://aurelius-nu.vercel.app/",
  },
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
    logo: "/azlyntech-logo.png",
    title: "Azlyn Tech",
    description:
      "A modern B2B tech agency website for Azlyn Tech, featuring a clean design system, elegant typography, and lightning-fast performance.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    link: "https://www.azlyntech.com/",
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
      "Store tweets, YouTube videos, and documents with rich previews. ",
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
    title: "Productivity SaaS App",
    description:
      "A modern SaaS platform designed to boost productivity by helping users track progres.",
    techStack: ["React", "TypeScript", "Next", "Tailwind CSS", "Framer Motion"],
    link: "https://saas-landing-page-rishavdev.vercel.app/",
    source: "https://github.com/rishav76dev/landing-page",
  }
];
