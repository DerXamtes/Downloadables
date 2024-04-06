import { HardDrive } from "lucide-react";
import SSDConfig from "@/components/ssd";

export default function Home() {
  return (
    <main className="3xl:px-[10rem] 4xl:px-[20rem] bg-background">
      <div className="flex h-svh flex-col justify-between p-5 sm:p-10 xl:p-20">
        <div>
          <h1 className="3xl:text-[12rem] 4xl:text-[15rem] py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            SSD
          </h1>
          <p className="3xl:text-7xl 4xl:text-8xl text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
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
            <HardDrive className="3xl:size-[30rem] 4xl:size-[40rem] hidden size-64 lg:flex xl:size-80 2xl:size-[24rem]" />
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-10 xl:p-20">
        <SSDConfig />
      </div>
    </main>
  );
}
