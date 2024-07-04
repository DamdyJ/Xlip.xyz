import URLGeneratorForm from "./url-generator-form";

export default function TryItOutSections() {
  return (
    <section className="container prose relative my-16 max-w-5xl px-4 lg:prose-xl lg:prose-p:prose-base prose-h2:text-3xl prose-h3:text-2xl lg:p-0">

      <div className="relative z-20 p-8">
        <h2 className="text-center font-bold text-white">Try it out</h2>
        <URLGeneratorForm />
      </div>
    </section>
  );
}
