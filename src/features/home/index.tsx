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
      <section className="h-[90vh] pt-[120px] w-screen flex items-center bg-[url('/layers/test-co.png')] bg-center bg-cover  overflow-hidden">
        <div className="flex max-w-[1500px] w-[90%] items-center justify-between mx-auto z-[100] pointer-events-none">
          <div className="w-full flex flex-col items-center">
            <H2 className="text-7xl leading-tight text-center font-bold">
              First All-in-One DEX Unifying Crypto & Traditional Markets
            </H2>
            <FontMedium className="text-font-70 text-center mt-10 max-w-[900px] mx-auto leading-normal">
              The first comprehensive perpetual DEX uniting traditional markets
              and DeFi, combining professional trading tools with an innovative
              learning ecosystem for all traders.
            </FontMedium>
            <button className="mt-7 lg:mt-[50px] h-[40px] lg:h-[50px] px-2 lg:px-3 rounded-lg mx-auto text-white font-bold text-lg cursor-pointer bg-[#836EF9]">
              <Link href="/perp/PERP_BTC_USDC" className="w-full h-full">
                <div className="flex items-center justify-center w-full text-sm lg:text-lg h-full px-3 lg:px-4 py-1.5 lg:py-2">
                  Launch Alpha
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className="relative overflow-x-hidden">
        <section className="pb-[120px] pt-[160px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="">
              <H2 className="text-7xl leading-tight  font-bold">
                Level up your trading
              </H2>
              <H2 className="text-7xl ml-[100px] leading-tight text-font-80 font-bold">
                experience on perp DEX
              </H2>
            </div>
            <div className="flex justify-between mt-[100px]">
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
