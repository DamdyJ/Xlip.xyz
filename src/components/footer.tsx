import React from "react";
import Avatar from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="min-h-20 bg-slate-950">
        <div className="mx-auto w-full max-w-5xl px-4 py-8">
          <div className="mb-4 flex flex-col items-center gap-3 text-center">
            <div className="flex gap-2 items-center">
              <Image
                src="/xlip-logo-white.svg"
                alt="xlip logo"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <h4 className="text-lg font-bold text-white">Xlip</h4>
            </div>
            <Avatar />
            <h5 className="md:w-1/2">
              Hey there! 👋 I&apos;m Damdy, the developer behind Xlip. You can
              follow me 👇
            </h5>
          </div>
          <div className="mb-3 flex justify-center gap-4">
            <div className="tooltip z-10" data-tip="github/DamdyJ">
              <Link href={"https://github.com/DamdyJ"}>
                <Image
                  src="/github.svg"
                  alt="icon"
                  className="h-10 w-10"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div className="tooltip z-10" data-tip="linkedIn/damdy-junaedi">
              <Link href={"https://www.linkedin.com/in/damdy-junaedi"}>
                <Image
                  src="/linkedIn.svg"
                  alt="icon"
                  className="h-10 w-10"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="text-center text-xs">
            <p>Copyright © 2024 - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
