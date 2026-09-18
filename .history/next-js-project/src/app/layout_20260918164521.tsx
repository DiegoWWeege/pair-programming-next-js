import type { Metadata } from "next";
import "./globals.css";
import Inter
import NavBar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"], variable : "--font-inter"});

export const metadata: Metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido por Diego e Cherpinski",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
    >
      <body className="bg-gray-50 antialiased">
        <NavBar></NavBar>
        {children}
        
      </body>
    </html>
  );
}
