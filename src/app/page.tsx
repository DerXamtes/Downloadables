import Link from "next/link";
import { Download, Cpu, MemoryStick, HardDrive } from "lucide-react";
import { BsGpuCard } from "react-icons/bs";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="overflow-hidden bg-background 3xl:px-[10rem] 4xl:px-[20rem]">
      <div className="flex h-svh flex-col justify-between p-5 sm:p-10 md:pt-20 xl:p-20">
        <div>
          <h1 className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]">
            Downloadables
          </h1>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
            Just Do<span className="text-muted-foreground">wnload</span> It!
          </p>
        </div>
        <div className="flex justify-center lg:hidden">
          <Download className="size-64 sm:size-80 md:size-96" />
        </div>
        <div className="flex flex-row items-center justify-between lg:items-end">
          <div className="flex flex-col gap-3 pb-14 text-base sm:text-lg md:pb-0 md:text-xl lg:gap-10 lg:text-2xl 2xl:text-3xl">
            <p> Download everything your heart (and Motherboards) desires.</p>
            <p>
              From more RAM and Storage to a higher clock rate for your CPU.
            </p>
            <p> Your Computer will be convinced it&apos;s on Steroids.</p>
            <p>
              Because tech upgrades should be just as easy as downloading a cat
              meme.
            </p>
          </div>
          <div>
            <Download className="hidden size-64 lg:flex xl:size-80 2xl:size-[24rem] 3xl:size-[30rem] 4xl:size-[40rem]" />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col-reverse gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="animation-delay-3000 absolute left-[78%] top-[56%] h-[50%] w-[20%] animate-blob rounded-full bg-red-600/40 blur-3xl filter"></div>
        <div className="animation-delay-7000 absolute left-[52%] top-[2%] h-[60%] w-[40%] animate-blob rounded-full bg-red-800/30 blur-3xl filter"></div>
        <div className="animation-delay-10000 absolute left-[80%] top-[79%] h-[25%] w-[55%] animate-blob rounded-full bg-red-500/30 blur-3xl filter"></div>
        <div className="animation-delay-9000 absolute left-[15%] top-[15%] h-[45%] w-[60%] animate-blob rounded-full bg-red-600/20 blur-3xl filter"></div>

        <div className="animation-delay-4000 absolute left-[1%] top-[10%] h-[70%] w-[35%] animate-blob rounded-full bg-orange-500/30 blur-3xl filter"></div>
        <div className="animation-delay-7000 absolute left-[2%] top-[54%] h-[29%] w-[27%] animate-blob rounded-full bg-orange-500/40 blur-3xl filter"></div>
        <div className="animation-delay-6000 absolute left-[41%] top-[36%] h-[29%] w-[25%] animate-blob rounded-full bg-orange-600/20 blur-3xl filter"></div>
        <div className="animation-delay-8000 absolute left-[5%] top-[25%] h-[14%] w-[22%] animate-blob rounded-full bg-orange-800/40 blur-3xl filter"></div>
        <div className="z-10 flex flex-1 flex-col items-center justify-around gap-10">
          <Cpu className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/cpu">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your CPU!
              </span>
            </Link>
          </Button>
        </div>
        <div className="z-10 flex-1 leading-relaxed">
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
      <div className="relative flex w-full flex-col gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="animation-delay-3000 absolute left-[10%] top-[57%] h-[30%] w-[60%] animate-blob rounded-full bg-lime-500/40 blur-3xl filter"></div>
        <div className="animation-delay-7000 absolute left-[50%] top-[55%] h-[40%] w-[70%] animate-blob rounded-full bg-lime-600/20 blur-3xl filter"></div>

        <div className="animation-delay-9000 absolute left-[75%] top-[58%] h-[50%] w-[65%] animate-blob rounded-full bg-green-500/40 blur-3xl filter"></div>
        <div className="animation-delay-5000 absolute left-[0%] top-[26%] h-[60%] w-[75%] animate-blob rounded-full bg-green-700/20 blur-3xl filter"></div>

        <div className="animation-delay-4000 absolute left-[18%] top-[27%] h-[70%] w-[40%] animate-blob rounded-full bg-emerald-600/30 blur-3xl filter"></div>
        <div className="animation-delay-1000 absolute left-[65%] top-[20%] h-[35%] w-[55%] animate-blob rounded-full bg-emerald-700/20 blur-3xl filter"></div>

        <div className="animation-delay-2000 absolute left-[17%] top-[8%] h-[80%] w-[50%] animate-blob rounded-full bg-teal-500/40 blur-3xl filter"></div>
        <div className="animation-delay-5000 absolute left-[27%] top-[28%] h-[25%] w-[45%] animate-blob rounded-full bg-teal-600/20 blur-3xl filter"></div>
        <div className="z-10 flex-1 leading-relaxed">
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
        <div className="z-10 flex flex-1 flex-col items-center justify-around gap-10">
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
      <div className="relative flex w-full flex-col-reverse gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="animation-delay-2000 absolute left-[28%] top-[60%] h-[45%] w-[70%] animate-blob rounded-full bg-sky-500/30 blur-3xl filter"></div>
        <div className="animation-delay-8000 absolute left-[10%] top-[57%] h-[30%] w-[60%] animate-blob rounded-full bg-sky-600/40 blur-3xl filter"></div>

        <div className="animation-delay-3000 absolute left-[50%] top-[55%] h-[55%] w-[45%] animate-blob rounded-full bg-cyan-700/20 blur-3xl filter"></div>
        <div className="animation-delay-9000 absolute left-[25%] top-[68%] h-[35%] w-[80%] animate-blob rounded-full bg-cyan-600/20 blur-3xl filter"></div>

        <div className="animation-delay-2000 absolute left-[18%] top-[27%] h-[25%] w-[55%] animate-blob rounded-full bg-blue-600/30 blur-3xl filter"></div>
        <div className="animation-delay-1000 absolute left-[57%] top-[39%] h-[35%] w-[40%] animate-blob rounded-full bg-blue-500/30 blur-3xl filter"></div>

        <div className="animation-delay-3000 absolute left-[27%] top-[28%] h-[30%] w-[45%] animate-blob rounded-full bg-indigo-600/20 blur-3xl filter"></div>
        <div className="animation-delay-7000 absolute left-[17%] top-[8%] h-[25%] w-[55%] animate-blob rounded-full bg-indigo-500/40 blur-3xl filter"></div>
        <div className="z-10 flex flex-1 flex-col items-center justify-around gap-10">
          <MemoryStick className="size-72 sm:size-96 md:size-[30rem]" />
          <Button asChild className="size-fit">
            <Link href="/ram">
              <span className="d:text-xl p-1 sm:text-lg lg:text-2xl 2xl:text-3xl">
                Upgrade your RAM!
              </span>
            </Link>
          </Button>
        </div>
        <div className="z-10 flex-1 leading-relaxed">
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
      <div className="relative flex w-full flex-col gap-10 p-5 py-10 text-base sm:p-10 sm:text-lg md:pb-0 md:text-xl lg:flex-row lg:gap-20 lg:text-2xl xl:p-20 2xl:text-3xl">
        <div className="animation-delay-2000 absolute left-[15%] top-[45%] h-[45%] w-[60%] animate-blob rounded-full bg-amber-500/30 blur-3xl filter"></div>
        <div className="animation-delay-8000 absolute left-[40%] top-[30%] h-[30%] w-[40%] animate-blob rounded-full bg-amber-700/20 blur-3xl filter"></div>
        <div className="animation-delay-3000 absolute left-[25%] top-[50%] h-[35%] w-[45%] animate-blob rounded-full bg-amber-700/30 blur-3xl filter"></div>
        <div className="animation-delay-6000 absolute left-[50%] top-[70%] h-[50%] w-[70%] animate-blob rounded-full bg-amber-800/20 blur-3xl filter"></div>

        <div className="animation-delay-2000 absolute left-[30%] top-[20%] h-[20%] w-[35%] animate-blob rounded-full bg-yellow-600/20 blur-3xl filter"></div>
        <div className="animation-delay-5000 absolute left-[50%] top-[60%] h-[40%] w-[60%] animate-blob rounded-full bg-yellow-600/20 blur-3xl filter"></div>
        <div className="animation-delay-1000 absolute left-[65%] top-[40%] h-[25%] w-[50%] animate-blob rounded-full bg-yellow-500/40 blur-3xl filter"></div>
        <div className="animation-delay-9000 absolute left-[20%] top-[75%] h-[30%] w-[50%] animate-blob rounded-full bg-yellow-500/20 blur-3xl filter"></div>
        <div className="z-10 flex-1 leading-relaxed">
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
        <div className="z-10 flex flex-1 flex-col items-center justify-around gap-10">
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
