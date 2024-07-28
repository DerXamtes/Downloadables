"use client";

import React, { useState, useEffect } from "react";
import Download from "@/components/download";
import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col items-center gap-20  pb-20 md:gap-40 md:pb-40">
        <Card className="w-full flex-1 bg-background/50 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              CPU Cores
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Choose the amount of cores as well as their base and boost clock
              rate.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium lg:flex-row">
            <div className="flex flex-1 flex-col gap-5 lg:gap-10">
              <p className="flex items-end sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Cores: {cores}
                <span className="ml-auto text-sm text-muted-foreground">
                  {cores === 69 ? "nice" : null}
                </span>
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  value={[cores]}
                  min={1}
                  max={128}
                  step={1}
                  onValueChange={handleCoresChange}
                />
                <p className="text-balance font-normal leading-normal">
                  Choose the number of CPU cores. More cores generally improve
                  multitasking and parallel processing capabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Base Clock Rate: {baseclockspeed} GHz
              </p>
              <div className="space-y-10 md:space-y-20">
                <Slider
                  value={[baseclockspeed]}
                  min={0.1}
                  max={5}
                  step={0.1}
                  onValueChange={handleBaseClockChange}
                />
                <p className="text-balance font-normal leading-normal">
                  Adjust the base clock speed of your CPU. This value represents
                  the minimum clock speed at which your CPU operates. Higher
                  base clock speeds can lead to better overall system
                  performance.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Boost Clock Rate: {boostclockspeed} GHz
              </p>
              <div className="space-y-10 md:space-y-20">
                <Slider
                  value={[boostclockspeed]}
                  min={0.1}
                  max={10}
                  step={0.1}
                  onValueChange={handleBoostClockChange}
                />
                <p className="text-balance font-normal leading-normal">
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
      <Download />
    </div>
  );
}
