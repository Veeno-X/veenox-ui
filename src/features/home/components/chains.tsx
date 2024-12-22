import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import Link from "next/link";

export const ChainsSection = () => (
  <section className="py-[100px] sm:py-[150px] lg:py-[30vh] relative overflow-hidden">
  <div className="max-w-[1500px] w-[90%] mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-[50px] lg:mb-[200px]">
      {/* Left Content */}
      <div className="mb-10 lg:mb-[200px] max-w-full lg:max-w-[840px] text-center lg:text-left">
        <H2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
          Bringing crypto and traditional markets together, from Bitcoin to Gold and Stock Indices.
        </H2>
        <FontMedium className="text-base sm:text-lg lg:text-font-70 mt-6 sm:mt-8 lg:mt-10 max-w-full lg:max-w-[500px] leading-normal">
          Experience professional-grade trading across all markets while learning from our integrated academy to enhance your skills.
        </FontMedium>
      </div>

      {/* Right Content */}
      <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
        <img
          src="/assets/tokens.png"
          className="w-[300px] sm:w-[400px] lg:w-[500px] -mt-[50px] lg:-mt-[100px]"
          alt="Tokens"
        />
        <div className="absolute bottom-[5%] sm:bottom-[10%] lg:bottom-[18%] left-[50%] sm:left-[40%] lg:-left-[35%] transform -translate-x-1/2 lg:translate-x-0 text-center lg:text-left">
          <H2 className="text-6xl sm:text-7xl lg:text-9xl font-bold">
            110<span>+</span>
          </H2>
          <FontLarge>Total pairs available</FontLarge>
          <Link href={""} className="text-font-80">
            <FontMedium className="mt-5 sm:mt-10 inline-block">
              Explore tokens +
            </FontMedium>
          </Link>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] text-center lg:text-left">
      <div className="w-full lg:w-[500px]">
        <FontLarge className="font-bold mb-3 lg:mb-5 text-white pb-3 lg:pb-5 border-b-2 border-borderColor">
          UI/UX Crafted <br /> by traders, for traders
        </FontLarge>
        <FontSmall className="text-base sm:text-lg">
          Clean and powerful UI/UX crafted by traders, for traders. We've experienced the frustrations across various perpetual platforms firsthand - from clunky interfaces to missing crucial features. That's why we've built a seamless trading experience that addresses all these pain points, giving you the tools you need.
        </FontSmall>
      </div>
      <div className="w-full lg:w-[500px]">
        <FontLarge className="font-bold mb-3 lg:mb-5 text-white pb-3 lg:pb-5 border-b-2 border-borderColor">
          CEX-like performance, <br /> but better
        </FontLarge>
        <FontSmall className="text-base sm:text-lg">
          Experience professional-grade trading with advanced features: Live TradingView charts that auto-save your setups (indicators & drawings persist between sessions), and smart order management with multiple take-profit and stop-loss levels. Trade with the precision of a CEX while keeping full control of your assets.
        </FontSmall>
      </div>
      <div className="w-full lg:w-[500px]">
        <FontLarge className="font-bold mb-3 lg:mb-5 text-white pb-3 lg:pb-5 border-b-2 border-borderColor">
          Real World Assets <br /> Trading
        </FontLarge>
        <FontSmall className="text-base sm:text-lg">
          VeenoX bridges traditional finance and DeFi through perpetual futures trading on real-world assets. Using Pyth Network's price feeds, traders can access synthetic versions of major commodities (Gold, Oil) and stock indices (S&P 500, CAC 40) while enjoying the benefits of decentralized trading - no KYC and lower fees.
        </FontSmall>
      </div>
    </div>
  </div>
</section>

);
