import NextThemeProvider from "@/providers/NextThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prime Connect - Customer Feedback Analytics",
  description: "Advanced customer feedback analytics platform",
  icons: {
    icon: [
      //{ url: '/prime_bank_icon.png', sizes: '32x32', type: 'image/png' },
      //{ url: '/prime_bank_icon.png', sizes: '48x48', type: 'image/png' },
      //{ url: '/prime_bank_icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: [
      //{ url: '/prime_bank_icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/prime_bank_icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '152x152', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '120x120', type: 'image/png' },
    ],
    other: [
      { url: '/prime_bank_icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/prime_bank_icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
