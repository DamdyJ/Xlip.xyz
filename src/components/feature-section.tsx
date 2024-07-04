import { Brain, Link2, QrCode, PieChart } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="container prose relative z-20 max-w-5xl space-y-16 px-4 lg:prose-xl lg:prose-p:prose-base prose-h2:text-3xl prose-h3:text-2xl lg:p-0">
      <h2 className="text-center font-bold text-white">Features</h2>
      <div className="grid grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <div className="w-full rounded-lg bg-[#0E0610] px-6 pb-1 pt-6">
          <Brain size={48} className="text-white" />
          <h3 className="font-bold text-white">AI Naming Suggestions</h3>
          <p className="font-bold text-white/50">
            AI-powered suggestions for personalized and optimized link names
            based on content.
          </p>
        </div>
        <div className="rounded-lg bg-[#1E0E2B] px-6 pb-1 pt-6">
          <Link2 size={48} className="text-white" />
          <h3 className="font-bold text-white">Link Shortener</h3>
          <p className="font-bold text-white/50">
            Quickly shorten lengthy URLs into concise, shareable links.
          </p>
        </div>
        <div className="rounded-lg bg-[#0E0610] px-6 pb-1 pt-6 md:bg-[#1E0E2B] lg:bg-[#0E0610]">
          <QrCode size={48} className="text-white" />
          <h3 className="font-bold text-white">QR Code Generator</h3>
          <p className="font-bold text-white/50">
            Instantly create dynamic QR codes for easy offline-to-online
            engagement.
          </p>
        </div>
        <div className="rounded-lg bg-[#1E0E2B] px-6 pb-1 pt-6 md:bg-[#0E0610] lg:bg-[#1E0E2B]">
          <PieChart size={48} className="text-white" />
          <h3 className="font-bold text-white">Analytics</h3>
          <p className="font-bold text-white/50">
            Detailed insights into link performance, including clicks and
            geographic data.
          </p>
        </div>
      </div>
    </section>
  );
}
