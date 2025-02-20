import React, { createContext, SetStateAction, useEffect, useState } from 'react'

interface VariablContextProp {
  isOpen: boolean,
  isScroll: boolean,
  scrollToTop: () => void,
  scrollToElement: (param: string, offset?: number) => void,
  setIsOpen: (param: SetStateAction<boolean>) => void,
}

export const VariableContext = createContext<VariablContextProp | null>(null)

const ContextManager = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(true);

  const scrollToElement = (param: string, offset?: number) => {
    const element = document.getElementById(param);
    if (element === null) return;

    window.scrollTo({
      top: element.offsetTop - (offset === undefined ? 0 : offset),
      behavior: "smooth"
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY < 5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <VariableContext.Provider value={{ isOpen, setIsOpen, isScroll, scrollToTop, scrollToElement }}>
      {children}
    </VariableContext.Provider>
  )
}

export default ContextManager