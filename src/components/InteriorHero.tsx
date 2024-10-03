import React, { PropsWithChildren } from "react";
import { Hexagon } from "./Hexagon";

export const InteriorHero = ({ children }: PropsWithChildren) => {
  return (
    <section className="py-24 md:py-32 relative overflow-x-clip">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Hexagon size={800} duration={30} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Hexagon size={1200} duration={50} reverse />
      </div>
      <div className="container">{children}</div>
    </section>
  );
};
