import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--fonts-sants",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      data-anim="on"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body>
        <div className="bg-atmosphere" aria-hidden />
        <div className="bg-grid" />
        <div className="bg-grain" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
