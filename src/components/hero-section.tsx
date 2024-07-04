import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FloatingImages from "@/components/floating-images";
import { Github } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container prose prose-sm prose-invert flex max-w-5xl flex-col items-center space-y-6 px-4 py-12 md:prose-base lg:prose-xl">
      <Link href={"https://github.com/DamdyJ/Xlip.xyz"}>
        <Badge
          variant="default"
          className="w-fit bg-[#42364D] px-6 py-2 text-xs font-bold text-white lg:text-base hover:bg-white/40"
        >
          # Free & Open Source
          <span className="pl-4">
            <Github size={24} />
          </span>
        </Badge>
      </Link>
      <h1 className="text-center">
        Simplify and Strengthen Your Digital Presence
      </h1>
      <Button className="bg-gradient-to-r from-[#823CB4] to-[#953268] font-bold text-white hover:from-[#823CB4]/95 hover:to-[#953268]/95">
        Try it now
      </Button>
      <div className="relative">
        <FloatingImages />
        <Image
          src="/hero-section/hero-image.webp"
          alt="hero image"
          width={810}
          height={420}
          unoptimized
          priority
          className="shadow-phone md:shadow-tablet lg:shadow-desktop mx-auto w-11/12"
        />
      </div>
    </section>
  );
}
