import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://downloadables.ansorg.dev",
    },
    {
      url: "https://downloadables.ansorg.dev/cpu",
    },
    {
      url: "https://downloadables.ansorg.dev/gpu",
    },
    {
      url: "https://downloadables.ansorg.dev/ram",
    },
    {
      url: "https://downloadables.ansorg.dev/ssd",
    },
  ];
}
