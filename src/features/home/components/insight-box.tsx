import { FontLarge, FontSmall } from "@/components/fonts";
import { FC } from "react";
import { GiProcessor } from "react-icons/gi";

type BoxInsightType = {
  title: string;
  description: string;
};

export const BoxInsight: FC<BoxInsightType> = ({ title, description }) => {
  return (
    <div className="w-[33%]">
      <GiProcessor className="text-6xl text-white" />
      <FontLarge className="font-semibold mt-6 mb-4">{title}</FontLarge>
      <FontSmall className="font-normal">{description}</FontSmall>
    </div>
  );
};
