import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <img
          src="/og-image.png"
          alt="image"
          width={200}
          height={200}
          tw="h-full w-full"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
