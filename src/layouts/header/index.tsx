"use client";
import { useScrollDirection } from "@/hooks/useScrollPosition";
import Link from "next/link";

export const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 h-[60px] md:h-[70px] z-[1000] w-full
      bg-[#2b2f3649] border border-borderColor-DARK
        backdrop-blur-md px-5 md:pl-5 pr-2 flex items-center justify-between transition-all duration-300
        ${
          scrollDirection === "down" ? "-translate-y-[120px]" : "translate-y-0"
        }`}
    >
      <img
        src="/layers/veenox.png"
        alt="Veenox"
        className="h-[20px] sm:h-[25px] md:h-[30px] lg:h-[35px] w-auto max-h-[35px]"
      />
      <nav className="hidden min-[400px]:flex h-full cursor-pointer">
        <ul className="text-white font-bold text-sm md:text-base flex items-center gap-2.5 md:gap-5 h-full">
          <li>
            <Link
              href="https://x.com/veenox_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full hover:text-base_color"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://discord.gg/wPTSZXzUcN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full hover:text-base_color"
            >
              Discord
            </Link>
          </li>
          <li>
            <Link
              href="https://veenox.gitbook.io/veenox"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full hover:text-base_color"
            >
              Docs
            </Link>
          </li>
        </ul>
      </nav>
      <button className="h-[30px] sm:h-[35px] md:h-[45px] px-2 sm:px-3 lg:px-4 rounded-xl text-white text-sm lg:text-lg cursor-pointer bg-base_color bg-purple">
        <Link
          href="/perp/PERP_BTC_USDC"
          className="w-full h-full hover:text-white"
        >
          <div className="flex items-center font-bold justify-center w-full text-sm lg:text-base h-full px-3 lg:px-4 py-2">
            Launch Alpha
          </div>
        </Link>
      </button>
    </div>
  );
};
