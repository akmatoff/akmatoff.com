import type { Metadata } from "next";
import { Space_Mono, Ubuntu_Mono } from "next/font/google";
import cn from "classnames";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
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
      <body
        className={cn(
          ubuntuMono.className,
          "bg-background text-foreground px-4 md:px-40 lg:px-60 dark py-20"
        )}
      >
        {children}
      </body>
    </html>
  );
}
