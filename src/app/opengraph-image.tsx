import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Downloadables - Just Download It!";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw=" w-full h-full flex flex-col justify-center items-center bg-black text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        <p tw="text-8xl">Downloadables</p>
        <br />
        <p tw="text-5xl flex">
          Just Do <span tw="text-[#71717a] pr-3">wnload</span> It!
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
