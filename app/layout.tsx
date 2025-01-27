import type { Metadata } from "next";

import "./styles/main.scss";



export const metadata: Metadata = {
  title: "ИП Гринькова В.Н. ",
  description: "Оказание услуг по ведению бухгалтерского и налогового учёта",
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
