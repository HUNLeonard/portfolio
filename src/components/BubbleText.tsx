import React from "react";
import { cn } from "../utils/cn";

const BubbleText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        "text-xs lg:text-sm px-4 py-1 bg-gray-800 rounded-2xl",
        "hover:bg-gray-700 hover:scale-105 cursor-default transition-[all] duration-200",
        "poppins-semibold", className
      )}
    >
      {children}
    </div>
  );
};

export default BubbleText;
