import { MemoryStick } from "lucide-react";
import RAMConfig from "@/components/ram";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animation-delay-2000 absolute left-[28%] top-[60%] h-[45%] w-[70%] animate-blob rounded-full bg-sky-500/30 blur-3xl filter"></div>
      <div className="animation-delay-8000 absolute left-[10%] top-[57%] h-[30%] w-[60%] animate-blob rounded-full bg-sky-600/40 blur-3xl filter"></div>

      <div className="animation-delay-3000 absolute left-[50%] top-[55%] h-[55%] w-[45%] animate-blob rounded-full bg-cyan-700/20 blur-3xl filter"></div>
      <div className="animation-delay-9000 absolute left-[25%] top-[68%] h-[35%] w-[80%] animate-blob rounded-full bg-cyan-600/20 blur-3xl filter"></div>

      <div className="animation-delay-2000 absolute left-[18%] top-[27%] h-[25%] w-[55%] animate-blob rounded-full bg-blue-600/30 blur-3xl filter"></div>
      <div className="animation-delay-1000 absolute left-[57%] top-[39%] h-[35%] w-[40%] animate-blob rounded-full bg-blue-500/30 blur-3xl filter"></div>

      <div className="animation-delay-3000 absolute left-[27%] top-[28%] h-[30%] w-[45%] animate-blob rounded-full bg-indigo-600/20 blur-3xl filter"></div>
      <div className="animation-delay-7000 absolute left-[17%] top-[8%] h-[25%] w-[55%] animate-blob rounded-full bg-indigo-500/40 blur-3xl filter"></div>
      <div className="relative z-10 flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            RAM
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            R<span className="text-muted-foreground">andom</span> A
            <span className="text-muted-foreground">ccess</span> M
            <span className="text-muted-foreground">emory</span>
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <MemoryStick className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p>Equip your computer with high-speed RAM,</p>
            <p>
              a volatile memory that acts as the CPU&apos;s temporary workspace.
            </p>
            <p>
              Experience smoother multitasking and faster application loading,
            </p>
            <p>all thanks to the instantaneous data access provided by RAM.</p>
          </div>
          <div>
            <MemoryStick className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem] 3xl:size-[30rem] 4xl:size-[40rem]" />
          </div>
        </div>
      </div>
      <div className="relative z-10 p-5 sm:p-10 xl:p-20">
        <RAMConfig />
      </div>
    </main>
  );
}
