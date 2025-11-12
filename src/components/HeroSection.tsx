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
                20, i break things, learn fast, and make shit happen. deep into
                code and cs; anything that pushes the limits. history,
                curiosity, cricket, and great books shaped me. still chasing
                mastery.
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
                className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
                style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
              ></div>
              <div
                className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
                style={{ transform: "none", transformOrigin: "50% 0% 0px" }}
              ></div>
              <div
                className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
                style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
              ></div>
              <div
                className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-orange-100/30"
                style={{ transform: "none", transformOrigin: "50% 100% 0px" }}
              ></div>
              <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                <div className="-mb-px flex h-[2px] w-40 -scale-x-100">
                  <div
                    className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                    style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
                  ></div>
                  <div
                    className="ml-[-100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"
                    style={{ transform: "none", transformOrigin: "0% 0% 0px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-4 px-32 max-sm:px-4">
          <h1
            className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
          >
            Hi, I&apos;m Rishav Raj
          </h1>
          <h1
            className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
          >
            20, i break things, learn fast, and make shit happen. deep into code
            and cs; anything that pushes the limits. history, curiosity,
            cricket, and great books shaped me. still chasing mastery.
            <br />
            If you’re working on something real, let’s talk.
          </h1>
        </div> */}
        {/* <div className="mt-8 flex gap-4">
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
        </div> */}
      </div>
    </div>
  );
}
