import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      {/* <SessionProvider session={session} basePath="/api/auth"> */}
        <Component {...pageProps} />
      {/* </SessionProvider> */}
    </>
  );
}
