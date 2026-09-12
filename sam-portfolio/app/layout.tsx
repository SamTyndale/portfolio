import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz", "SOFT"], display: "swap" });

export const metadata: Metadata = { title: { default: "Sam Tyndale — ECE Student · Developer · Builder", template: "%s | Sam Tyndale" }, description: "Sam Tyndale — ECE student, developer and builder working across software, interactive web and electronics.", metadataBase: new URL("https://sam-portfolio-silk.vercel.app"), authors: [{ name: "Sam Tyndale", url: "https://github.com/SamTyndale" }], creator: "Sam Tyndale", keywords: ["Sam Tyndale", "ECE", "React", "Django", "Three.js", "portfolio", "developer"], openGraph: { title: "Sam Tyndale — ECE Student · Developer · Builder", description: "Engineering meets software, interaction and things worth building.", type: "website", url: "https://sam-portfolio-silk.vercel.app" } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#faf9f6" }, { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" }] };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${geist.variable} ${mono.variable} ${fraunces.variable}`}>{children}</body></html>;
}
