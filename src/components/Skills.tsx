"use client"

import React from 'react'
import Title from './ui/Title'
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiFigma,
  SiMongodb, SiPostgresql, SiPrisma, SiTurborepo, SiDocker,
  SiSolana, SiReactquery, SiRedis, SiTailwindcss, SiNodedotjs
} from 'react-icons/si'
import { bricolage_grotesque } from '@/utils/fonts'

const skills = [
  { name: "JavaScript",    icon: <SiJavascript /> },
  { name: "TypeScript",    icon: <SiTypescript /> },
  { name: "Next.js",       icon: <SiNextdotjs /> },
  { name: "React",         icon: <SiReact /> },
  { name: "Node.js",       icon: <SiNodedotjs /> },
  { name: "Tailwind CSS",  icon: <SiTailwindcss /> },
  { name: "Figma to Code", icon: <SiFigma /> },
  { name: "MongoDB",       icon: <SiMongodb /> },
  { name: "PostgreSQL",    icon: <SiPostgresql /> },
  { name: "Prisma",        icon: <SiPrisma /> },
  { name: "Turborepo",     icon: <SiTurborepo /> },
  { name: "Docker",        icon: <SiDocker /> },
  { name: "Redis",         icon: <SiRedis /> },
  { name: "Anchor",        icon: <SiSolana /> },
  { name: "Tanstack",      icon: <SiReactquery /> },
]

const Skills = () => {
  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <Title title='Skills' />
      <div className="flex flex-wrap gap-3 mt-4 justify-center px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`group/badge relative inline-flex items-center justify-center size-10 rounded-md border border-zinc-400/60 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-800 transition-all duration-200 ease-out hover:scale-[1.08] hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:shadow-md cursor-default ${bricolage_grotesque}`}
          >
            <span className="flex items-center justify-center [&_svg]:w-6 [&_svg]:h-6">
              {skill.icon}
            </span>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 text-[11px] font-medium px-2 py-0.5 opacity-0 scale-95 transition-all duration-200 ease-out group-hover/badge:opacity-100 group-hover/badge:scale-100 z-10">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
