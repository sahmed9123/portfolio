import "./globals.css";
import { Play } from "next/font/google";
import Header from "@/components/header";

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Saima Ahmed | Portfolio",
  description: "Saima Ahmed portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${play.className} bg-slate-100 text-gray-950 relative h-[5000px] pt-28`}
      >
        <div className="bg-[#40a4fc] -z-10 absolute top-[-1rem] right-[5rem] h-[20rem] w-[30rem] rounded-full blur-[13rem]"></div>
        <div className="bg-[#2be3ff] -z-10 absolute top-[3rem] left-[5rem] h-[20rem] w-[30rem] rounded-full blur-[13rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
