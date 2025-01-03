import { FontMedium, H2 } from "@/components/fonts";
import Link from "next/link";

export const ChainsSection = () => (
  <section className="py-[100px] sm:py-[150px] lg:py-[30vh] relative overflow-hidden">
    <div className="max-w-[1500px] w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-[50px] lg:mb-[40px]">
        {/* Left Content */}
        <div className="mb-10 lg:mb-[40px] max-w-full lg:max-w-[840px] text-center lg:text-left">
          <H2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
            Bringing crypto and traditional markets together, from Bitcoin to
            Gold and Stock Indices.
          </H2>
          <FontMedium className="text-base sm:text-lg lg:text-font-70 mt-6 sm:mt-8 lg:mt-10 max-w-full lg:max-w-[500px] leading-normal">
            Experience professional-grade trading across all markets while
            learning from our integrated academy to enhance your skills.
          </FontMedium>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center w-full gap-6 text-center">
          {/* Text Content */}
          <div>
            <H2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
              <span>110+ Total pairs available</span>
            </H2>
            <Link href={""} className="text-font-80">
              <FontMedium className="mt-5 sm:mt-10 inline-block">
                Explore tokens +
              </FontMedium>
            </Link>
          </div>

          {/* Image */}
          <img src="/assets/tokens.png" className="w-[250px]" alt="Tokens" />
        </div>
      </div>
    </div>
  </section>
);
