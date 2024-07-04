import Image from "next/image";
export default function HowDoesItWorkSection() {
  return (
    <section className="container prose relative my-16 max-w-5xl space-y-16 px-4 lg:prose-xl lg:prose-p:prose-base prose-h2:text-3xl prose-h3:text-2xl lg:p-0">
      <Image
        src="/background-1.png"
        alt="background gradient"
        width={0}
        height={0}
        className="absolute left-1/2 top-1/2 z-10 h-auto w-full -translate-x-1/2 -translate-y-1/2 transform"
      />
      <div className="relative z-20 rounded-lg bg-[#0C0512] px-4 py-8 text-white">
        <h2 className="text-center font-bold text-white">How Does it Work?</h2>
        <p className="font-bold text-white/50">
          Get your link short in 4 steps.
        </p>
        <div className="grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2">
          <div className="flex gap-3.5">
            <span className="text-4xl font-bold text-[#953268]">1</span>
            <p className="m-0 lg:m-0">
              Copy the URL you want to shorten and paste it into the input box.
            </p>
          </div>
          <div className="flex gap-3.5">
            <span className="text-4xl font-bold text-[#953268]">2</span>
            <p className="m-0 lg:m-0">
              Enter a custom name or use our AI suggestion tool.
            </p>
          </div>
          <div className="flex gap-3.5">
            <span className="text-4xl font-bold text-[#953268]">3</span>
            <p className="m-0 lg:m-0">
              Click the &apos;Generate&apos; button to create your short link
              instantly.
            </p>
          </div>
          <div className="flex gap-3.5">
            <span className="text-4xl font-bold text-[#953268]">4</span>
            <p className="m-0 lg:m-0">
              Share your short link and track its performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
