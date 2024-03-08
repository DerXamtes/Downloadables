"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

import Download from "@/components/download";

export default function SSDConfig() {
  return (
    <div>
      <div className="flex flex-col items-center gap-20 pb-20 md:gap-40 md:pb-40">
        <Card className="w-full flex-1 md:p-5">
          <CardHeader>
            <CardTitle className="py-5 text-5xl font-semibold sm:text-6xl md:text-7xl lg:py-10 lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              SSD
            </CardTitle>
            <CardDescription className="pb-10 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Choose...
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 pb-10 font-medium sm:text-lg md:flex-row md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            <div className="flex flex-1 flex-col gap-5 lg:gap-10">
              <p className="flex items-end"></p>
              <div className="space-y-10 md:space-y-20">
                <Slider disabled={true} />
                <p className="font-normal sm:text-lg md:text-2xl lg:text-3xl"></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Download />
    </div>
  );
}
//TODO make base values random
//TODO add more cards with more sliders for more customisation
