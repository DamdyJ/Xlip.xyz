import HowTo from "@/components/howTo";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import LinkCounter from "@/components/link-counter";

export default async function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-4 pt-6">
        <Hero />
        <LinkCounter/>  
        <HowTo />
      </div>
      <Footer />
    </>
  );
}
