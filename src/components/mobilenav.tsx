import Link from "next/link";

import { Menu } from "lucide-react";

import { ModeToggle } from "@/components/modetoggle";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 z-10 flex h-14 w-full items-center justify-center bg-primary-foreground md:hidden">
      <Drawer>
        <DrawerTrigger>
          <Menu className="size-12" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
            <DrawerDescription>
              You can use this Menu to navigate this site.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-10 p-5 pb-32 sm:px-16">
            <div className="flex justify-between">
              <Button variant="outline">
                <Link href="/">Downloadables</Link>
              </Button>
              <ModeToggle />
            </div>
            <div className="flex justify-between gap-5">
              <Button className="flex-grow" variant="outline">
                <Link href="/cpu">CPU</Link>
              </Button>
              <Button className="flex-grow" variant="outline">
                <Link href="/gpu">GPU</Link>
              </Button>
              <Button className="flex-grow" variant="outline">
                <Link href="/ram">RAM</Link>
              </Button>
              <Button className="flex-grow" variant="outline">
                <Link href="/ssd">SSD</Link>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
