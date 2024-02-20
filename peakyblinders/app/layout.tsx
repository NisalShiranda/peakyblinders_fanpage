import type { Metadata } from "next";
import { Inter,Bebas_Neue,Padauk } from "next/font/google";


import "./globals.css";
import "./styles.css";



const bebas_init = Bebas_Neue({ 
  subsets: ["latin"],
  weight:['400'],
  variable:'--font-bebas'
});

const paduk_init = Padauk({
  subsets: ["latin"],
  weight:'700',
  variable:'--font-padauk'
});




export const metadata: Metadata = {
  title: "PeakyBlinders_Fanpage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={('')}>
      <body className={'${bebas_init.variable} ${paduk_init.variable}'}>{children}</body>
    </html>
  );
}
