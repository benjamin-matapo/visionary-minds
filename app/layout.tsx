import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Visionary Minds Scholars - Your Path to Academic Excellence in China",
  description:
    "Comprehensive support for international students seeking scholarships and admission to Chinese universities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: Helvetica, Arial, sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
