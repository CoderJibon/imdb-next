import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header.jsx";
import Providers from "./Providers.jsx";
import Navbar from "@/components/Navbar/Navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a Movie Database Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header></Header>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
