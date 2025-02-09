import React from 'react'

const H3 = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <h3 className={`H3 text-2xl sm:text-3xl md:leading-10 py-5 font-bold w-fit ${className} `}>{children}</h3>
  )
}

export default H3