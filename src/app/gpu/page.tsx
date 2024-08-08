import { BsGpuCard } from "react-icons/bs";
import GPUConfig from "@/components/gpu";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animation-delay-3000 absolute left-[10%] top-[57%] h-[30%] w-[60%] animate-blob rounded-full bg-lime-500/40 blur-3xl filter"></div>
      <div className="animation-delay-7000 absolute left-[50%] top-[55%] h-[40%] w-[70%] animate-blob rounded-full bg-lime-600/20 blur-3xl filter"></div>

      <div className="animation-delay-9000 absolute left-[75%] top-[58%] h-[50%] w-[65%] animate-blob rounded-full bg-green-500/40 blur-3xl filter"></div>
      <div className="animation-delay-5000 absolute left-[0%] top-[26%] h-[60%] w-[75%] animate-blob rounded-full bg-green-700/20 blur-3xl filter"></div>

      <div className="animation-delay-4000 absolute left-[18%] top-[27%] h-[70%] w-[40%] animate-blob rounded-full bg-emerald-600/30 blur-3xl filter"></div>
      <div className="animation-delay-1000 absolute left-[65%] top-[20%] h-[35%] w-[55%] animate-blob rounded-full bg-emerald-700/20 blur-3xl filter"></div>

      <div className="animation-delay-2000 absolute left-[17%] top-[8%] h-[80%] w-[50%] animate-blob rounded-full bg-teal-500/40 blur-3xl filter"></div>
      <div className="animation-delay-5000 absolute left-[27%] top-[28%] h-[25%] w-[45%] animate-blob rounded-full bg-teal-600/20 blur-3xl filter"></div>
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
