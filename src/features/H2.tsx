import React from 'react'

const H2 = ({ children, className, gray }: { children: React.ReactNode, className?: string, gray?: boolean }) => {
  return (
    <h2 className={`H2 max-xs-text-3xl text-5xl sm:text-6xl leading-12 sm:leading-16 md:leading-20 py-5 font-bold poppins-bold w-fit  ${className} ${gray && 'bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent'}`}>{children}</h2>
  )
}

export default H2