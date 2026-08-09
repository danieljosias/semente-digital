import { Hero } from "./components/components/home/Hero";

import type { Metadata } from "next";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semente Digital | Sites que geram oportunidades",
  description:
    "Criamos sites, landing pages e experiências digitais para empresas que querem crescer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <Hero />
          {children}
        </Provider>
      </body>
    </html>
  );
}