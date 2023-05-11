import "./globals.css";

import { Footer, Navbar } from "@/components/shared";
import { Provider } from "@/context";

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
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
