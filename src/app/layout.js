import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Body: bersih, mudah dibaca, populer di produk modern
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Heading: karakter kuat tapi tetap profesional
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata = {
  title: "Gita Elizza Larasati | Information Systems Portfolio",
  description:
    "Portfolio of Gita Elizza Larasati — Information Systems graduate focused on business analysis, system analysis, and data analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}