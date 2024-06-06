"use client";

import { useState, useCallback, FormEvent } from "react";
import GeminiAI from "@/utils/gemini";
import MagicButton from "./ui/magicButton";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function Hero() {
  const [chat, setChat] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

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
      try {
        if (!chat) return;
        await GeminiAI(chat);
        const result = await GeminiAI(chat);
        setSuggestions(result);
        setChat("");
      } catch (error) {
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
    (index: number) => {
      navigator.clipboard.writeText(suggestions[index]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    },
    [suggestions],
  );
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
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
              <div className="relative inline-flex h-fit overflow-hidden rounded-full p-[1px]">
                <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44BCFF_0%,#FF44EC_50%,#FF675E_75%,#44BCFF_100%)]" />
                <input
                  id="ai suggestion"
                  type="text"
                  value={chat}
                  placeholder="Enter Your Long Link Here..."
                  onChange={(e) => setChat(e.target.value)}
                  className="input input-bordered z-10 w-full max-w-xs rounded-full bg-white"
                />
              </div>
              <MagicButton text="Generate Links" />
            </form>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3 py-4 text-center">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="badge-white badge badge-outline"
                onClick={() => copyToClipboard(index)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        {showToast && (
          <div className="toast toast-end">
            <div className="alert alert-success flex rounded-md p-2">
              <span className="text-sm font-semibold">Copied to clipboard</span>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
