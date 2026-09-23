import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Nhat Truong — Frontend Developer",
  description:
    "Frontend Developer with 1+ years building performant interfaces for Forex/Crypto trading and Fintech platforms. React · TypeScript · Next.js",
  keywords: ["frontend developer", "react", "typescript", "nextjs", "ho chi minh", "vietnam"],
  authors: [{ name: "Tran Nhat Truong", url: "mailto:tnt040519@gmail.com" }],
  openGraph: {
    title: "Tran Nhat Truong — Frontend Developer",
    description: "Building performant interfaces for trading and fintech platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
