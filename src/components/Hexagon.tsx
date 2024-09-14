import React, { ComponentPropsWithoutRef } from "react";
import HexagonShape from "@/assets/images/hexagon.svg";
import { twMerge } from "tailwind-merge";

export const Hexagon = (props: ComponentPropsWithoutRef<"svg">) => {
  const { className } = props;
  return (
    <HexagonShape
      className={twMerge(
        "text-fuchsia-500/10 stroke-current -rotate-6",
        className,
      )}
      width="82"
      height="72"
      viewBox="0 0 82 72"
    />
  );
};
