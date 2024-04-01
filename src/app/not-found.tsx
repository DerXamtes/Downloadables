import Link from "next/link";

import { MdErrorOutline } from "react-icons/md";

import { Button, buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <div className="flex h-svh flex-col justify-between p-5 md:p-10 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            Error 404 - Page not found
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Oops! - Something went wrong
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <MdErrorOutline className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-16  text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            <p> Uh-oh! you&apos;ve ventured in to uncharted terretory.</p>
            <p> That&apos;s alright, everyone makes mistakes.</p>
            <div className="flex flex-row gap-2.5">
              <p> To get back to the home page click</p>
              <Link href="/" className="underline">
                here
              </Link>
            </div>
          </div>
          <div>
            <MdErrorOutline className="xL:size-96 hidden size-64 lg:flex" />
          </div>
        </div>
      </div>
    </main>
  );
}
