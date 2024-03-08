"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

export default function Download() {
  const [progressValue, setProgressValue] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [component, setComponent] = useState("url");

  const { toast } = useToast();

  useEffect(
    (url) => setComponent(window.location.href.split("/").pop().toUpperCase()),
    [],
  );

  const handleButtonClick = () => {
    if (!isDownloading) {
      const totalSteps = 100; // steps to finish
      const time = 5; // time in seconds to finish
      const step = 100 / totalSteps;

      setProgressValue(0);
      setIsDownloading(true);

      const updateProgress = () => {
        setProgressValue((prev) => {
          const newValue = prev + step;
          return newValue < 100 ? newValue : 100;
        });
      };

      const timer = setInterval(updateProgress, (time * 1000) / totalSteps);
      setTimeout(() => {
        clearInterval(timer);
        setProgressValue(0);
        setIsDownloading(false);

        toast({
          title: "Download Started",
          description: `Your ${component} is done and has started to download.`,
        });
      }, time * 1000);

      let countdown = time;
      const initialToast = toast({
        title: `Building ${component}`,
        description: `Your ${component} will be ready in ${countdown} second(s).`,
        duration: time * 1000,
      });

      const countdownInterval = setInterval(() => {
        countdown--;
        initialToast.update({
          description: `Your ${component} will be ready in ${countdown} second(s).`,
        });

        if (countdown === 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-20 pb-20 md:gap-20 xl:gap-40">
      <Button
        variant="outline"
        className="h-fit w-fit p-5 text-3xl font-semibold sm:text-4xl md:text-4xl lg:py-10 lg:text-5xl xl:text-6xl 2xl:text-7xl"
        onClick={handleButtonClick}
        disabled={isDownloading}
      >
        {isDownloading ? `Building ${component}` : "Download"}
      </Button>
      <Progress
        value={progressValue}
        data-state={progressValue === 100 ? "complete" : "loading"}
        data-value={progressValue}
        data-max={100}
      />
    </div>
  );
}
