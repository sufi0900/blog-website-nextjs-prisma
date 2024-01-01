import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextAuthProvider } from "@/components/Providers";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });
import theme from "./theme";
export const metadata: Metadata = {
  title: "DevInsight Network",
  description:
    "Explore a world of insights on our Next.js-powered blog platform, built with Prisma and MongoDB. Dive into a variety of topics, share your thoughts, and connect with a community passionate about web development and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <div>
            <NextAuthProvider>
              <div> {children}</div>
              <Toaster />
            </NextAuthProvider>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
