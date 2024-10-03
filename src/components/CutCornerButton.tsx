import React, { ComponentPropsWithoutRef } from "react";
import CutCorner from "@/assets/images/cut-corner.svg";
import { twMerge } from "tailwind-merge";

export const CutCornerButton = (props: ComponentPropsWithoutRef<"button">) => {
  const { className, children } = props;
  return (
    <button
      className={twMerge(
        "relative bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide",
        className,
      )}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
      <CutCorner className="absolute top-0 right-0 text-fuchsia-500" />
      <span className="leading-6">{children}</span>
    </button>
  );
};
