import { useContext } from 'react'
import { VariableContext } from '../Context/ContextManager';
import NavbarDesktopView from './NavbarDesktopView';
import NavbarMobilView from './NavbarMobilView';

const Navbar = () => {
  const context = useContext(VariableContext)
  if (context === null) {
    return;
  }
  const { isScroll, scrollToTop } = context;

  const menuPoints = ["about", "skills", "experience", "projects"]

  return (
    <header className={`fixed top-6 left-0 right-0 mx-auto w-full max-w-360 h-16 bg-linear-20 from-gray-800 to-gray-900 md:rounded-md transition-all ease-in-out duration-200 ${isScroll ? 'translate-y-0' : '-translate-y-6 !rounded-t-none'} z-50`}>
      <nav className='w-full flex justify-between items-center px-2 md:px-5 h-full gap-6'>
        <p onClick={() => scrollToTop()} className='relative item-stretch uppercase font-bold cursor-pointer select-none text-3xl 
        after:content-["."] after:text-orange-400 after:absolute after:-right-2' >
          attila
        </p>
        <NavbarDesktopView menuPoints={menuPoints} />
        <NavbarMobilView menuPoints={menuPoints} />
      </nav>
    </header>
  )

}

export default Navbar