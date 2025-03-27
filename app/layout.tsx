import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
export const pavelt = localFont({
  src: './Pavelt.woff2',
  display: 'swap',
})


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-poppins', // Optional: for CSS variables
});

 

export const ClashGrotesk
= localFont({
  src: './ClashGrotesk.woff2',
  display: 'swap',
})

export const ClashDisplay= localFont({
  src: './ClashDisplay.woff2',
  display: 'swap',
})


import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
