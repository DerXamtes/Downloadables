"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function CPUConfig() {
  const [progressValue, setProgressValue] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
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
          description: `Your CPU is done and has started to download.`,
        });
      }, time * 1000);

      let countdown = time;
      const initialToast = toast({
        title: `Building CPU`,
        description: `Your CPU will be ready in ${countdown} second(s).`,
        duration: time * 1000,
      });

      const countdownInterval = setInterval(() => {
        countdown--;
        initialToast.update({
          id: initialToast.id,
          description: `Your CPU will be ready in ${countdown} second(s).`,
        });

        if (countdown === 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
    }
  };

  const [cores, setCores] = useState(8);
  const handleCoresChange = ([newCores]: [number]) => {
    setCores(newCores);
  };

  const [baseclockspeed, setBaseClockSpeed] = useState(2.7);
  const handleBaseClockChange = ([newBaseClockSpeed]: [number]) => {
    setBaseClockSpeed(newBaseClockSpeed);
  };

  const [boostclockspeed, setBoostClockSpeed] = useState(5.1);
  const handleBoostClockChange = ([newBoostClockSpeed]: [number]) => {
    setBoostClockSpeed(newBoostClockSpeed);
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-20 pb-20 md:gap-40 md:pb-40">
        <Card className="w-full flex-1 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              CPU Cores
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Choose the amount of cores as well as their base and boost clock
              rate.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium sm:text-lg md:flex-row md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            <div className="flex flex-1 flex-col gap-5 lg:gap-10">
              <p className="flex items-end">
                Cores: {cores}
                <span className="ml-auto text-sm text-muted-foreground">
                  {cores === 69 ? "nice" : null}
                </span>
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  defaultValue={[cores]}
                  min={1}
                  max={128}
                  step={1}
                  onValueChange={handleCoresChange}
                />
                <p className="font-normal leading-normal">
                  Choose the number of CPU cores.
                  <br />
                  More cores generally improve multitasking and parallel
                  processing capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p>Base Clock Rate: {baseclockspeed} GHz</p>
              <div className="space-y-10 md:space-y-20">
                <Slider
                  defaultValue={[baseclockspeed]}
                  min={0.1}
                  max={5}
                  step={0.1}
                  onValueChange={handleBaseClockChange}
                />
                <p className="font-normal leading-normal">
                  Adjust the base clock speed of your CPU. This value represents
                  the minimum clock speed at which your CPU operates. Higher
                  base clock speeds can lead to better overall system
                  performance.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p>Boost Clock Rate: {boostclockspeed} GHz</p>
              <div className="space-y-10 md:space-y-20">
                <Slider
                  defaultValue={[boostclockspeed]}
                  min={0.1}
                  max={10}
                  step={0.1}
                  onValueChange={handleBoostClockChange}
                />
                <p className="font-normal leading-normal">
                  Adjust the boost clock speed of your CPU. This value
                  represents the maximum clock speed that your CPU can achieve
                  under heavy workloads. A higher boost clock speed can enhance
                  performance during demanding tasks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col items-center gap-20 pb-20 md:gap-20 xl:gap-40">
        <Button
          variant="outline"
          className="h-fit w-fit p-5 text-3xl font-semibold sm:text-4xl md:text-4xl lg:py-10 lg:text-5xl xl:text-6xl 2xl:text-7xl"
          onClick={handleButtonClick}
          disabled={isDownloading}
        >
          {isDownloading ? `Building CPU` : "Download"}
        </Button>
        <Progress
          value={progressValue}
          data-state={progressValue === 100 ? "complete" : "loading"}
          data-value={progressValue}
          data-max={100}
        />
      </div>
    </div>
  );
}
//TODO make base values random
//TODO add more cards with more sliders for more customisation