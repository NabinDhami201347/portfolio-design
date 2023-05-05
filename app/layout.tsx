import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nabin Dhami",
  description: "Hello, from personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
