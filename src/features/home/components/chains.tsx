import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import Link from "next/link";

export const ChainsSection = () => (
  <section className="py-[30vh]  relative overflow-hidden">
    <div className="max-w-[1500px] w-[90%] mx-auto ">
      <div className="flex justify-between">
        <div className="mb-[200px] max-w-[840px]">
          <H2 className="text-7xl leading-tight font-bold">
            Bringing crypto and traditional markets together, from Bitcoin to
            Gold and Stock Indices.
          </H2>
          <FontMedium className="text-font-70 mt-10 max-w-[500px] leading-normal">
            Experience professional-grade trading across all markets while
            learning from our integrated academy to enhance your skills.
          </FontMedium>
        </div>
        <div className="relative">
          <img src="/assets/tokens.png" className="w-[500px] -mt-[100px]" />
          <div className="mr-auto absolute bottom-[18%] -left-[35%]">
            <H2 className="text-9xl mr-[100px] font-bold">
              110<span>+</span>
            </H2>
            <FontLarge>Total pairs available</FontLarge>
            <Link href={""} className="text-font-80">
              <FontMedium className="mt-10">Explore tokens +</FontMedium>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="flex gap-[80px]">
        <div className="w-[500px]">
          <FontLarge className="font-bold mb-5 text-white w-fit pb-5 border-b-2 border-borderColor">
            UI/UX Crafted <br />
            by traders, for traders
          </FontLarge>
          <FontSmall className="text-lg">
            Clean and powerful UI/UX crafted by traders, for traders. We've
            experienced the frustrations across various perpetual platforms
            firsthand - from clunky interfaces to missing crucial features.
            That's why we've built a seamless trading experience that addresses
            all these pain points, giving you the tools you need.
          </FontSmall>
        </div>
        <div className="w-[500px]">
          <FontLarge className="font-bold  mb-5 text-white w-fit pb-5 border-b-2 border-borderColor">
            CEX like performance, <br />
            but better
          </FontLarge>
          <FontSmall className="text-lg">
            Experience professional-grade trading with advanced features: Live
            TradingView charts that auto-save your setups (indicators & drawings
            persist between sessions), and smart order management with multiple
            take-profit and stop-loss levels. Trade with the precision of a CEX
            while keeping full control of your assets.
          </FontSmall>
        </div>
        <div className="w-[500px]">
          <FontLarge className="font-bold  mb-5 text-white w-fit pb-5 border-b-2 border-borderColor">
            Real World Assets <br />
            Trading
          </FontLarge>
          <FontSmall className="text-lg">
            VeenoX bridges traditional finance and DeFi through perpetual
            futures trading on real-world assets. Using Pyth Network's price
            feeds, traders can access synthetic versions of major commodities
            (Gold, Oil) and stock indices (S&P 500, CAC 40) while enjoying the
            benefits of decentralized trading - no KYC and lower fees.
          </FontSmall>
        </div>
      </div>
    </div>

    {/* <spline-viewer
        className="absolute"
        url="https://prod.spline.design/ddYqWEvVmvGO3Hhc/scene.splinecode"
      ></spline-viewer> */}
  </section>
);
