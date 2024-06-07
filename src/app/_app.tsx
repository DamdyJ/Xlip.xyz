import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Script from "next/script";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session} basePath="/api/auth">
        <Component {...pageProps} />
      </SessionProvider>
      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-DQ3HZK6V4G"
        strategy="afterInteractive"
      >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DQ3HZK6V4G');
          `}
      </Script>
    </>
  );
}
