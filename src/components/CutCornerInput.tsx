import { ComponentPropsWithoutRef } from "react";
import CutCorner from "@/assets/images/cut-corner.svg";
import { twMerge } from "tailwind-merge";

export const CutCornerInput = (props: ComponentPropsWithoutRef<"input">) => {
  const { className, type, id, name } = props;
  return (
    <div className={twMerge("relative group z-0", className)}>
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-zinc-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500 -z-10"></div>
      <CutCorner className="absolute top-0 right-0 text-zinc-700 group-focus-within:text-fuchsia-500 -z-10" />
      <input
        type={type}
        name={name}
        id={id}
        className="bg-transparent h-12 block w-full outline-none px-4"
      />
    </div>
  );
};
