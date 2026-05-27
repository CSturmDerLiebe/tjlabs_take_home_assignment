import type {Metadata} from "next";
import {Barlow, Public_Sans} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import Image from "next/image";

const publicSans = Public_Sans({
    variable: "--font-public-sans",
    subsets: ["latin"],
});

const barlow = Barlow({
    variable: "--font-barlow",
    weight: "600",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TJLabs Demo",
    description: "Demo Project for TJLabs",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${publicSans.variable} ${barlow.variable} h-full bg-[image:url('/backgrounds/bg.png')] bg-cover bg-no-repeat`}
        >
        <body className="min-h-full flex flex-col items-stretch font-text text-text-primary text-body2 bg-background-default/90">
        <header className="flex justify-end pt-5.5 pr-5">
            <Image
                src="/icons/flag_uk.svg"
                alt="Union Jack"
                priority
                width={27.65}
                height={20}
                className="aspect-27.65/20 rounded-sm"
            />
        </header>

        {children}
        </body>
        </html>
    );
}
