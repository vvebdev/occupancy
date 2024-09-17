import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Стенды",
  description: "Приложение для отображении информации по стендам",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-bs-theme="dark">
      <body>{children}</body>
    </html>
  );
}
