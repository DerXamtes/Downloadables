import { HardDrive } from "lucide-react";
import SSDConfig from "@/components/ssd";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animate-blob animation-delay-2000 absolute left-[17%] top-[42%] h-[28%] w-[25%] rounded-full bg-amber-500/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[38%] top-[32%] h-[21%] w-[20%] rounded-full bg-amber-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[20%] top-[55%] h-[22%] w-[27%] rounded-full bg-amber-700/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-8000 absolute left-[30%] top-[65%] h-[25%] w-[18%] rounded-full bg-amber-600/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-10000 absolute left-[52%] top-[45%] h-[23%] w-[22%] rounded-full bg-amber-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-3000 absolute left-[45%] top-[67%] h-[29%] w-[24%] rounded-full bg-amber-800/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[65%] top-[55%] h-[17%] w-[26%] rounded-full bg-amber-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-7000 absolute left-[8%] top-[63%] h-[16%] w-[23%] rounded-full bg-amber-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[12%] top-[28%] h-[20%] w-[21%] rounded-full bg-amber-700/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-11000 absolute left-[55%] top-[20%] h-[18%] w-[27%] rounded-full bg-amber-500/20 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-1000 absolute left-[32%] top-[23%] h-[14%] w-[19%] rounded-full bg-yellow-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-3000 absolute left-[50%] top-[18%] h-[12%] w-[15%] rounded-full bg-yellow-700/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[48%] top-[63%] h-[20%] w-[18%] rounded-full bg-yellow-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-7000 absolute left-[62%] top-[42%] h-[16%] w-[21%] rounded-full bg-yellow-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[18%] top-[12%] h-[19%] w-[12%] rounded-full bg-yellow-800/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-11000 absolute left-[15%] top-[52%] h-[21%] w-[26%] rounded-full bg-yellow-700/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute left-[28%] top-[14%] h-[18%] w-[25%] rounded-full bg-yellow-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[22%] top-[72%] h-[20%] w-[17%] rounded-full bg-yellow-500/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[12%] top-[34%] h-[22%] w-[20%] rounded-full bg-yellow-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-8000 absolute left-[38%] top-[48%] h-[15%] w-[23%] rounded-full bg-yellow-800/30 blur-3xl filter"></div>
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
