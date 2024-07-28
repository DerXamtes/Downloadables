import { MemoryStick } from "lucide-react";
import RAMConfig from "@/components/ram";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="animate-blob animation-delay-2000 absolute left-[28%] top-[60%] h-[15%] w-[25%] rounded-full bg-sky-500/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[10%] top-[57%] h-[18%] w-[28%] rounded-full bg-sky-600/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[50%] top-[55%] h-[24%] w-[28%] rounded-full bg-sky-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-8000 absolute left-[15%] top-[14%] h-[24%] w-[10%] rounded-full bg-sky-800/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-10000 absolute left-[85%] top-[33%] h-[21%] w-[17%] rounded-full bg-sky-500/30 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-3000 absolute left-[75%] top-[58%] h-[25%] w-[13%] rounded-full bg-cyan-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[5%] top-[26%] h-[21%] w-[26%] rounded-full bg-cyan-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-7000 absolute left-[15%] top-[49%] h-[26%] w-[17%] rounded-full bg-cyan-700/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[25%] top-[68%] h-[24%] w-[30%] rounded-full bg-cyan-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-11000 absolute left-[60%] top-[15%] h-[23%] w-[19%] rounded-full bg-cyan-500/30 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-1000 absolute left-[18%] top-[27%] h-[16%] w-[30%] rounded-full bg-blue-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-3000 absolute left-[65%] top-[20%] h-[11%] w-[14%] rounded-full bg-blue-700/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-5000 absolute left-[39%] top-[59%] h-[10%] w-[25%] rounded-full bg-blue-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-7000 absolute left-[57%] top-[39%] h-[14%] w-[22%] rounded-full bg-blue-500/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-9000 absolute left-[75%] top-[55%] h-[17%] w-[20%] rounded-full bg-blue-600/40 blur-3xl filter"></div>

      <div className="animate-blob animation-delay-2000 absolute left-[17%] top-[8%] h-[17%] w-[13%] rounded-full bg-indigo-500/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-[27%] top-[28%] h-[17%] w-[13%] rounded-full bg-indigo-600/20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-6000 absolute left-[37%] top-[38%] h-[17%] w-[13%] rounded-full bg-indigo-800/40 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-8000 absolute left-[47%] top-[48%] h-[17%] w-[13%] rounded-full bg-indigo-600/30 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-10000 absolute left-[55%] top-[12%] h-[18%] w-[24%] rounded-full bg-indigo-700/30 blur-3xl filter"></div>
      <div className="relative z-10 flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            RAM
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            R<span className="text-muted-foreground">andom</span> A
            <span className="text-muted-foreground">cces</span> M
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
