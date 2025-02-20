import React from "react";

const H5 = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <h5
      title={title}
      className={`H5 max-xs-text-xl text-2xl sm:text-3xl md:leading-10 poppins-bold w-fit ${className} `}
    >
      {children}
    </h5>
  );
};

export default H5;
