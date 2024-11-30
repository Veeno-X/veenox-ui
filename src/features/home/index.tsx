import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import { WobbleCard } from "@/components/wobble-card";
import { insights, stats } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BoxInsight } from "./components/insight-box";
import { BoxStat } from "./components/stat-box";

const Home: FC = () => {
  return (
    <main>
      <section className="h-[90vh] w-screen flex items-center bg-[url('/layers/noise.png')] bg-center bg-cover  overflow-hidden">
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
        {/* <spline-viewer
          className="absolute "
          url="https://prod.spline.design/VqLsD2Dic9nw1lIT/scene.splinecode"
        ></spline-viewer> */}
        {/* 
        <spline-viewer
          className="absolute left-[20%] "
          url="https://prod.spline.design/sAZUB2iZoctZLfgN/scene.splinecode"
        ></spline-viewer> */}
      </section>
      <div className="relative">
        <section className="pt-[80px] pb-[120px] ">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-font-80 mr-3" />
              <FontMedium className="uppercase">Features</FontMedium>
            </div>
            <div className="flex items-start mt-10 justify-between">
              <H2 className="max-w-[740px] text-purple">
                Essential features for CEX trading experiences
              </H2>
              <FontSmall className="max-w-[400px] mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus molestiae nam laborum distinctio
              </FontSmall>
            </div>
            <div className="flex justify-between mt-[120px]">
              {insights.map(({ title, description }, i) => (
                <BoxInsight key={i} title={title} description={description} />
              ))}
            </div>{" "}
          </div>
        </section>
        <img
          src="/layers/noise-circle.png"
          className="absolute top-0 h-auto object-contain -right-[50%]"
        />
        <img
          src="/layers/noise-circle.png"
          className="absolute top-[25%] h-auto object-contain -left-[20%]"
        />
        <section className="pb-[200px] pt-[240px] relative">
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
              <WobbleCard containerClassName="col-span-2 h-[500px]">
                <div className="">
                  <FontLarge className="font-bold mb-5 text-white">
                    Manage your positions
                  </FontLarge>
                  <ul>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                  </ul>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-3 h-[500px]">
                <div className="">
                  <FontLarge className="font-bold mb-5 text-white">
                    Multi chains
                  </FontLarge>
                  <ul>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                  </ul>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-3 h-[700px]">
                <div className="">
                  <FontLarge className="font-bold mb-5 text-white">
                    Multi chains
                  </FontLarge>
                  <ul>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                  </ul>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-2 h-[700px]">
                <div className="">
                  <FontLarge className="font-bold mb-5 text-white">
                    Multi chains
                  </FontLarge>
                  <ul>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                    <li className="text-lg text-white font-medium">
                      Set Take Profit and Stop Loss before trade initiation
                    </li>
                  </ul>
                </div>
              </WobbleCard>
            </div>
          </div>
        </section>{" "}
      </div>
      <section className="py-[200px] relative bg-[url('/layers/noise-2.png')] bg-center bg-cover">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex items-start justify-between">
            <H2 className="max-w-[680px] text-purple">
              Who We Are Crafting Our Business
            </H2>
            <FontSmall className="max-w-[400px] mt-1.5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae nam laborum distinctio
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
            <div className="w-[35%] min-w-[400px] mt-10">
              <Image
                src="/assets/exemple.jpeg"
                alt="test image"
                height={300}
                width={300}
                className="object-cover object-center rounded-md h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[200px] relative h-[60vh]">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex items-start justify-center">
            <H2 className="max-w-[680px] text-center">
              Involved community <br />
              around the world
            </H2>
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
