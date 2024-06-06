"use client";

import { useState, useCallback, FormEvent } from "react";
import GeminiAI from "@/utils/gemini";
import MagicButton from "./ui/magicButton";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
  const [chat, setChat] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [originalLink, setOriginalLink] = useState<string>("");
  const [randomString, setRandomString] = useState<string>("");
  const [isMagicButtonPressed, setIsMagicButtonPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clipboardMessage, setClipboardMessage] = useState<string>();

  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setRandomString(result);
  };

  const words = [
    {
      text: "The",
      className: "font-semibold ",
    },
    {
      text: "Ultimate",
      className: "font-semibold ",
    },
    {
      text: "AI-Powered",
      className: "font-semibold  text-primary dark:text-primary",
    },
    {
      text: "Link",
      className: "font-semibold ",
    },
    {
      text: "Shortener",
      className: "font-semibold ",
    },
  ];

  const chatHandler = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setError(null);
      setSuggestions([]);
      setIsLoading(true);
      try {
        if (!chat) return;
        setOriginalLink(chat);
        await GeminiAI(chat);
        const result = await GeminiAI(chat);
        generateRandomString();
        setSuggestions(result);
        setChat("");
        setIsMagicButtonPressed(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          console.error(`[Unknown Error]: ${error}`);
        }
      }
    },
    [chat],
  );
  const copyToClipboard = useCallback(
    async (value: number | string) => {
      let linkToCopy;
      if (typeof value === "number") {
        linkToCopy = suggestions[value];
        await fetch(`/api/links/${linkToCopy}`, {
          method: "POST",
          body: JSON.stringify({
            redirect: originalLink,
          }),
        });
      } else {
        linkToCopy = value;
        await fetch(`/api/links/${linkToCopy}`, {
          method: "POST",
          body: JSON.stringify({
            redirect: originalLink,
          }),
        });
      }
      setShowToast(true);
      await navigator.clipboard.writeText(
        `https://www.xlip.xyz/go/${linkToCopy}`,
      );

      setClipboardMessage(`https://www.xlip.xyz/go/${linkToCopy}`);
      setTimeout(() => setShowToast(false), 3000);
    },
    [suggestions, originalLink],
  );
  return (
    <>
      <main className="z-10 flex min-h-screen flex-col items-center justify-center gap-8">
        <div>
          <div className="flex w-full items-center justify-center">
            <div className="mb-10 block text-center md:hidden">
              <h1 className="text-3xl font-semibold text-white">
                The Ultimate{" "}
                <span className="text-3xl font-semibold text-primary">
                  AI-Powered
                </span>{" "}
                Link Shortener
              </h1>
            </div>
            <div className="mb-10 hidden md:flex">
              <TypewriterEffectSmooth words={words} />
            </div>
          </div>
          <div className="self-center">
            <p className="mb-5 text-center md:text-xl">
              Struggling to Find the Perfect Link Name? Let AI Do the Work for
              You!
            </p>
            <div className="group relative inline-flex w-full justify-center">
              <form
                onSubmit={chatHandler}
                className="flex flex-col gap-4 md:flex-row"
              >
                <div className="relative inline-flex h-fit overflow-hidden rounded-full p-[2px]">
                  <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44BCFF_0%,#FF44EC_50%,#FF675E_75%,#44BCFF_100%)]" />
                  <input
                    id="ai suggestion"
                    type="text"
                    value={chat}
                    placeholder="Enter Your Long Link Here..."
                    onChange={(e) => setChat(e.target.value)}
                    className="input input-bordered !z-10 w-full max-w-xs rounded-full !bg-white"
                    autoComplete="off"
                  />
                </div>
                <MagicButton text="Generate Links" />
              </form>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {isLoading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="mx-auto mt-8 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {suggestions && suggestions.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 pb-4 pt-6 text-center">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="tooltip z-10"
                    data-tip="Copy to clipboard"
                  >
                    <button
                      // href={`/go/${suggestion}`}
                      key={index}
                      className="badge-white badge badge-outline p-3"
                      onClick={() => copyToClipboard(index)}
                    >
                      {suggestion}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {showToast && (
            <div className="toast">
              <div className="alert alert-success flex rounded-md p-2">
                <span className="text-sm font-semibold">
                  {`Copied to clipboard: ${clipboardMessage}`}
                </span>
              </div>
            </div>
          )}
          {isMagicButtonPressed && !isLoading && (
            <>
              <div className="divider">OR</div>
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                <p className="text-center text-lg font-semibold text-white">
                  Minimalist
                </p>
                <ArrowRight size={24} className="hidden md:block" />
                <div className="tooltip z-10" data-tip="Copy to clipboard">
                  <button
                    // href={`/go/${randomString}`}
                    className="badge-white badge badge-outline p-3 font-normal"
                    onClick={() => copyToClipboard(randomString)}
                  >
                    https://www.xlip.xyz/go
                    <span className="font-normal text-primary">{`/${randomString}`}</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <MoveDown size={48} className="text-white md:absolute md:bottom-10" />
      </main>
      <BackgroundBeams />
    </>
  );
}
