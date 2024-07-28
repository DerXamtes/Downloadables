"use client";

import React, { useState } from "react";
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

export default function SSDConfig() {
  const modulesAmount = [];
  for (let i = 1; i <= 100; i++) {
    modulesAmount.push(i);
  }
  const [selectedModulesAmount, setSelectedModulesAmount] = React.useState(6);

  const modulesCapacity = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];
  const [selectedModulesCapacity, setSelectedModulesCapacity] =
    React.useState(3);

  const overallCapacity =
    modulesAmount[selectedModulesAmount] *
    modulesCapacity[selectedModulesCapacity];

  const readSpeed = [];
  for (let i = 0; i <= 20000; i += 50) {
    readSpeed.push(i);
  }
  const [selectedreadSpeed, setselectedreadSpeed] = React.useState(217);

  const writeSpeed = [];
  for (let i = 0; i <= 20000; i += 50) {
    writeSpeed.push(i);
  }
  const [selectedwriteSpeed, setselectedwriteSpeed] = React.useState(123);

  return (
    <div>
      <div className="flex flex-col items-center gap-20  pb-20 md:gap-40 md:pb-40">
        <Card className="w-full flex-1 bg-background/50 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              SSD Amount
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Specify the Number of SSD(s) and their Capacity.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium lg:flex-row">
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="flex items-end sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Number of SSDs: {modulesAmount[selectedModulesAmount]}{" "}
                <span className="ml-auto text-sm text-muted-foreground">
                  {modulesAmount[selectedModulesAmount] === 69 ? "nice" : null}
                </span>
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={modulesAmount.length - 1}
                  step={1}
                  value={[selectedModulesAmount]}
                  onValueChange={(newselectedModulesAmount) =>
                    setSelectedModulesAmount(newselectedModulesAmount[0])
                  }
                />
                <p className="text-balance font-normal leading-normal">
                  Choose the number of SSDs.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Capacity per SSD:{" "}
                {Intl.NumberFormat().format(
                  modulesCapacity[selectedModulesCapacity],
                )}{" "}
                Gb
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={modulesCapacity.length - 1}
                  step={1}
                  value={[selectedModulesCapacity]}
                  onValueChange={(newselectedModulesCapacity) => {
                    setSelectedModulesCapacity(newselectedModulesCapacity[0]);
                  }}
                />
                <p className="text-balance font-normal leading-normal">
                  Choose the capacity per SSD. Higher capacity per SSD allows
                  for more data storage.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Overall Capacity: {Intl.NumberFormat().format(overallCapacity)}{" "}
                Gb
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={
                    modulesAmount[modulesAmount.length - 1] *
                    modulesCapacity[modulesCapacity.length - 1]
                  }
                  step={1}
                  value={[overallCapacity]}
                  disabled={true}
                  variant="nothumb"
                />
                <p className="text-balance font-normal leading-normal">
                  Total Storage based on number of SSDs and their capacity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full flex-1 bg-background/50 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              SSD Speeds
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Specify the sequential read and write Speeds for your SSD(s).
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium md:flex-row">
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                read speed:{" "}
                {Intl.NumberFormat().format(readSpeed[selectedreadSpeed])} MB/s
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={readSpeed.length - 1}
                  step={1}
                  value={[selectedreadSpeed]}
                  onValueChange={(newselectedreadSpeed) =>
                    setselectedreadSpeed(newselectedreadSpeed[0])
                  }
                />
                <p className="font-normal leading-normal">
                  The read speed determines how fast your SSD can read stored
                  data.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                write speed:{" "}
                {Intl.NumberFormat().format(writeSpeed[selectedwriteSpeed])}{" "}
                MB/s
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={writeSpeed.length - 1}
                  step={1}
                  value={[selectedwriteSpeed]}
                  onValueChange={(newselectedwriteSpeed) =>
                    setselectedwriteSpeed(newselectedwriteSpeed[0])
                  }
                />
                <p className="font-normal leading-normal">
                  The write speed defines how fast your SSD can store data.
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
