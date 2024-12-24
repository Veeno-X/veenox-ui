import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { H2 } from "@/components/fonts";

export const FAQSection = () => (
  <div
  id="faq"
  className="w-full flex flex-col items-center bg-[#15171B] py-[40px] sm:py-[60px] lg:py-[100px]"
>
  <div className="w-[90%] max-w-[1200px] mx-auto">
    {/* Heading */}
    <H2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white text-center">
      Frequently <span className="text-base_color">Asked</span> Questions
    </H2>

    {/* Accordion Section */}
    <Accordion type="single" collapsible className="w-full">
      {/* FAQ Items */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What is VeenoX?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
            VeenoX is a professional-grade DEX running on Orderly Network that
            bridges the gap between traditional and decentralized finance. By
            offering perpetual futures and synthetic RWA trading, we solve the
            main pain points of traditional brokers: high fees, and KYC
            requirements. Through Pyth Network integration, traders can access
            both crypto and traditional market assets (stocks, commodities) 24/7
            in a synthetic form, with significantly lower fees and no
            geographical restrictions. We combine this accessibility with
            gamification elements, an integrated trading academy, and advanced
            trading features to create a comprehensive trading ecosystem.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What makes VeenoX different from other perp DEXs?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
        VeenoX stands out through:
            <ul className="list-disc pl-5 mt-3">
              <li>
                Synthetic RWA trading that enables access to traditional
                markets without the high fees and restrictions of centralized
                brokers
              </li>
              <li>
                Integrated trading academy for skill development, bridging the
                gap between traditional and crypto trading
              </li>
              <li>
                Gamified trading experience with ranks and levels that rewards
                both crypto and RWA trading performance
              </li>
              <li>
                Trading competitions across all asset classes with
                performance-based rewards
              </li>
              <li>
                Professional-grade trading tools comparable to traditional
                trading platforms
              </li>
              <li>
                No KYC requirements or geographical restrictions while
                maintaining institutional-grade execution
              </li>
              <li>
                Significantly lower fees compared to traditional brokers
              </li>
              <li>
                Focus on both education and execution for all types of traders
              </li>
            </ul>                  
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What can I trade on VeenoX?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
        Currently, VeenoX offers perpetual futures trading. We are expanding
            to include:
            <ul className="list-disc pl-5 mt-3">
              <li>
                Perpetual futures trading with competitive fees and
                professional-grade tools
              </li>
              <li>
                Spot trading for major cryptocurrencies with deep liquidity
              </li>
              <li>
                Synthetic RWA trading without KYC requirements or geographical
                restrictions
              </li>
              <li>
                Comprehensive backtesting capabilities across both crypto and
                traditional assets
              </li>
            </ul>          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          How does the trading academy work?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
            Our academy provides a comprehensive educational experience where
            traders progress through structured learning paths, starting from
            basic concepts to advanced trading strategies. Traders gain hands-on
            experience through practical trading exercises while their
            performance is continuously tracked. The learning journey is
            enriched by an achievement-based system that rewards progress and
            mastery. Most importantly, traders can practice their skills in a
            controlled environment, allowing them to gain real trading
            experience without the risk of significant losses. Whether you're
            transitioning from traditional markets or just starting your trading
            journey, our academy ensures you develop the skills needed for
            successful trading across both crypto and traditional synthetic
            assets.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What features are coming next?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
            Our roadmap is focused on expanding VeenoX's capabilities across
            multiple fronts. Soon, we'll be launching synthetic RWA trading
            integration, allowing traders to access traditional markets with the
            same ease as crypto markets. We're developing enhanced backtesting
            tools that will let traders test their strategies across both crypto
            and traditional market conditions. A mobile app is in development to
            ensure traders can manage their positions and access all features on
            the go. For institutional traders and algorithmic strategies, we're
            building advanced API access with comprehensive documentation.
            Additionally, we're constantly expanding our educational content to
            cover both crypto and traditional market trading strategies,
            ensuring our traders have all the resources they need to succeed in
            any market condition.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>

);
