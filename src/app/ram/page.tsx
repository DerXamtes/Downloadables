import { MemoryStick } from "lucide-react";
import RAMConfig from "@/components/ram";

export default function Home() {
  return (
    <main className="bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
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
      <div className="p-5 sm:p-10 xl:p-20">
        <RAMConfig />
      </div>
    </main>
  );
}
