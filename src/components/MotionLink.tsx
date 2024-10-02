"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import Link, { LinkProps } from "next/link";

type MotionLinkProps = HTMLMotionProps<"div"> &
  LinkProps & {
    children: ReactNode;
  };

const MotionLink = React.forwardRef<HTMLDivElement, MotionLinkProps>(
  ({ children, href, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        <Link href={href}>{children}</Link>
      </motion.div>
    );
  },
);

MotionLink.displayName = "MotionLink";

export default MotionLink;
