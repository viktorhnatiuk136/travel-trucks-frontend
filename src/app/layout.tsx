import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Campers rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
