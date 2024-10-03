import React, { PropsWithChildren } from "react";

export const InteriorContent = ({ children }: PropsWithChildren) => {
  return (
    <section className="py-32 md:py-60 bg-zinc-900/30 backdrop-blur-sm">
      <div className="container">{children}</div>
    </section>
  );
};
