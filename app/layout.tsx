// Root application layout and page shell for the developer portfolio.
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandeep Potdukhe | Full Stack Developer",
  description:
    "Full Stack Developer portfolio for Sandeep Potdukhe, focused on React.js, Angular, ASP.NET Core, SQL Server, and AWS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
