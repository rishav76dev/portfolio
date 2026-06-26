'use client';
import Image from 'next/image';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import { BulletSegment, I_Experience } from '@/types/project';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';
import { experienceData } from '@/utils/constant';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from '@radix-ui/react-icons';

const Experience = () => {
    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <span className='mb-3'>
                <Title title='Experience' />
            </span>
            {experienceData.map((exp: I_Experience, idx) => (
                <MagicCard key={idx} className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none" gradientColor="rgba(197, 241, 241, 0.4)">
                    <div className="group/card flex w-full items-start px-4 max-sm:px-2 py-3 gap-4">
                        {/* Logo */}
                        <div className="shrink-0 pt-1">
                            <Link href={exp.company_link} target='_blank'>
                                <Image src={exp.company_logo} alt='company-logo' width={50} height={50} className='rounded-full' />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="w-[41vw] max-lg:w-[55vw] max-sm:w-[70vw] min-w-0">
                            {exp.bullets && exp.bullets.length > 0 ? (
                                <AccordionPrimitive.Root type="single" collapsible>
                                    <AccordionPrimitive.Item value="item-1">
                                        {/* Header row: trigger left, date right */}
                                        <div className="flex items-start justify-between gap-2">
                                            <AccordionPrimitive.Header className="flex-1 min-w-0">
                                                <AccordionPrimitive.Trigger className="text-start group w-full">
                                                    <div className={`flex items-center gap-1 ${bricolage_grotesque}`}>
                                                        <span className='text-lg max-sm:text-base font-semibold leading-tight'>{exp.company_name}</span>
                                                        <ChevronRightIcon className="h-5 w-5 shrink-0 text-black dark:text-white transition-all duration-200 group-data-[state=open]:rotate-90 opacity-0 group-hover/card:opacity-100" />
                                                    </div>
                                                    <h2 className={`text-sm max-sm:text-xs text-zinc-500 mt-0.5 text-start ${inter}`}>{exp.job_title}</h2>
                                                    <h2 className={`text-xs hidden max-sm:block mt-0.5 text-zinc-500 ${inter}`}>{exp.duration}</h2>
                                                </AccordionPrimitive.Trigger>
                                            </AccordionPrimitive.Header>
                                            <span className={`text-xs text-zinc-500 shrink-0 max-sm:hidden pt-1 ${inter}`}>{exp.duration}</span>
                                        </div>

                                        <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                            <ul className={`mt-2 text-sm max-sm:text-[11px] list-disc pl-4 divide-y divide-neutral-200 dark:divide-neutral-800 pb-1 ${inter}`}>
                                                {exp.bullets.map((point, i) => (
                                                    <li key={i} className="text-neutral-600 dark:text-neutral-400 py-1.5">
                                                        {typeof point === 'string' ? point : (point as BulletSegment[]).map((seg, j) =>
                                                            seg.href ? (
                                                                <a key={j} href={seg.href} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 text-inherit hover:opacity-70 transition-opacity">
                                                                    {seg.text}
                                                                </a>
                                                            ) : seg.bold ? (
                                                                <strong key={j}>{seg.text}</strong>
                                                            ) : (
                                                                <span key={j}>{seg.text}</span>
                                                            )
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionPrimitive.Content>
                                    </AccordionPrimitive.Item>
                                </AccordionPrimitive.Root>
                            ) : (
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <div className={`${bricolage_grotesque}`}>
                                            <span className='text-lg max-sm:text-base font-semibold leading-tight'>{exp.company_name}</span>
                                        </div>
                                        <h2 className={`text-sm max-sm:text-xs text-zinc-500 mt-0.5 ${inter}`}>{exp.job_title}</h2>
                                        <h2 className={`text-xs hidden max-sm:block mt-0.5 text-zinc-500 ${inter}`}>{exp.duration}</h2>
                                    </div>
                                    <span className={`text-xs text-zinc-500 shrink-0 max-sm:hidden pt-1 ${inter}`}>{exp.duration}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </MagicCard>
            ))}
        </div>
    );
};

export default Experience;
