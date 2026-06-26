import Avatar from "@/app/(home)/components/Avatar";

import { Link as ScrollLink } from "react-scroll";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
      <div className="w-2/3 max-sm:w-full px-4">
        <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between ">
          {/* Text Content */}
          <div>
            <div
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}
            >
              <h1
                className={`mb-1 mt-0 text-3xl font-semibold dark:text-white ${bricolage_grotesque}`}
              >
                Rishav Raj
              </h1>
            </div>
            <div
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}
            >
              <div
                className={`max-w-[58ch] text-zinc-600 dark:text-zinc-400 ${inter}`}
              >
                Full Stack Engineer
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "translateY(-6px) translateZ(0px)",
              }}
              className="mt-4"
            >
              <p
                className={`max-w-[58ch] text-sm text-zinc-600 dark:text-zinc-400 leading-6 ${inter}`}
              >
                20. I enjoy building things from first principles—distributed systems, backend infrastructure, AI, and Web3. Fast learner, relentless builder, and endlessly curious about how things work. Still chasing mastery.
              </p>
              <p
                className={`max-w-[58ch] text-sm text-zinc-600 dark:text-zinc-400 leading-6 mt-2 ${inter}`}
              >
                If you&apos;re working on something real, let&apos;s talk.
              </p>
            </div>
            <div className="mt-6">
              <Button className="rounded-lg">
                <ScrollLink
                  to="contact-section"
                  activeClass="active"
                  smooth={true}
                  offset={-120}
                  duration={1100}
                >
                  Get in touch
                </ScrollLink>
              </Button>
            </div>
          </div>

          {/* Avatar with decorative borders */}
          <div className="relative order-first shrink p-4 md:mb-40 md:order-last md:p-4">
            <div className="relative z-[5] block">
              <Avatar />
            </div>
            <div className="z-0">
              <div
                className="absolute -right-12 left-0 top-0 h-px bg-slate-400/50 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-slate-600/50"
                style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
              ></div>
              <div
                className="absolute -top-8 bottom-0 left-12 w-px bg-slate-400/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-slate-600/50"
                style={{ transform: "none", transformOrigin: "50% 0% 0px" }}
              ></div>
              <div
                className="absolute -right-12 bottom-14 left-0 h-px bg-slate-400/50 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-slate-600/50"
                style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
              ></div>
              <div
                className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-400/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-slate-600/50 overflow-hidden"
                style={{ transform: "none", transformOrigin: "50% 100% 0px" }}
              >
                {/* Vertical beam: fires after the horizontal beam */}
                <div className="animate-beam-v absolute left-1/2 -translate-x-1/2 w-[2px] h-40 flex flex-col">
                  <div className="w-full flex-none blur-sm h-full [background-image:linear-gradient(180deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  <div className="mt-[-100%] w-full flex-none blur-[1px] h-full [background-image:linear-gradient(180deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
              </div>
              <div className="absolute -top-8 left-0 right-0 h-8 overflow-hidden flex items-end">
                <div className="animate-beam -mb-px flex h-[2px] w-80">
                  <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  <div className="ml-[-100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
