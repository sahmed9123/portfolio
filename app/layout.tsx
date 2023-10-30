import "./globals.css";
import { Play } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${play.className} bg-[#000236] text-slate-100 relative h-[5000px] pt-28`}
      >
        <div className="bg-[#3535ff] -z-10 absolute top-[-1rem] right-[5rem] h-[20rem] w-[30rem] rounded-full blur-[13rem]"></div>
        <div className="bg-[#20eded] -z-10 absolute top-[3rem] left-[5rem] h-[20rem] w-[30rem] rounded-full blur-[13rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
