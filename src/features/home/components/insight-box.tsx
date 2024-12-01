import { FontLarge, FontSmall } from "@/components/fonts";
import Image from "next/image";
import { FC } from "react";

type BoxInsightType = {
  title: string;
  description: string;
  icon: string;
};

export const BoxInsight: FC<BoxInsightType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="w-[33%]">
      <Image
        height={50}
        width={50}
        src={icon}
        alt={`${title} icon`}
        className="object-cover min-h-[50px] w-auto max-h-[50px]"
      />
      <FontLarge className="font-semibold mt-6 mb-4">{title}</FontLarge>
      <FontSmall className="font-normal">{description}</FontSmall>
    </div>
  );
};
