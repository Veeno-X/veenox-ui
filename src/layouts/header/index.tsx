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
   ${scrollDirection === "down" ? "-translate-y-[120px]" : "translate-y-0"}`}
    >
      <img
        src="/layers/veenox.png"
        alt="Veeno Logo"
        className="h-[30px] md:h-[35px] md:block hidden w-auto max-w-auto max-h-[25px] sm:max-w-auto md:max-h-[35px]"
      />
      <img
        src="/veenox/Logo-V-1.png"
        alt="Veeno Logo"
        className="h-[27px] md:hidden block w-auto max-w-auto max-h-[30px] sm:max-w-auto"
      />
      <nav className="h-full cursor-pointer">
        <ul className="text-white font-bold text-sm md:text-base flex items-center gap-2.5 md:gap-5 h-full">
          <li>
            {" "}
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
      <button className="h-[35px] md:h-[45px] px-1 lg:px-3 rounded-xl text-white text-sm lg:text-lg cursor-pointer bg-base_color sm:block hidden bg-purple">
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
