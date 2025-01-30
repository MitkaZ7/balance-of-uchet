import type { Metadata } from "next";

import "./styles/main.scss";



export const metadata: Metadata = {
  title: "ИП Гринькова В.Н. - Бухгалтерский учет",
  description: "Оказание услуг по ведению бухгалтерского и налогового учёта",
  icons: {
    icon: "/favicon.ico", 
    // apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container" style={{ containerType: 'inline-size' }}>{children}</div>
      </body>
    </html>
  );
}
