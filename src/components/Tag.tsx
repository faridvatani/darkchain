import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithoutRef<"div"> & { color?: string },
) => {
  const { children, className, color } = props;
  return (
    <div
      className={twMerge(
        "font-heading font-extrabold text-xs bg-fuchsia-500/15 text-fuchsia-500 px-3 py-1.5 uppercase tracking-wider inline-flex rounded-full",
        color === "lime" && "bg-lime-500/15 text-lime-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500",
        className,
      )}
    >
      {children}
    </div>
  );
};
