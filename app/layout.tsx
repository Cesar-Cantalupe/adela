import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Adela Sáenz Cavia",
  description: "El camino hacia tu pasión - Facilitación, liderazgo y desarrollo humano",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Swanky+and+Moo+Moo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased bg-white min-h-screen" suppressHydrationWarning>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
