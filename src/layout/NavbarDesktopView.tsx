import { useContext } from 'react'
import ContactMeButton from './ContactMeButton'
import { VariableContext } from '../Context/ContextManager';

const NavbarDesktopView = ({ menuPoints }: { menuPoints: string[] }) => {
  const context = useContext(VariableContext)
  if (context === null) {
    return;
  }
  const { scrollToElement } = context;

  return (
    <>
      <ul className='hidden md:flex flex-row space-x-8 text-xl font-bold capitalize *:cursor-pointer *:relative '>
        {menuPoints.map(point => <li key={point} onClick={() => scrollToElement(point)} className={`underline-hover after-per`} >{point}</li>)}
      </ul>
      <ContactMeButton className='hidden md:flex ' fun={() => scrollToElement("contact")} />
    </>
  )
}

export default NavbarDesktopView