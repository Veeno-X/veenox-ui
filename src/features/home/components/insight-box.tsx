import { FontLarge, FontSmall } from "@/components/fonts";
import Image from "next/image";
import { FC } from "react";

type BoxInsightType = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

export const BoxInsight: FC<BoxInsightType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-[30%] bg-secondary border border-borderColor-DARK rounded-2xl h-fit p-10">
      <Image
        height={80}
        width={80}
        src={icon}
        alt={`${title} icon`}
        className="object-cover min-h-[80px] w-auto max-h-[80px]"
      />
      <FontLarge className="font-semibold mt-6 mb-4">{title}</FontLarge>
      <FontSmall className="font-normal">{description}</FontSmall>
    </div>
  );
};
