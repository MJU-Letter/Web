import MainDetail from "../components/templates/main/MainDetail";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../../public/icons/logo.png";
import "../styles/globals.css";
import Navigation from "@/components/organisms/navigation/Navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center  tablet:w-screen ">
        <figure className=" hidden tablet:flex tablet:h-screen  tablet:items-center tablet:pr-[216px] transition-opacity duration-500 ease-in-out opacity-0 tablet:opacity-100 ">
          <Image
            className="w-419 h-198 object-contain "
            src={logo}
            alt="logo"
          />
        </figure>
        <main className="flex flex-col items-center tablet:flex-none w-fit ">
          <header className="w-full">
            <Navigation />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
