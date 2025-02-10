import Navbar from './Navbar'
import ContextManager from '../Context/ContextManager'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContextManager>
        <Navbar />
        <main className='relative scroll-smooth mx-auto poppins'>
          {children}
        </main>
      </ContextManager>
    </>
  )
}

export default Layout