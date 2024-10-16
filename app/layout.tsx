import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import cn from "classnames";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import LenisWrapper from "@/components/LenisWrapper";

const kanit = Kanit({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azim Akmatov",
  description: "Front-End Developer based in Kyrgyzstan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(kanit.className, "bg-background text-foreground")}>
        <LenisWrapper />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="flex min-h-screen">
            <Sidebar />

            <div className="flex flex-col w-full">
              <Navbar />

              <section className="px-5 md:px-40">{children}</section>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
