import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string },
) => {
  const { className, children, color } = props;
  return (
    <button
      className={twMerge(
        "font-heading font-extrabold text-sm uppercase tracking-wider text-fuchsia-500",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className,
      )}
    >
      {children}
    </button>
  );
};
