import type {Metadata} from "next";
import {Public_Sans} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";

const publicSans = Public_Sans({
    variable: "--font-public-sans",
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
            className={`${publicSans.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-background-default text-text-primary text-body2">{children}</body>
        </html>
    );
}
