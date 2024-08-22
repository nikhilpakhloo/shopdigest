import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Shop Digest",
  description: "Stay updated with the latest deals, trends, and news in the shopping world with Shop Digest. Your go-to source for all things shopping!",
  author: "Nikhil Pakhloo",
  keywords: ["shopping", "deals", "trends", "news", "retail"],
  image: "https://avatars.githubusercontent.com/u/698437?s=200&v=4",

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
