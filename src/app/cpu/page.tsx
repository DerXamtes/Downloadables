import { Cpu } from "lucide-react";
import CPUConfig from "@/components/cpu";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animation-delay-2000 absolute left-[78%] top-[56%] h-[22%] w-[11%] animate-blob rounded-full bg-red-600/40 blur-3xl filter"></div>
      <div className="animation-delay-7000 absolute left-[52%] top-[2%] h-[17%] w-[13%] animate-blob rounded-full bg-red-800/30 blur-3xl filter"></div>
      <div className="animation-delay-3000 absolute left-[45%] top-[66%] h-[20%] w-[24%] animate-blob rounded-full bg-red-700/20 blur-3xl filter"></div>
      <div className="animation-delay-8000 absolute left-[80%] top-[79%] h-[10%] w-[19%] animate-blob rounded-full bg-red-500/30 blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute left-[44%] top-[49%] h-[22%] w-[26%] animate-blob rounded-full bg-red-500/30 blur-3xl filter"></div>
      <div className="animation-delay-6000 absolute left-[15%] top-[15%] h-[18%] w-[20%] animate-blob rounded-full bg-red-600/20 blur-3xl filter"></div>
      <div className="animation-delay-10000 absolute left-[60%] top-[10%] h-[14%] w-[22%] animate-blob rounded-full bg-red-700/30 blur-3xl filter"></div>
      <div className="animation-delay-5000 absolute left-[35%] top-[70%] h-[19%] w-[18%] animate-blob rounded-full bg-red-800/40 blur-3xl filter"></div>
      <div className="animation-delay-1000 absolute left-[22%] top-[28%] h-[20%] w-[18%] animate-blob rounded-full bg-red-600/30 blur-3xl filter"></div>
      <div className="animation-delay-9000 absolute left-[47%] top-[15%] h-[25%] w-[22%] animate-blob rounded-full bg-red-800/20 blur-3xl filter"></div>

      <div className="animation-delay-2000 absolute left-[1%] top-[10%] h-[13%] w-[20%] animate-blob rounded-full bg-orange-500/30 blur-3xl filter"></div>
      <div className="animation-delay-8000 absolute left-[57%] top-[46%] h-[13%] w-[10%] animate-blob rounded-full bg-orange-600/40 blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute left-[38%] top-[93%] h-[12%] w-[26%] animate-blob rounded-full bg-orange-500/30 blur-3xl filter"></div>
      <div className="animation-delay-7000 absolute left-[2%] top-[54%] h-[29%] w-[27%] animate-blob rounded-full bg-orange-500/40 blur-3xl filter"></div>
      <div className="animation-delay-1000 absolute left-[41%] top-[36%] h-[29%] w-[25%] animate-blob rounded-full bg-orange-600/20 blur-3xl filter"></div>
      <div className="animation-delay-5000 absolute left-[20%] top-[40%] h-[15%] w-[23%] animate-blob rounded-full bg-orange-700/30 blur-3xl filter"></div>
      <div className="animation-delay-3000 absolute left-[10%] top-[70%] h-[18%] w-[28%] animate-blob rounded-full bg-orange-600/20 blur-3xl filter"></div>
      <div className="animation-delay-6000 absolute left-[5%] top-[25%] h-[14%] w-[22%] animate-blob rounded-full bg-orange-800/40 blur-3xl filter"></div>
      <div className="animation-delay-9000 absolute left-[33%] top-[12%] h-[17%] w-[24%] animate-blob rounded-full bg-orange-600/30 blur-3xl filter"></div>
      <div className="animation-delay-10000 absolute left-[21%] top-[65%] h-[20%] w-[28%] animate-blob rounded-full bg-orange-700/20 blur-3xl filter"></div>
      <div className="relative z-10 flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            CPU
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            C<span className="text-muted-foreground">entral</span> P
            <span className="text-muted-foreground">rocessing</span> U
            <span className="text-muted-foreground">nit</span>
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <Cpu className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p>This complex microchip acts as the command center,</p>
            <p>
              interpreting and executing instructions from various programs.
            </p>
            <p>Upgrade your CPU and experience increased processing power,</p>
            <p>
              allowing you to tackle demanding tasks and run multiple
              applications.
            </p>
          </div>
          <div>
            <Cpu className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem] 3xl:size-[30rem] 4xl:size-[40rem]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 p-5 sm:p-10 xl:p-20">
        <CPUConfig />
      </div>
    </main>
  );
}
