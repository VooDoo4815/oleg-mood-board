import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Мудборд Олег",
    description: "Сделано для души",
    openGraph: {
        siteName: "Мудборд Олег",
        title: "Мудборд Олег",
        description: "Какой ты Олег?",
        url: "https://voodoo4815.github.io/oleg-mood-board/",
        type: "website",
        images: [
            {
                url: "https://voodoo4815.github.io/oleg-mood-board/images/78ccb62f0456e74b23905415c8456d0a.jpg",
                height: 100,
                width: 100,
            },
        ],
    },
    manifest: "https://voodoo4815.github.io/oleg-mood-board/manifest.json",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
