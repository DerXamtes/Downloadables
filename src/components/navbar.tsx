"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/modetoggle";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-10 hidden h-20 w-full items-center justify-between border-b bg-background/75 px-5 backdrop-blur md:flex 3xl:px-[12rem] 4xl:px-[22rem]">
      <div>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Downloadables
        </Link>
      </div>
      <div className="flex gap-5">
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/cpu"
                className={buttonVariants({ variant: "outline" })}
              >
                CPU
              </Link>
            </li>
            <li>
              <Link
                href="/gpu"
                className={buttonVariants({ variant: "outline" })}
              >
                GPU
              </Link>
            </li>
            <li>
              <Link
                href="/ram"
                className={buttonVariants({ variant: "outline" })}
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                href="/ssd"
                className={buttonVariants({ variant: "outline" })}
              >
                SSD
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </div>
  );
}
