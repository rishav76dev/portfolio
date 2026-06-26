'use client';
import { MagicCard } from './ui/magic-card'
import ShineBorder from './ui/shine-border';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import { Link } from '@radix-ui/themes';
import Image from 'next/image';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { Project } from '@/types/project';
import { Button } from './ui/button';
import {
    SiNextdotjs, SiTypescript, SiPrisma, SiPostgresql,
    SiCloudinary, SiTailwindcss, SiRadixui, SiZod, SiBun, SiFramer,
} from 'react-icons/si';
import React from 'react';

// Map of tech name → { icon, color } for the animated badges
const techIconMap: Record<string, { icon: React.ReactNode }> = {
    "NextJS":          { icon: <SiNextdotjs /> },
    "TypeScript":      { icon: <SiTypescript /> },
    "Prisma":          { icon: <SiPrisma /> },
    "PostgreSQL":      { icon: <SiPostgresql /> },
    "NextAuth":        { icon: <SiNextdotjs /> },
    "TipTap Editor":   { icon: <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>T</span> },
    "Resend":          { icon: <span style={{ fontSize: 12, fontWeight: 700, lineHeight: 1 }}>R</span> },
    "Cloudinary":      { icon: <SiCloudinary /> },
    "Zod":             { icon: <SiZod /> },
    "framer-motion":   { icon: <SiFramer /> },
    "Radix UI":        { icon: <SiRadixui /> },
    "Magic UI":        { icon: <span style={{ fontSize: 12, fontWeight: 700, lineHeight: 1 }}>✦</span> },
    "Tailwind CSS":    { icon: <SiTailwindcss /> },
    "Bun":             { icon: <SiBun /> },
};

const MaxProjectCard = () => {
    return (
        <>
            {
                data.map((project, idx) => (
                    <MagicCard key={idx} gradientColor="rgba(197, 241, 241, 0.4)" className='w-[68%] h-fit max-lg:w-[45%] max-sm:w-full flex justify-center max-lg:justify-start !bg-transparent cursor-pointer mt-5 rounded-lg dark:shadow-2xl'>
                        <ShineBorder color={["#FF9933", "#FFFFFF", "#138808"]} className='w-[44.5vw] max-[1285px]:w-full max-sm:w-full h-full !bg-transparent !pointer-events-none flex items-center max-lg:flex-col max-lg:items-start pl-2 pr-5 py-5 max-sm:py-5 md:shadow-xl space-x-4'>

                            <div className="w-[5vw] max-[1285px]:w-[13vw]">
                                <Link href={project.link} target='_blank'>
                                    <Image src='/portfolio-logo.jpg' alt='company-logo' width={55} height={55} className='rounded-full border border-black max-lg:h-10 max-lg:w-10' />
                                </Link>
                            </div>
                            <div>
                                <div className="max-lg:mt-3">
                                    <Link href={project.link ? project.link : project.source} target='_blank' underline='none'>
                                        <h1 className={`text-xl max-lg:text-lg text-black dark:text-white font-bold tracking-tight text-start ${bricolage_grotesque}`}>{project.title}</h1>
                                    </Link>
                                    <p className={`mt-1 text-sm md:text-[16px] text-neutral-600 ${inter}`}>{project.description}</p>
                                </div>

                                <div className="flex gap-2 mt-3 flex-wrap !pointer-events-auto">
                                    {
                                        project.techStack?.map((tech, idx) => {
                                            const mapped = techIconMap[tech];
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`group/badge relative inline-flex items-center justify-center size-8 rounded-md border border-zinc-400/60 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-800 transition-all duration-200 ease-out hover:scale-[1.08] hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:shadow-md cursor-default !pointer-events-auto ${bricolage_grotesque}`}
                                                >
                                                    <span className="flex items-center justify-center [&_svg]:w-4 [&_svg]:h-4 text-xs font-bold">
                                                        {mapped ? mapped.icon : <span style={{ fontSize: 10, fontWeight: 700 }}>{tech[0]}</span>}
                                                    </span>
                                                    <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 text-[10px] font-medium px-1.5 py-0.5 opacity-0 scale-95 transition-all duration-200 ease-out group-hover/badge:opacity-100 group-hover/badge:scale-100 z-10">
                                                        {tech}
                                                    </span>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div className='mt-3 !pointer-events-auto flex gap-1'>
                                    {
                                        project.link && (
                                            <Button asChild variant="default" size="sm" className={`h-8 px-3 text-[10px] ${bricolage_grotesque}`}>
                                                <Link href={project.link} target='_blank' underline='none'>
                                                    <GlobeIcon width={11} height={11} /> Website
                                                </Link>
                                            </Button>
                                        )
                                    }

                                    <Button asChild variant="default" size="sm" className={`h-8 px-3 text-[10px] ${bricolage_grotesque}`}>
                                        <Link href={project.source} target='_blank' underline='none'>
                                            <GitHubLogoIcon width={11} height={11} /> Source
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </ShineBorder>
                    </MagicCard>
                ))
            }

        </>
    )
}

export default MaxProjectCard;

const data: Project[] = [
    {
        logo: '/portfolio-logo.jpg',
        title: "Portfolio",
        description: "A portfolio crafted and developed by me, showcasing my skills, projects, and passion for web development in a sleek, user-friendly design.",
        techStack: ["NextJS", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "TipTap Editor", "Resend", "Cloudinary", "Zod", "framer-motion", "Radix UI", "Magic UI", "Tailwind CSS"],
        link: "https://fardeenmansoori.vercel.app/",
        source: "https://github.com/Fardeen26/portfolio",
    }
];