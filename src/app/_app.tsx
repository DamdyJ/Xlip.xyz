import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session} basePath="/api/auth">
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
