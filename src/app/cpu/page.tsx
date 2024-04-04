import { Cpu } from "lucide-react";
import CPUConfig from "@/components/cpu";

export default function Home() {
  return (
    <main>
      <div className="flex h-svh flex-col justify-between p-5 sm:p-10 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            CPU
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
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
            <Cpu className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem]" />
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-10 xl:p-20">
        <CPUConfig />
      </div>
    </main>
  );
}
