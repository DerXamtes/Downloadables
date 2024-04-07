import Link from "next/link";
import { Download, Cpu, MemoryStick, HardDrive } from "lucide-react";
import { BsGpuCard } from "react-icons/bs";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="3xl:px-[10rem] 4xl:px-[20rem] bg-background">
      <div className="flex h-svh flex-col justify-between p-5 sm:p-10 xl:p-20">
        <div>
          <h1 className="3xl:text-[12rem] 4xl:text-[15rem] py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            Downloadables
          </h1>
          <p className="3xl:text-7xl 4xl:text-8xl text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Just Do<span className="text-muted-foreground">wnload</span> It!
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <Download className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p> Download everything your heart (and Motherboars) desires.</p>
            <p>
              From more Ram and Storage to a higher clock rate for your CPU.
            </p>
            <p> Your Computer will be convinced it&apos;s on Steroids.</p>
            <p>
              Because tech upgrades should be just as easy as downloading a cat
              meme.
            </p>
          </div>
          <div>
            <Download className="3xl:size-[30rem] 4xl:size-[40rem] hidden size-64 lg:flex xl:size-80 2xl:size-[24rem]" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="flex flex-1 flex-col items-center justify-around gap-10">
          <Cpu className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/cpu">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your CPU!
              </span>
            </Link>
          </Button>
        </div>
        <div className="flex-1 leading-relaxed">
          <h2 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            CPU
          </h2>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            C<span className="text-muted-foreground">entral</span> P
            <span className="text-muted-foreground">rocessing</span> U
            <span className="text-muted-foreground">nit</span>
          </p>
          <br />
          <p>
            The CPU is the brain of your computer, responsible for executing
            instructions and performing complex calculations. A higher clock
            rate or more cores can lead to faster data processing and improved
            multitasking. Upgrade your CPU for enhanced overall system
            performance and responsiveness.
          </p>
          <br />
          <p>
            Whether you&apos;re into gaming, content creation, or heavy
            computational tasks, a powerful CPU ensures a smoother and more
            efficient computing experience. Dive into the world of advanced
            processors and unlock the full potential of your system.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="flex-1 leading-relaxed">
          <h2 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            GPU
          </h2>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            G<span className="text-muted-foreground">raphical</span> P
            <span className="text-muted-foreground">rocessing</span> U
            <span className="text-muted-foreground">nit</span>
          </p>
          <br />
          <p>
            The GPU, or Graphics Card, is the powerhouse behind rendering
            graphics and visuals on your display. It plays a crucial role in
            gaming, video editing, and graphical tasks. Upgrading your GPU can
            result in higher frame rates, better graphics quality, and improved
            performance in graphics-intensive applications.
          </p>
          <br />
          <p>
            Dive into the world of ray tracing, advanced shaders, and
            high-resolution textures. Whether you&apos;re a gamer chasing
            realistic visuals or a content creator working with intricate
            designs, a top-tier GPU ensures a seamless and immersive experience.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-around gap-10">
          <BsGpuCard className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/gpu">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your GPU!
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="flex flex-1 flex-col items-center justify-around gap-10">
          <MemoryStick className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/ram">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your RAM!
              </span>
            </Link>
          </Button>
        </div>
        <div className="flex-1 leading-relaxed">
          <h2 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            RAM
          </h2>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            R<span className="text-muted-foreground">andom</span> A
            <span className="text-muted-foreground">cces</span> M
            <span className="text-muted-foreground">emory</span>
          </p>
          <br />
          <p>
            RAM is the fast, volatile memory that your computer uses to store
            data actively being used or processed. Upgrading your RAM can result
            in improved multitasking capabilities, faster data access, and
            smoother performance, especially when dealing with large files or
            running multiple applications simultaneously.
          </p>
          <br />
          <p>
            Dive into the world of faster data transfer rates, lower latency,
            and higher capacities. Whether you&apos;re a power user handling
            complex workloads, a creative professional working with
            resource-intensive applications, or a gamer seeking seamless
            gameplay, upgrading your RAM is a key step toward an optimized
            computing experience.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="flex-1 leading-relaxed">
          <h2 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
            SSD
          </h2>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            S<span className="text-muted-foreground">olid</span> S
            <span className="text-muted-foreground">tate</span> D
            <span className="text-muted-foreground">rive</span>
          </p>
          <br />
          <p>
            An SSD is a storage device that uses NAND-based flash memory to
            store and retrieve data. Upgrading to an SSD offers significantly
            faster boot times, quicker application launches, and improved
            overall system responsiveness compared to traditional HDDs.
          </p>
          <br />
          <p>
            Dive into the world of high-speed data transfer, reduced loading
            times, and enhanced durability. Whether you&apos;re a gamer seeking
            faster level loading, a creative professional dealing with large
            media files, or a system enthusiast aiming for a snappier computing
            experience, upgrading to an SSD is a game-changer for storage
            performance.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-around gap-10">
          <HardDrive className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/ssd">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your SSD!
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
