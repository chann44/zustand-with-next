import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "-/components/site/tailwind-indicator";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "-/components/site/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zustand with next 13",
  description: "Learning zustand with next",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
