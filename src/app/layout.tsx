import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/context/react-query-provider";
import { Header } from "@/components/header";
import { GetStartedCard } from "@/components/get-started-card";
import { TrendingCoins } from "@/components/trending-coins";
import { Team } from "@/components/team";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={inter.className}>
          <Header />
          <main className="flex min-h-screen flex-col overflow-x-hidden bg-white-base">
            <section className="px-12 translate-x-1">
              <div className="w-full flex pt-12 h-screen flex-col lg:flex-row">
                <div className="flex flex-col w-2/3 h-fit gap-5">
                  {children}
                  <Team />
                </div>
                <aside className="w-1/3 flex flex-col gap-5 pl-5">
                  <GetStartedCard />
                  <TrendingCoins />
                </aside>
              </div>
            </section>
          </main>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
