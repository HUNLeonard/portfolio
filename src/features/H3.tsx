import React from "react";
import { cn } from "../utils/cn";

const H3 = ({
  children,
  className = "",
  title,
  gray = false,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  gray?: boolean;
}) => {
  return (
    <h3
      title={title}
      className={cn("H3 max-xs-text-2xl text-4xl sm:text-5xl md:leading-10 py-5 poppins-bold w-fit",
        gray ? "bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent" : "",
        className)}
    >
      {children}
    </h3>
  );
};

export default H3;
