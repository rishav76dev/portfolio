'use client';
import React from 'react';

export interface TechItem {
    name: string;
    icon: React.ReactNode;
}

interface TechBadgeProps {
    tech: TechItem;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
    return (
        <div className="group inline-flex items-center gap-0 rounded-md border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100/50 dark:bg-zinc-800/50 px-2 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 outline-none transition-all duration-300 ease-out hover:scale-[1.03] hover:gap-1.5 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:shadow-sm cursor-default select-none">
            <span className="size-4 shrink-0 flex items-center justify-center [&_svg]:size-4">
                {tech.icon}
            </span>
            <span className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-300 ease-out group-hover:max-w-32 group-hover:opacity-100 group-hover:delay-150 text-xs">
                {tech.name}
            </span>
        </div>
    );
};

export default TechBadge;
