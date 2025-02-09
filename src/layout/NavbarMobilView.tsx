import { useContext } from 'react'
import ContactMeButton from './ContactMeButton'
import { VariableContext } from '../Context/ContextManager';

const NavbarMobilView = ({ menuPoints }: { menuPoints: string[] }) => {
  const context = useContext(VariableContext)
  if (context === null) {
    return;
  }
  const { scrollToElement, isOpen, setIsOpen } = context;

  return (
    <div className='md:hidden flex flex-row space-x-5 items-center'>
      <ContactMeButton fun={() => scrollToElement("contact")} />
      <div className='relative *:cursor-pointer group'>
        <div className={`relative w-6 h-4 flex burger-menu transition-all duration-200 ${isOpen && 'active'}`} onClick={() => setIsOpen(prev => !prev)}>
          <p className='absolute top-1/2 w-full h-[3px] rounded-2xl bg-white transition-all duration-200'></p>
        </div>
        <div className={`absolute -right-1/2 top-5 pt-5  z-10 overflow-hidden [transition:translate_0.2s_0s]  cursor-default ${isOpen ? 'translate-x-0' : 'translate-x-1/1'}`}>
          <ul className='flex flex-col overflow-hidden rounded-md rounded-tr-none '>
            {menuPoints.map(point => <li key={point} onClick={() => scrollToElement(point)} className={`cursor-pointer transition-all duration-200 bg-gray-700 hover:bg-gray-600 active:bg-gray-600 capitalize font-bold px-6 py-3`}>{point}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobilView