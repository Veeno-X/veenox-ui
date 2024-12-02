"use client";
import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import { WobbleCard } from "@/components/wobble-card";
import { insights, stats } from "@/constants";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BoxInsight } from "./components/insight-box";
import { BoxStat } from "./components/stat-box";

const Home: FC = () => {
  // try {
  //   const viewer = document.querySelector("spline-viewer");
  //   if (viewer)
  //     viewer?.addEventListener("load", () => {
  //       const canvas = viewer.querySelector("canvas");
  //       canvas?.style.width = "400px";
  //       canvas?.style.height = "400px";
  //     });
  // } catch (e) {}

  return (
    <main>
      <section className="h-[90vh] pt-[120px] w-screen flex items-center bg-[url('/layers/test.png')] bg-center bg-cover  overflow-hidden">
        <div className="flex max-w-[1500px] w-[90%] items-center justify-between mx-auto z-[100] pointer-events-none">
          <div className="">
            <div
              className="overflow-hidden block relative md:whitespace-nowrap
               text-4xl lg:text-[80px] leading-[90px] font-extrabold w-auto font-poppins text-white  text-start"
            >
              CEX Trading Exp <br />
              Trading Academy
            </div>
            <div className="flex w-full jusitfy-start">
              <p className="text-sm lg:text-2xl text-font-80 font-normal text-start mt-3 lg:mt-7 max-w-[450px] lg:max-w-[800px]">
                Learn crypto trading through interactive experiences, not
                endless videos. VeenoX combines a professional perpetual DEX
                with innovative learn-to-earn features. Master trading patterns,
                practice in real-time, earn rewards.
              </p>
            </div>
            <div className="flex items-center w-fit justify-start">
              <button className="mt-7 lg:mt-[50px] h-[40px] lg:h-[50px] px-2 lg:px-3 rounded-full mx-auto text-white text-lg mr-auto cursor-pointer bg-[#836EF9]">
                <Link href="/perp/PERP_BTC_USDC" className="w-full h-full">
                  <div className="flex items-center justify-center text-white font-medium w-full text-sm lg:text-lg h-full px-3 lg:px-4 py-1.5 lg:py-2">
                    Get Started
                  </div>
                </Link>
              </button>
              {/* <button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="visible"
                animate={mainControls}
                transition={{
                  duration: 0.3,
                  delay: 0.9,
                }}
                className="mt-7 lg:mt-[50px] h-[40px] lg:h-[50px] px-2 lg:px-3 ml-4 lg:ml-5 rounded-full mx-auto text-base_color text-lg mr-auto cursor-pointer border border-base_color"
              >
                <Link href="/perp/PERP_BTC_USDC" className="w-full h-full">
                  <div className="flex items-center justify-center w-full text-sm lg:text-lg h-full px-3 lg:px-4 py-1.5 lg:py-2">
                    Learn More
                  </div>
                </Link>
              </button> */}
            </div>{" "}
          </div>
          <div className="h-[600px] relative">
            <img
              src="/assets/logo.png"
              className="w-[550px] min-w-[550px] animate-float"
            />
            <img
              src="/assets/base.png"
              className="absolute w-[550px] min-w-[550px] -bottom-[280px]"
            />
          </div>
        </div>
      </section>
      <div className="relative overflow-x-hidden">
        <section className="pb-[120px] pt-[160px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-font-80 mr-3" />
              <FontMedium className="uppercase">Features</FontMedium>
            </div>
            <div className="flex items-start mt-6 justify-between">
              <H2 className="max-w-[740px] text-white uppercase">
                Level up your trading experience on DEX
              </H2>
              <FontSmall className="max-w-[400px] mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus molestiae nam laborum distinctio
              </FontSmall>
            </div>
            <div className="flex justify-between mt-[120px]">
              {insights.map(({ title, icon, description }, i) => (
                <BoxInsight
                  key={i}
                  icon={icon}
                  title={title}
                  description={description}
                />
              ))}
            </div>{" "}
          </div>{" "}
          {/* <img
            src="/layers/test-3.png"
            className="absolute -top-[40%] object-cover left-0 "
          /> */}
        </section>
        <section className="pb-[200px] pt-[150px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex w-full items-center justify-center mb-10">
              <span className="h-3 w-3 rounded-full bg-font-80 mr-3" />
              <FontMedium className="uppercase">Features</FontMedium>
            </div>
            <H2 className="text-center">
              Explore our <br />
              standout features
            </H2>
            <div className="grid grid-cols-5 gap-4 mt-[100px]">
              <WobbleCard containerClassName="col-span-2 h-[500px] relative">
                <Image
                  src="/layers/mac.png"
                  height={500}
                  width={500}
                  alt="ecosystem illustration"
                  className="absolute right-5 -z-10 -bottom-[50px]"
                />
                <div className="">
                  <FontLarge className="font-bold text-4xl mb-5 text-white">
                    Trade cryptos <br />
                    Across any chain
                  </FontLarge>
                  <FontSmall className="max-w-[350px] text-lg">
                    Experience seamless perpetual trading across multiple
                    blockchain ecosystems.
                  </FontSmall>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-3 h-[500px] relative">
                <Image
                  src="/assets/ecosystem-chain.png"
                  height={430}
                  width={430}
                  alt="ecosystem illustration"
                  className="absolute right-5 -z-10 top-1/2 -translate-y-1/2"
                />
                <div className="">
                  <FontLarge className="font-bold text-4xl mb-5 text-white">
                    Trade cryptos <br />
                    Across any chain
                  </FontLarge>
                  <FontSmall className="max-w-[350px] text-lg">
                    Experience seamless perpetual trading across multiple
                    blockchain ecosystems. Our platform supports major chains
                    like Monad, Ethereum, Arbitrum, Sei, Solana, and more. Trade
                    perpetual contracts with precision, speed, and security, all
                    while enjoying the freedom of cross-chain interoperability.
                  </FontSmall>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-3 h-[500px] relative">
                <div className="flex justify-end">
                  <div>
                    <FontLarge className="font-bold text-4xl mb-5 text-white">
                      Trade cryptos <br />
                      Across any chain
                    </FontLarge>
                    <FontSmall className="max-w-[350px] text-lg">
                      Experience seamless perpetual trading across multiple
                      blockchain ecosystems. Our platform supports major chains
                      like Monad, Ethereum, Arbitrum, Sei, Solana, and more.
                      Trade perpetual contracts with precision, speed, and
                      security, all while enjoying the freedom of cross-chain
                      interoperability.
                    </FontSmall>
                  </div>
                </div>
                <img
                  src="/layers/bars.png"
                  className="absolute left-5 -z-10 top-1/2 -translate-y-1/2 h-[350px]"
                />
              </WobbleCard>
              <WobbleCard containerClassName="col-span-2 h-[500px] relative">
                <Image
                  src="/assets/mobile.png"
                  height={350}
                  width={350}
                  alt="ecosystem illustration"
                  className="absolute right-5 -z-10 -bottom-[120px]"
                />
                <Image
                  src="/assets/mobile.png"
                  height={280}
                  width={280}
                  alt="ecosystem illustration"
                  className="absolute right-[180px] -bottom-[150px]"
                />
                <div className="">
                  <FontLarge className="font-bold text-4xl mb-5 text-white">
                    One of the best
                    <br />
                    Mobile version
                  </FontLarge>
                  <FontSmall className="max-w-[350px] text-lg">
                    Experience seamless perpetual trading across multiple
                    blockchain ecosystems.
                  </FontSmall>
                </div>
              </WobbleCard>
            </div>
          </div>
        </section>{" "}
        {/* <img
          src="/layers/test-3.png"
          className="absolute  -top-[10%] object-cover -right-[40%] h-[200vh]"
        />*/}
        <img
          src="/layers/test-4.png"
          className="absolute scale-x-[-1] -rotate-45 h-[250vh] -top-[80vh] object-contain -left-[20%]"
        />
      </div>
      <section className="pt-[130px] pb-[90px] relative bg-[url('/layers/test-2.png')] bg-center bg-cover">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex items-start justify-between">
            <H2 className="max-w-[680px] text-white uppercase">
              Some Stats About VeenoX alpha
            </H2>
            <FontSmall className="max-w-[400px] mt-1.5">
              VeenoX has improved the trading experience of more than 40 traders
              who asked for the best trading platform with CEX like experience
            </FontSmall>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between mt-[70px] w-[62%] flex-wrap">
              {stats.map(({ tag, value, description }, i) => (
                <BoxStat
                  key={i}
                  value={value}
                  tag={tag}
                  description={description}
                />
              ))}
            </div>{" "}
            <div className="w-[35%] min-w-[400px] max-w-[520px] mt-10">
              {/* <Spline
                scene="https://prod.spline.design/FIqOZxbFa1GrmvKD/scene.splinecode"
                width={600}
                height={600}
              /> */}
              <Spline scene="https://prod.spline.design/kA0xD50BYojkl3zj/scene.splinecode" />
              {/* <Image
                src="/assets/exemple.jpeg"
                alt="test image"
                height={300}
                width={300}
                className="object-cover object-center rounded-md h-[400px] w-full"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[200px] relative overflow-hidden bg-[url('/layers/test-2.png')] bg-no-repeat bg-cover">
        <div className="text-center mb-[300px]">
          <H2>Our partners & Integration</H2>
          <div className="mx-auto flex items-center gap-10 w-fit mt-[50px]"></div>
        </div>
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex items-start justify-center mb-[100px]">
            <H2 className="max-w-[680px] text-center">Roadmap</H2>
          </div>
          <div className="flex items-center">
            <div className="w-1/2 h-[800px]">
              <Spline scene="https://prod.spline.design/xJ8P7i-rvWtTMpaa/scene.splinecode" />
            </div>
            <div className="w-1/2 flex relative">
              <div className="relative flex flex-col justify-between items-center w-[120px] h-[650px]">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[60px] rounded-md flex items-center justify-center w-[120px] border border-borderColor bg-borderColor">
                  <FontMedium>Q1-Q2</FontMedium>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-1/3 h-[60px] rounded-md flex items-center justify-center w-[120px] border border-borderColor bg-borderColor">
                  <FontMedium>Q1-Q2</FontMedium>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-2/3 h-[60px] rounded-md flex items-center justify-center w-[120px] border border-borderColor bg-borderColor">
                  <FontMedium>Q1-Q2</FontMedium>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full h-[60px] rounded-md flex items-center justify-center w-[120px] border border-borderColor bg-borderColor">
                  <FontMedium>Q1-Q2</FontMedium>
                </div>
                <div className="h-full w-0.5 bg-borderColor" />
              </div>
              <div
                className="absolute left-[150px] top-0 ml-auto"
                style={{ width: "calc(100% - 80px)" }}
              >
                <FontLarge>Trading Academy</FontLarge>
                <FontSmall className="max-w-[500px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, corrupti minus aperiam dignissimos,
                </FontSmall>
              </div>
              <div
                className="absolute left-[150px] top-1/3 ml-auto"
                style={{ width: "calc(100% - 80px)" }}
              >
                <FontLarge>Trading Academy</FontLarge>
                <FontSmall className="max-w-[500px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, corrupti minus aperiam dignissimos,
                </FontSmall>
              </div>
              <div
                className="absolute left-[150px] top-2/3 ml-auto"
                style={{ width: "calc(100% - 80px)" }}
              >
                <FontLarge>Trading Academy</FontLarge>
                <FontSmall className="max-w-[500px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, corrupti minus aperiam dignissimos,
                </FontSmall>
              </div>
              <div
                className="absolute left-[150px] top-full ml-auto"
                style={{ width: "calc(100% - 80px)" }}
              >
                <FontLarge>Trading Academy</FontLarge>
                <FontSmall className="max-w-[500px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, corrupti minus aperiam dignissimos,
                </FontSmall>
              </div>
            </div>
          </div>
        </div>
        {/* <spline-viewer
          className="absolute"
          url="https://prod.spline.design/ddYqWEvVmvGO3Hhc/scene.splinecode"
        ></spline-viewer> */}
      </section>
    </main>
  );
};

export default Home;
