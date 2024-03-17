"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button
        size="icon"
        onClick={() => setTheme("light")}
        className="hidden dark:flex"
      >
        <Sun className="absolute h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        size="icon"
        onClick={() => setTheme("dark")}
        className="flex dark:hidden"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
