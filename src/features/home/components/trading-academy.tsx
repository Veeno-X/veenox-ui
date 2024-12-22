import { FontLarge, FontSmall, H2 } from "@/components/fonts";

export const TradingAcademySection = () => (
  <section className="py-[80px] sm:py-[100px] md:py-[120px] relative overflow-hidden bg-[url('/layers/test-2.png')] bg-cover bg-center">
  <div className="max-w-[1500px] w-[90%] mx-auto">
    <div className="flex flex-col lg:flex-row gap-10 items-center lg:justify-between mb-10">
      {/* Left Section: Image */}
      <div className="rounded-2xl bg-secondary h-[300px] sm:h-[400px] lg:h-[550px] w-full lg:w-[550px] border border-borderColor-DARK">
        <img
          src="/assets/trading-ac.png"
          className="object-cover h-full w-full rounded-2xl"
          alt="Trading Academy"
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-1/2">
        <H2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white text-center lg:text-left">
          Learn to trade, earn & competition tiers.
        </H2>
        <FontSmall className="text-base sm:text-lg lg:text-xl text-center lg:text-left">
          Our integrated trading academy combines bite-sized lessons with
          hands-on practice. Each completed lesson rewards you with points and
          unlocks new features, helping you progress from beginner to pro
          while earning rewards along the way.
        </FontSmall>

        {/* Features Section */}
        <div className="flex flex-col sm:flex-row gap-10 mt-[30px] sm:mt-[50px]">
          <div className="w-full sm:w-1/2 border-t-2 py-5 border-borderColor">
            <FontLarge className="font-bold mb-3 text-white text-center sm:text-left">
              Accessible
            </FontLarge>
            <FontSmall className="text-base sm:text-lg text-center sm:text-left">
              An intuitive learning path designed for all levels, from complete
              beginners to experienced traders wanting to refine their skills.
            </FontSmall>
          </div>
          <div className="w-full sm:w-1/2 border-t-2 py-5 border-borderColor">
            <FontLarge className="font-bold mb-3 text-white text-center sm:text-left">
              Rewarding
            </FontLarge>
            <FontSmall className="text-base sm:text-lg text-center sm:text-left">
              Earn rewards and unlock features as you progress through the
              academy. Every lesson completed brings new benefits and
              opportunities.
            </FontSmall>
          </div>
        </div>

        {/* Community Section */}
        <div className="w-full border-t-2 py-5 mt-8 border-borderColor">
          <FontLarge className="font-bold mb-3 text-white text-center lg:text-left">
            Community-Driven
          </FontLarge>
          <FontSmall className="text-base sm:text-lg text-center lg:text-left">
            Join a vibrant community of traders sharing the same journey.
            Participate in discussions, share insights, and learn from others'
            experiences while building your trading expertise.
          </FontSmall>
        </div>
      </div>
    </div>
  </div>
</section>

);
