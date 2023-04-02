import BottomNav from "../components/bottom-nav";
import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Yonge Street Journal",
  description: "Fair and Balanced News in Yonge Street, Canada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={work_sans.className}>
      <body>
        <Header />
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
