import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { MoveDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ChatForm from "./chat-form";

export default function Hero() {
  const words = [
    { text: "The", className: "font-semibold " },
    { text: "Ultimate", className: "font-semibold " },
    {
      text: "AI-Powered",
      className: "font-semibold text-primary dark:text-primary",
    },
    { text: "Link", className: "font-semibold " },
    { text: "Shortener", className: "font-semibold " },
  ];

  return (
    <div>
      <main className="z-10 flex min-h-screen md:min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8">
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
            <ChatForm />
          </div>
        </div>
        <BackgroundBeams />
      </main>
      <MoveDown size={48} className="text-white md:mt-auto mx-auto" />
    </div>
  );
}
