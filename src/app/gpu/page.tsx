import { BsGpuCard } from "react-icons/bs";
import GPUConfig from "@/components/gpu";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animate-blob animation-delay-3000 absolute left-[10%] top-[57%] h-[18%] w-[28%] rounded-full bg-lime-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[50%] top-[55%] h-[24%] w-[28%] rounded-full bg-lime-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-1000 absolute left-[0%] top-[14%] h-[24%] w-[10%] rounded-full bg-lime-800/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-8000 absolute left-[0%] top-[100%] h-[21%] w-[29%] rounded-full bg-lime-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[20%] top-[22%] h-[22%] w-[18%] rounded-full bg-lime-700/30 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-7000 absolute left-[75%] top-[58%] h-[25%] w-[13%] rounded-full bg-green-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[0%] top-[26%] h-[21%] w-[26%] rounded-full bg-green-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute left-[0%] top-[49%] h-[26%] w-[17%] rounded-full bg-green-700/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[10%] top-[68%] h-[24%] w-[30%] rounded-full bg-green-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-10000 absolute left-[30%] top-[15%] h-[20%] w-[15%] rounded-full bg-green-600/30 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-3000 absolute left-[18%] top-[27%] h-[16%] w-[30%] rounded-full bg-emerald-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[65%] top-[20%] h-[11%] w-[14%] rounded-full bg-emerald-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[39%] top-[89%] h-[10%] w-[25%] rounded-full bg-emerald-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[57%] top-[39%] h-[14%] w-[22%] rounded-full bg-emerald-500/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[75%] top-[50%] h-[16%] w-[20%] rounded-full bg-emerald-700/30 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-8000 absolute left-[17%] top-[8%] h-[17%] w-[13%] rounded-full bg-teal-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute left-[27%] top-[28%] h-[17%] w-[13%] rounded-full bg-teal-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-7000 absolute left-[37%] top-[38%] h-[17%] w-[13%] rounded-full bg-teal-800/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-1000 absolute left-[47%] top-[48%] h-[17%] w-[13%] rounded-full bg-teal-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-10000 absolute left-[67%] top-[38%] h-[18%] w-[14%] rounded-full bg-teal-700/40 blur-3xl filter"></div>
      <div className="relative z-10 flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            GPU
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            G<span className="text-muted-foreground">raphical</span> P
            <span className="text-muted-foreground">rocessing</span> U
            <span className="text-muted-foreground">nit</span>
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <BsGpuCard className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p>
              The GPU, your computer&apos;s graphical powerhouse, handles visual
              processing.
            </p>
            <p>
              Think of it as a dedicated engine for rendering stunning visuals
              in games,
            </p>
            <p>editing videos smoothly, and manipulating images with ease.</p>
            <p>
              Upgrade your GPU and unleash the visual potential of your machine.
            </p>
          </div>
          <div>
            <BsGpuCard className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem] 3xl:size-[30rem] 4xl:size-[40rem]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 p-5 sm:p-10 xl:p-20">
        <GPUConfig />
      </div>
    </main>
  );
}
