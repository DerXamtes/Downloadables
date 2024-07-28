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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function RAMConfig() {
  const [ddrGeneration, setddrGeneration] = React.useState("DDR2");
  const handleDDRGenerationChange = (newDDRGeneration: string) => {
    setSelectedModuleAmount(1);
    setddrGeneration(newDDRGeneration);
  };
  const ddrGenerationIndex = ["DDR1", "DDR2", "DDR3", "DDR4", "DDR5"].indexOf(
    ddrGeneration,
  );

  const modulesAmount = [
    [1, 2, 3, 4],
    [1, 2, 4],
    [1, 2, 4, 8],
    [1, 2, 4, 8, 16],
    [1, 2, 4, 8, 16, 32],
  ];
  const selectedModulesAmount = modulesAmount[ddrGenerationIndex];
  let [selectedModuleAmount, setSelectedModuleAmount] = React.useState(1);

  const modulesCapacity = [
    [64, 128, 256, 512],
    [256, 512, 1024, 2048],
    [1024, 2048, 4096, 8192],
    [2048, 4096, 8192, 16384],
    [4096, 8192, 16384, 32768],
  ];
  const selectedModulesCapacity = modulesCapacity[ddrGenerationIndex];
  let [selectedModuleCapacity, setSelectedModuleCapacity] = React.useState(1);

  const overallCapacity =
    selectedModulesAmount[selectedModuleAmount] *
    selectedModulesCapacity[selectedModuleCapacity];

  return (
    <div>
      <div className="flex flex-col items-center gap-20  pb-20 md:gap-40 md:pb-40">
        <Card className="w-full flex-1 bg-background/50 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              DDR Generation
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Choose <span className="text-foreground">D</span>ouble{" "}
              <span className="text-foreground">D</span>ata{" "}
              <span className="text-foreground">R</span>ate Synchronous Dynamic
              Random-Access Memory Generation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-10 md:space-y-20">
            <ToggleGroup
              variant="outline"
              type="single"
              value={ddrGeneration}
              onValueChange={(newDDRGeneration) => {
                handleDDRGenerationChange(newDDRGeneration);
              }}
            >
              <ToggleGroupItem
                value="DDR1"
                className="flex-1 rounded-l-md sm:text-lg md:text-2xl lg:p-10 lg:text-3xl"
              >
                DDR1
              </ToggleGroupItem>
              <ToggleGroupItem
                value="DDR2"
                className="flex-1 sm:text-lg md:text-2xl lg:p-10 lg:text-3xl"
              >
                DDR2
              </ToggleGroupItem>
              <ToggleGroupItem
                value="DDR3"
                className="flex-1 sm:text-lg md:text-2xl lg:p-10 lg:text-3xl"
              >
                DDR3
              </ToggleGroupItem>
              <ToggleGroupItem
                value="DDR4"
                className="flex-1 sm:text-lg md:text-2xl lg:p-10 lg:text-3xl"
              >
                DDR4
              </ToggleGroupItem>
              <ToggleGroupItem
                value="DDR5"
                className="flex-1 rounded-r-md sm:text-lg md:text-2xl lg:p-10 lg:text-3xl"
              >
                DDR5
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="sm:text-lg md:text-2xl lg:text-3xl">
              {ddrGeneration === "DDR1" && (
                <p>DDR1 released in 1998 and operates at 2.5V/2.6V.</p>
              )}
              {ddrGeneration === "DDR2" && (
                <p>DDR2 released in 2003 and operates at 1.8V.</p>
              )}
              {ddrGeneration === "DDR3" && (
                <p>DDR3 released in 2007 and operates at 1.5V/1.35V.</p>
              )}
              {ddrGeneration === "DDR4" && (
                <p>DDR4 released in 2014 and operates at 1.2V/1.05V.</p>
              )}
              {ddrGeneration === "DDR5" && (
                <p>DDR5 released in 2020 and operates at 1.1V.</p>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full flex-1 bg-background/50 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              Memory Amount
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Specify the number of memory modules and their capacity.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium lg:flex-row">
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Number of modules: {selectedModulesAmount[selectedModuleAmount]}
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={modulesAmount[ddrGenerationIndex].length - 1}
                  step={1}
                  value={[selectedModuleAmount]}
                  onValueChange={(newselectedModuleAmount) => {
                    setSelectedModuleAmount(newselectedModuleAmount[0]);
                  }}
                />
                <p className="text-balance font-normal leading-normal">
                  Choose the number of memory modules. More modules can enhance
                  overall system performance.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                per Module: {""}
                {selectedModulesCapacity[selectedModuleCapacity]} Mb
              </p>
              <div className="space-y-10 sm:text-lg md:space-y-20 md:text-2xl lg:text-3xl">
                <Slider
                  max={modulesCapacity[ddrGenerationIndex].length - 1}
                  step={1}
                  value={[selectedModuleCapacity]}
                  onValueChange={(newselectedModuleCapacity) => {
                    setSelectedModuleCapacity(newselectedModuleCapacity[0]);
                  }}
                />
                <p className="text-balance font-normal leading-normal">
                  Choose the capacity per memory module. Higher capacity per
                  module allows for more data storage.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 sm:text-lg md:text-2xl lg:gap-10 lg:text-3xl">
              <p className="md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                Capacity: {overallCapacity} Mb
              </p>
              <div className="space-y-10 md:space-y-20">
                <Slider
                  value={[overallCapacity]}
                  min={selectedModulesAmount[0] * selectedModulesCapacity[0]}
                  max={
                    selectedModulesAmount[selectedModulesAmount.length - 1] *
                    selectedModulesCapacity[selectedModulesCapacity.length - 1]
                  }
                  step={1}
                  disabled={true}
                  variant="nothumb"
                />
                <p className="text-balance font-normal leading-normal">
                  Total memory capacity calculated based on selected modules and
                  capacity.
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
