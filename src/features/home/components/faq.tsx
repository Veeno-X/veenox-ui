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
          bridges the gap between traditional and decentralized finance...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What makes VeenoX different from other perp DEXs?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
          VeenoX stands out through:
          <ul className="list-disc pl-5 mt-3">
            <li>Synthetic RWA trading...</li>
            <li>Integrated trading academy...</li>
            <li>Gamified trading experience...</li>
            <li>Trading competitions...</li>
            <li>Professional-grade trading tools...</li>
            <li>No KYC requirements...</li>
            <li>Significantly lower fees...</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What can I trade on VeenoX?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
          Currently, VeenoX offers:
          <ul className="list-disc pl-5 mt-3">
            <li>Perpetual futures trading...</li>
            <li>Spot trading for major cryptocurrencies...</li>
            <li>Synthetic RWA trading...</li>
            <li>Comprehensive backtesting...</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          How does the trading academy work?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
          Our academy provides a comprehensive educational experience where
          traders progress through structured learning paths...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg sm:text-xl text-base_color">
          What features are coming next?
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg text-white">
          Our roadmap is focused on expanding VeenoX's capabilities...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>

);
