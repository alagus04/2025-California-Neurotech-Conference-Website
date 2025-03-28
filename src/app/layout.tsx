import type { Metadata } from "next";
import { Roboto, Outfit as Serif } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";

// Configure fonts
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700", "900"], 
  variable: "--font-roboto",
  style: ["normal", "italic"]
});

const outfit = Serif({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"], 
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: "California Neurotechnology Conference",
  description: "Made with <3 by Crux@UCLA & NeurotechUSC",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Neurotech Conference", "Neurotechnology", "Brain Interfaces", 
    "USC Neurotech", "UCLA Neurotech", "San Diego Events", 
    "UCSD Neurotech", "UCD Neurotech"
  ],
  verification: {
    google: "USNVjLEP28cwKY3EaHWoIJ1oP4_SNYwfKyPwyxMQ_qg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-[#f4f4f4] overscroll-none`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
