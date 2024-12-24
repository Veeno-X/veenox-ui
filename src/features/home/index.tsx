"use client";
import { FontMedium, H2 } from "@/components/fonts";
import { insights } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import { ChainsSection } from "./components/chains";
import { FAQSection } from "./components/faq";
import { BoxInsight } from "./components/insight-box";
import { TradingAcademySection } from "./components/trading-academy";

const Home: FC = () => {
  return (
    <main>
      <section className="h-[100vh] pt-[120px] w-screen flex items-center bg-[url('/layers/test-co.png')] bg-center bg-cover bg-[#000] overflow-hidden">
        <div className="flex max-w-[1500px] w-[90%] items-center justify-between mx-auto z-[100] pointer-events-none">
          <div className="w-full flex flex-col items-center">
            <H2 className="text-4xl sm:text-6xl lg:text-7xl leading-tight text-center font-bold">
              First All-in-One DEX Unifying Crypto & Traditional Markets
            </H2>
            <FontMedium className="text-font-70 text-center mt-10 max-w-[900px] mx-auto leading-normal">
              The first comprehensive perpetual DEX uniting traditional markets and DeFi, combining professional trading tools with an innovative learning ecosystem for all traders.
            </FontMedium>
            <button className="mt-7 lg:mt-[50px] h-[40px] sm:h-[45px] md:h-[50px] px-2 sm:px-3 lg:px-4 rounded-lg mx-auto text-white font-bold text-sm sm:text-lg cursor-pointer bg-[#836EF9]">
              <Link
                href="/perp/PERP_BTC_USDC"
                className="w-full h-full"
                aria-label="Launch the Alpha version of the platform"
              >
                <div className="flex items-center justify-center w-full text-xs sm:text-sm lg:text-lg h-full px-3 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5">
                  Launch Alpha
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
           
      <div className="relative overflow-x-hidden">
        <section className="pb-[80px] sm:pb-[100px] md:pb-[120px] pt-[100px] sm:pt-[140px] md:pt-[160px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <H2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
                Level up your trading experience on perp DEX
              </H2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-[50px] sm:mt-[75px] md:mt-[100px]">
              {insights.map(({ title, icon, description }, i) => (
                <BoxInsight
                  key={i}
                  icon={icon}
                  title={title}
                  description={description}
                  index={i}
                />
              ))}
            </div>

          </div>
        </section>


        <ChainsSection />
        <img
          src="/layers/test-4.png"
          className="absolute scale-x-[-1] -rotate-45 h-[250vh] -top-[80vh] object-contain -left-[20%]"
        />

      </div>

      <TradingAcademySection />

      <FAQSection />

    </main>
  );
};

export default Home;
