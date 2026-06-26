import { BulletSegment, I_Education, I_Experience } from "@/types/project";

export const experienceData: I_Experience[] = [
    {
        company_link: "https://www.dodox.in/",
        company_logo: "/dodox.png",
        company_name: "Dodox Studio",
        duration: "Dec 2025 - Jan 2026",
        job_title: "Full Stack Developer",
        description: "",
        bullets: [
            [
                { text: "Built a dynamic meal-plan pricing engine for " },
                { text: "Livora Life", href: "https://www.livoralife.com/", bold: true },
                { text: " enabling flexible multi-plan ordering, replacing the previous one-time purchase flow." },
            ] as BulletSegment[],
            "Implemented secure server-side pricing validation using Sanity CMS, enhanced authentication and role-based access control with Clerk, and developed wishlist synchronization and PDF-based order receipts.",
            [
                { text: "Delivered polished, pixel-perfect interfaces and responsive user experiences for " },
                { text: "Evolv Clothing", href: "https://www.evolvclothing.com/", bold: true },
                { text: " and " },
                { text: "Studio Mirae", href: "https://www.studio-mirae.com/", bold: true },
                { text: " aligned with modern brand aesthetics." },
            ] as BulletSegment[],
        ]
    },
   
    {
        company_link: "https://x.com/rjrishav76",
        company_logo: "/freelance-icon.webp",
        company_name: "Freelance",
        duration: "Jan 2025 - Present",
        job_title: "building visually stunning landing page",
        description: ""
    },
    
];

export const educationData: I_Education[] = [
    {
        course_title: "Bachelors of Technology",
        ending_date: " sep 2025",
        institute_name: "KIET Group of Institutions",

        description: ""
    }
]
