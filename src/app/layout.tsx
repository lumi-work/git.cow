import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import StoreProvider from "./StoreProvider";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Git.cow",
  description: "Github Analytics",
  icons: {
    icon: "/gitcow.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
