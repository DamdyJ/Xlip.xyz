import Link from "next/link";
import XlipIcon from "./icons/logo";

export default function Footer() {
  return (
    <footer className="min-h-[17.88rem] bg-[#120E14] font-bold leading-[120%] text-white">
      <div className="container mx-auto max-w-5xl space-y-8 px-4 pb-11 pt-8">
        <nav className="flex gap-[103px]">
          <section className="flex max-w-[401px] flex-col justify-between rounded-lg bg-[#1E0E2B] p-4">
            <XlipIcon />
            <p className="text-white/50">
              XLip simplifies your digital interactions by offering smart URL
              shortening, dynamic QR code generation, and insightful link
              analytics—all in one platform.
            </p>
          </section>
          <section className="w-full max-w-[157px] space-y-4">
            <h5 className="text-white/50">NAVIGATION</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#how-does-it-work">How does it work</Link>
              </li>
              <li>
                <Link href="#try-it-out">Try it out</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>
          </section>
          <section className="w-full max-w-[157px] space-y-4">
            <h5 className="text-white/50">LET&apos;S CONNECT</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#features">Contact me</Link>
              </li>
              <li>
                <Link href="#how-does-it-work">LinkedIn</Link>
              </li>
              <li>
                <Link href="#try-it-out">Github</Link>
              </li>
            </ul>
          </section>
        </nav>
        <p className="">Copyright © 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
