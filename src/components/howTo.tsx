import Image from "next/image";
import React from "react";

export default function HowTo() {
  return (
    <>
      <h2 className="mb-8 text-center text-3xl font-semibold text-white underline underline-offset-8 md:text-5xl">
        How to Utilize a Link Shortener
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {/* left */}
        <div className="my-8 md:my-20 place-self-center">
          <h3 className="text-2xl font-medium">
            <span className="font-bold text-white">Step 1: </span>Find Your Long
            Link & Copy It
          </h3>
        </div>
        {/* right */}
        <div className="my-8 md:mt-20 place-self-center">
          <Image
            src="/link.png"
            alt="Your long link image"
            width={500}
            height={52}
          />
        </div>
        {/* left */}
        <div className="my-8 md:my-20 place-self-center">
          <div className="hidden md:block">
            <Image
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
        <div className="my-8 md:my-20 place-self-center p-4">
          <div className="block md:hidden">
            <Image
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
        <div className="my-8 md:my-20 place-self-center p-4">
          <h3 className="text-2xl font-medium">
            <span className="font-bold text-white">Step 3: </span>Choose Your
            Favorite Shortened Link & Click to Copy to Your Clipboard
          </h3>
        </div>
        {/* right */}
        <div className="my-8 md:my-20 place-self-center">
          <Image
            src="/output.png"
            alt="Your long link image"
            width={500}
            height={52}
          />
        </div>
      </div>
    </>
  );
}
