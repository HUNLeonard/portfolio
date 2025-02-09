import { LucideIcon } from 'lucide-react'
import ContactItem from './ContactItem'

interface ContactType {
  icon: LucideIcon,
  type?: "email",
  text: string,
  link: string,
  color: string,
}

const DesktopContactCard = ({ contactLinks }: { contactLinks: ContactType[] }) => {
  return (
    <div className="relative max-ss-hidden flex flex-col aspect-[7/4] w-full h-92 sm:h-100 md:h-112 lg:h-128 md:max-w-3xl lg:max-w-4xl mx-auto  bg-[rgba(255,255,255,0.3)] border-[1px] border-white backdrop-blur-lg overflow-hidden shadow-lg pr-4 my-8 ">
      <span className="font-serif absolute top-1/14 md:top-1/8 -left-1/16 text-[42rem] md:text-[52rem] lg:text-[64rem] rotate-12 leading-[256px]">a</span>
      <div className="ml-auto min-h-1/2 flex justify-end">
        <div className="w-fit h-full rounded-full border-10 md:border-20 border-white overflow-hidden mt-4 ">
          <img src="/assets/me_face.webp" className="w-fit h-full rounded-full aspect-square object-contain object-center" />
        </div>
      </div>
      <div className="ml-auto min-h-1/2 flex flex-row items-center space-x-2">
        <div className="text-right text-6xl lg:text-7xl uppercase poppins-semibold ">Ács<br />Attila</div>
        <div className="bg-white h-full w-1"></div>
        <div className="h-1/2 transition-1/2 space-y-1.5 lg:space-y-2.5">
          {contactLinks.map(item => <ContactItem key={item.link} icon={item.icon} type={item.type} text={item.text} link={item.link} color={item.color} className=' max-md:hidden ' />)}

        </div>
      </div>
    </div>
  )
}

export default DesktopContactCard