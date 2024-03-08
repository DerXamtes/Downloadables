import Link from "next/link";

import { Github } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-secondary p-5 pb-20 sm:p-10 xl:p-20">
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
      <div className="flex flex-col gap-10 md:flex-row md:gap-64">
        <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Navigation
          </p>
          <Link href="/cpu">CPU - Central Processing Unit</Link>
          <Link href="/gpu">GPU - Graphical Processing Unit</Link>
          <Link href="/ram">RAM - Random acces Memory</Link>
          <Link href="/ssd">SSD - Solid State Drive</Link>
        </div>
        <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Socials
          </p>
          <a href="https://github.com/DerXamtes" target="_blank">
            <span className="flex items-center gap-2">
              <Github />
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
