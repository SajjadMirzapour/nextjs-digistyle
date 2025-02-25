import "@/src/styles/global.css";
import type { Metadata } from "next";
import { yekanFont } from "@/src/fonts/fonts";
import Header from "@/src/ui/Header";
import Footer from "@/src/ui/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | فروشگاه اینترنتی دیجی استایل",
    default: "فروشگاه اینترنتی دیجی استایل",
  },
  description: "فروشگاه اینترنتی کالاهای ایرانی",
  metadataBase: new URL("https://www.digistyles.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanFont.className} antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
