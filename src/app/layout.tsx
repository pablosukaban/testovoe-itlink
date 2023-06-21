import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import { Container } from "@/components/bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
