import React from "react";

const H4 = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <h4
      title={title}
      className={`H4 max-xs-text-2xl text-3xl sm:text-4xl md:leading-10 py-5 poppins-bold w-fit ${className} `}
    >
      {children}
    </h4>
  );
};

export default H4;
