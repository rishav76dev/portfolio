import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Provider from "@/context/Provider";
import dynamic from "next/dynamic";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Rishav",
  description:
    "Rishav is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  keywords:
    "Rishav, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Rishav Raj" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishavportfolio.vercel.app",
    siteName: "Rishav Portfolio",
    title: "Rishav - Full Stack Developer",
    description:
      "Rishav is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav - Full Stack Developer",
    description:
      "Rishav is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
    creator: "@rjrishav76",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position="bottom-right" />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}
