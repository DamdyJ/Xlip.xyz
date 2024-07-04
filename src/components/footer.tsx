import Link from "next/link";
import XlipIcon from "./icons/logo";

export default function Footer() {
  return (
    <footer className="bg-[#120E14] font-bold leading-[120%] text-white relative z-20">
      <div className="container mx-auto max-w-5xl space-y-8 px-4 pb-11 pt-8">
        <nav className="md:flex-row md:justify-between lg:gap-[103px] flex flex-col gap-6">
          <section className="lg:justify-between md:mx-0 mx-auto flex max-w-[401px] flex-col gap-4 rounded-lg bg-[#1E0E2B] p-4">
            <XlipIcon />
            <p className="text-white/50">
              XLip simplifies your digital interactions by offering smart URL
              shortening, dynamic QR code generation, and insightful link
              analytics—all in one platform.
            </p>
          </section>
          <section className="md:text-left md:self-start w-full max-w-[157px] space-y-4 self-center text-center">
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
          <section className="md:text-left md:self-start w-full max-w-[157px] space-y-4 self-center text-center">
            <h5 className="text-white/50">LET&apos;S CONNECT</h5>
            <ul className="space-y-4">
              <li>
                <Link href="/">Contact me</Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/damdy-junaedi/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/DamdyJ" target="_blank">
                  Github
                </Link>
              </li>
            </ul>
          </section>
        </nav>
        <p className="md:text-left text-center text-white/50">
          Copyright © <time dateTime="2024">2024</time> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
