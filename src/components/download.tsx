import { useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Download() {
  const component = usePathname().replace("/", "").toUpperCase();

  const buildTime = 5000; // Time to "build" component in ms
  const bothToastsDuration = 2500; // Duration for how long both toasts are shown together

  const [buttonText, setButtonText] = useState("Download");
  const [disabled, setDisabled] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const handleDownload = () => {
    setButtonText(`Building ${component}`);
    setDisabled(true);

    const interval = 100;
    const steps = buildTime / interval;
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += 100 / steps;
      setProgressValue(progress);
    }, interval);

    setTimeout(() => {
      clearInterval(progressInterval);
      setButtonText("Download");
      setDisabled(false);
      toast("Download Started", {
        description: `Your ${component} is done and has started to download.`,
        duration: bothToastsDuration,
      });
      setProgressValue(0);
    }, buildTime);

    toast(`Building ${component}`, {
      description: `Your ${component} will be ready to download in ${buildTime / 1000} seconds.`,
      duration: buildTime + bothToastsDuration,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 pb-20 xl:gap-40">
      <Button
        className="h-fit w-fit bg-background/75 p-5 text-3xl font-semibold sm:text-4xl md:text-4xl lg:p-10 lg:text-5xl xl:text-6xl 2xl:text-7xl"
        variant="outline"
        onClick={handleDownload}
        disabled={disabled}
      >
        {buttonText}
      </Button>
      <Progress value={progressValue} max={100} />
    </div>
  );
}
