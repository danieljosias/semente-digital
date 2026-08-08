import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layout/Header/Header";
import { Provider } from "./components/ui/provider"


export const metadata: Metadata = {
  title: "Semente Digital | Sites que geram oportunidades",
  description:
    "Criamos sites, landing pages e experiências digitais para empresas que querem crescer.",
  };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
