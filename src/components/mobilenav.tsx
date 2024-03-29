import Link from "next/link";

import { Menu } from "lucide-react";

import { ModeToggle } from "@/components/modetoggle";

import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 z-10 flex h-14 w-full items-center justify-center border-t bg-background/75 backdrop-blur-sm md:hidden">
      <Drawer>
        <DrawerTrigger>
          <Menu className="size-12" />
        </DrawerTrigger>
        <DrawerContent className="border-b-0 bg-background/75 backdrop-blur-sm">
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
            <DrawerDescription>
              You can use this Menu to navigate this site.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-10 p-5 pb-32 sm:px-16">
            <div className="flex justify-between">
              <DrawerClose asChild>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "outline" })}
                >
                  Downloadables
                </Link>
              </DrawerClose>
              <ModeToggle />
            </div>
            <div className="flex justify-between gap-5">
              <DrawerClose asChild className="flex-grow">
                <Link
                  href="/cpu"
                  className={buttonVariants({ variant: "outline" })}
                >
                  CPU
                </Link>
              </DrawerClose>
              <DrawerClose asChild className="flex-grow">
                <Link
                  href="/gpu"
                  className={buttonVariants({ variant: "outline" })}
                >
                  GPU
                </Link>
              </DrawerClose>
              <DrawerClose asChild className="flex-grow">
                <Link
                  href="/ram"
                  className={buttonVariants({ variant: "outline" })}
                >
                  RAM
                </Link>
              </DrawerClose>
              <DrawerClose asChild className="flex-grow">
                <Link
                  href="/ssd"
                  className={buttonVariants({ variant: "outline" })}
                >
                  SSD
                </Link>
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
