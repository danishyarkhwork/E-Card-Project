import "../styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/frontend/layouts/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
