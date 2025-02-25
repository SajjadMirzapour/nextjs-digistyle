import '@/src/styles/global.css'
import type { Metadata } from "next";
import { yekanFont } from '@/src/fonts/fonts'

export const metadata: Metadata = {
    title: "فروشگاه اینترنتی دیجی استایل ",
    description: "فروشگاه اینترنتی",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" >
            <body
                className={`${yekanFont.className} antialiased bg-white`}
            >
                {children}
            </body>
        </html>
    );
}
