"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isSpinning, setIsSpinning] = React.useState(false);

  const ChangeTheme = () => {
    setIsSpinning(true);

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setTimeout(() => {
      setIsSpinning(false);
    }, 500);
  };

  return (
    <div>
      <Button size="icon" onClick={ChangeTheme}>
        <Moon
          className={`flex h-[1.2rem] w-[1.2rem] dark:hidden ${isSpinning ? "animate-spin duration-500 ease-in-out" : ""}`}
        />

        <Sun
          className={`hidden h-[1.2rem] w-[1.2rem] dark:flex ${isSpinning ? "animate-spin duration-500 ease-in-out" : ""}`}
        />
      </Button>
    </div>
  );
}
