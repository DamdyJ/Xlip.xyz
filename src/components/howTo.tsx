import Image from "next/image";
import React from "react";

export default function HowTo() {
  return (
    <>
      <h2 className="my-8 text-center text-3xl font-semibold text-white underline underline-offset-8 md:text-5xl">
        How to Utilize a Link Shortener
      </h2>
      <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-2">
        {/* left */}
        <div className="my-8 place-self-center md:my-20">
          <h3 className="w-full text-2xl font-medium">
            <span className="font-bold text-white">Step 1: </span>Find Your Long
            Link & Copy It
          </h3>
        </div>
        {/* right */}
        <div className="my-8 place-self-center md:mt-20">
          <Image
            className="h-fit w-full"
            src="/link.png"
            alt="Your long link image"
            width={500}
            height={52}
          />
        </div>
        {/* left */}
        <div className="my-8 place-self-center md:my-20">
          <div className="hidden md:block">
            <Image
              className="h-fit w-full"
              src="/generate.png"
              alt="Generate link by our ai"
              width={500}
              height={52}
            />
          </div>
          <div className="block md:hidden">
            <h3 className="text-2xl font-medium">
              <span className="font-bold text-white">Step 2: </span>Paste Your
              Long Link into the AI Suggestion Tool
            </h3>
          </div>
        </div>
        {/* right */}
        <div className="my-8 place-self-center md:my-20">
          <div className="block md:hidden">
            <Image
              className="h-fit w-full"
              src="/generate.png"
              alt="Generate link by our ai"
              width={500}
              height={52}
            />
          </div>
          <div className="hidden md:block">
            <h3 className="text-2xl font-medium">
              <span className="font-bold text-white">Step 2: </span>Paste Your
              Long Link into the AI Suggestion Tool
            </h3>
          </div>
        </div>
        {/* left */}
        <div className="my-8 place-self-center md:my-20">
          <h3 className="text-2xl font-medium">
            <span className="font-bold text-white">Step 3: </span>Choose Your
            Favorite Shortened Link & Click to Copy to Your Clipboard
          </h3>
        </div>
        {/* right */}
        <div className="my-8 place-self-center md:my-20">
          <Image
            className="h-fit w-full"
            src="/output.png"
            alt="Your long link image"
            width={500}
            height={52}
          />
        </div>
        {/* left */}
        <div className="my-8 place-self-center md:my-20">
          <div className="hidden md:block">
            <Image
              className="h-fit w-full"
              src="/go.png"
              alt="Generate link by our ai"
              width={500}
              height={52}
            />
          </div>
          <div className="block md:hidden">
            <h3 className="text-2xl font-medium">
              <span className="font-bold text-white">Step 4: </span>
              Go to your browser and enter:
            </h3>
            <span className="sm:text-xl">https://www.xlip.xyz/go/</span>
            <span className="text-primary sm:text-xl">your-url</span>
          </div>
        </div>
        {/* right */}
        <div className="my-8 place-self-center md:my-20">
          <div className="block md:hidden">
            <Image
              className="h-fit w-full"
              src="/go.png"
              alt="Generate link by our ai"
              width={500}
              height={52}
            />
          </div>
          <div className="hidden md:block">
            <h3 className="text-2xl font-medium">
              <span className="font-bold text-white">Step 4: </span>Go to your
              browser and enter: https://www.xlip.xyz/go/
              <span className="text-primary">your-choosen-link</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
