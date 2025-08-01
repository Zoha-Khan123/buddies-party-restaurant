import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Buddies Party Restaurant",
  description: "Zomari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.className}` }>
      <body>
        {children}
      </body>
    </html>
  );
}
