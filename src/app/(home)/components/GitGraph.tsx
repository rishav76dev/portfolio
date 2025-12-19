'use client'

import Title from "@/components/ui/Title";
import Link from "next/link";
import GitHubCalendar from 'react-github-calendar';
import { useDarkMode } from "@/hooks/useDarkMode";

export default function GitGraph() {
    const { isDarkMode } = useDarkMode();
    
    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            <Title title="GitHub Contributions" />
            <Link href={'https://github.com/rishav76dev'} target="_blank">
                <GitHubCalendar
                    username="rishav76dev"
                    blockSize={10}
                    blockMargin={3}
                    colorScheme={isDarkMode ? 'dark' : 'light'}
                />
            </Link>
        </div>
    )
}
