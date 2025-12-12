import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Blog",
    template: "%s | The Blog"
  },
  description: "Descrição do site",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
