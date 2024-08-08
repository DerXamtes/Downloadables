import Link from "next/link";
import { Github, Info, Coffee } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="border-t bg-secondary p-5 sm:p-10 xl:p-20 3xl:px-[12rem] 4xl:px-[22rem]">
      <div className="pb-20">
        <Link href="/">
          <h3 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            Downloadables
          </h3>
        </Link>
        <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Just Do<span className="text-muted-foreground">wnload</span> It!
        </p>
      </div>
      <div className="flex flex-col gap-10 pb-20 md:flex-row ">
        <div className="flex flex-1 flex-col gap-5 sm:text-lg md:w-1/2 md:text-xl lg:text-2xl 2xl:text-3xl">
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Navigation
          </p>
          <Link href="/cpu">CPU - Central Processing Unit</Link>
          <Link href="/gpu">GPU - Graphical Processing Unit</Link>
          <Link href="/ram">RAM - Random Access Memory</Link>
          <Link href="/ssd">SSD - Solid State Drive</Link>
        </div>
        <div className="flex flex-col justify-around gap-10 md:w-1/2 md:flex-row">
          <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Socials
            </p>
            <Link
              href="https://github.com/DerXamtes"
              target="_blank"
              className="w-fit"
            >
              <span className="flex items-center gap-2">
                <Github className="size-7" />
                GitHub
              </span>
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            <p className="flex items-start gap-1 text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Support
            </p>
            <Link
              href="https://ko-fi.com/DerXamtes"
              target="_blank"
              className="link"
            >
              <span className="flex items-center gap-2">
                <Coffee className="size-7" />
                Ko-Fi
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
