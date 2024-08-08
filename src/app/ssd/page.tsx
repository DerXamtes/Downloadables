import { HardDrive } from "lucide-react";
import SSDConfig from "@/components/ssd";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animation-delay-2000 absolute left-[15%] top-[45%] h-[45%] w-[60%] animate-blob rounded-full bg-amber-500/30 blur-3xl filter"></div>
      <div className="animation-delay-8000 absolute left-[40%] top-[30%] h-[30%] w-[40%] animate-blob rounded-full bg-amber-700/20 blur-3xl filter"></div>
      <div className="animation-delay-3000 absolute left-[25%] top-[50%] h-[35%] w-[45%] animate-blob rounded-full bg-amber-700/30 blur-3xl filter"></div>
      <div className="animation-delay-6000 absolute left-[50%] top-[70%] h-[50%] w-[70%] animate-blob rounded-full bg-amber-800/20 blur-3xl filter"></div>

      <div className="animation-delay-2000 absolute left-[30%] top-[20%] h-[20%] w-[35%] animate-blob rounded-full bg-yellow-600/20 blur-3xl filter"></div>
      <div className="animation-delay-5000 absolute left-[50%] top-[60%] h-[40%] w-[60%] animate-blob rounded-full bg-yellow-600/20 blur-3xl filter"></div>
      <div className="animation-delay-1000 absolute left-[65%] top-[40%] h-[25%] w-[50%] animate-blob rounded-full bg-yellow-500/40 blur-3xl filter"></div>
      <div className="animation-delay-9000 absolute left-[20%] top-[75%] h-[30%] w-[50%] animate-blob rounded-full bg-yellow-500/20 blur-3xl filter"></div>
      <div className="relative z-10 flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            SSD
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            S<span className="text-muted-foreground">olid</span> S
            <span className="text-muted-foreground">tate</span> D
            <span className="text-muted-foreground">rive</span>
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <HardDrive className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p>
              The SSD replaces spinning disks with lightning-fast flash memory,
            </p>
            <p>resulting in instant access to your data.</p>
            <p>Experience boot-ups in seconds and apps loading in a flash.</p>
            <p>Upgrade now for a better and faster experience.</p>
          </div>
          <div>
            <HardDrive className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem] 3xl:size-[30rem] 4xl:size-[40rem]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 p-5 sm:p-10 xl:p-20">
        <SSDConfig />
      </div>
    </main>
  );
}
