import type { Metadata } from "next";
import { pretendard } from "./fonts";
import "./globals.css";
import { Header } from "@/widgets/layout";
import { AuthProvider } from "@/shared/hooks";

export const metadata: Metadata = {
  title: "DevFolio",
  description: "개발자들의 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
