import { FontLarge, FontSmall, H2 } from "@/components/fonts";

export const TradingAcademySection = () => (
  <section className="py-[120px] relative overflow-hidden bg-[url('/layers/test-2.png')]">
    <div className="max-w-[1500px] w-[90%] mx-auto ">
      <div className="flex gap-10 justify-between items-center mb-10">
        <div className="rounded-2xl bg-secondary h-[550px] w-[550px] border border-borderColor-DARK">
          <img
            src="/assets/trading-ac.png"
            className="object-cover h-full rounded-2xl"
          />
        </div>

        <div className="w-1/2 max-w-1/2">
          <H2 className="font-bold text-6xl leading-tight mb-8 text-white">
            Learn to trade, earn & competition tiers.
          </H2>
          <FontSmall className="text-xl">
            Our integrated trading academy combines bite-sized lessons with
            hands-on practice. Each completed lesson rewards you with points and
            unlocks new features, helping you progress from beginner to pro
            while earning rewards along the way.
          </FontSmall>
          <div className="flex gap-10 mt-[50px]">
            <div className="w-1/2 border-t-2 py-5 border-borderColor">
              <FontLarge className="font-bold  mb-3 text-white">
                Accessible
              </FontLarge>
              <FontSmall className="text-lg">
                An intuitive learning path designed for all levels, from
                complete beginners to experienced traders wanting to refine
                their skills.
              </FontSmall>
            </div>
            <div className="w-1/2  border-t-2 py-5 border-borderColor">
              <FontLarge className="font-bold  mb-3 text-white">
                Rewarding
              </FontLarge>
              <FontSmall className="text-lg">
                Earn rewards and unlock features as you progress through the
                academy. Every lesson completed brings new benefits and
                opportunities.
              </FontSmall>
            </div>
          </div>
          <div className="w-full border-t-2 py-5 mt-8 border-borderColor">
            <FontLarge className="font-bold  mb-3 text-white">
              Community-Driven
            </FontLarge>
            <FontSmall className="text-lg">
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
