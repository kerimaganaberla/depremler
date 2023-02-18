import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const Meta = {
  name: "depremler",
  title: "depremler",
  image: "https://depremler.vercel.app/meta.png",
  description: "Geçmiş depremlerden haberdar olmayı sağlayacak bir platform.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{Meta.title}</title>
        <meta name="description" content={Meta.description} />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site_name" content={Meta.name} />
        <meta name="twitter:title" content={Meta.title} />
        <meta name="twitter:description" content={Meta.description} />
        <meta name="twitter:image:src" content={Meta.image} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={Meta.name} />
        <meta property="og:title" content={Meta.title} />
        <meta property="og:description" content={Meta.description} />
        <meta property="og:image" content={Meta.image} />
      </Head>

      <Header />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
