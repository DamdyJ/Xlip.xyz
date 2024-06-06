import HowTo from "@/components/howTo";
import Hero from "@/components/hero";

export default async function Home() {

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <Hero />
      <HowTo/>
    </div>
  );
}
