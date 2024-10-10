import { Header } from "./components/header";
import "./globals.css";
import { Saira } from "next/font/google"

export const metadata = {
  title: "Agenda",
  description: "A melhor solução de agenda",
};

const saira = Saira({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
}) 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
