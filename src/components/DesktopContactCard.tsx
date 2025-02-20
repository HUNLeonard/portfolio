import { LucideIcon } from 'lucide-react'
import ContactItem from './ContactItem'

interface ContactType {
  icon: LucideIcon,
  text: string,
  link: string,
}

const DesktopContactCard = ({ contactLinks }: { contactLinks: ContactType[] }) => {
  return (
    <div className="relative group max-ss-hidden flex flex-col aspect-[7/4] w-full h-92 sm:h-100 md:h-112 lg:h-128 md:max-w-3xl lg:max-w-4xl mx-auto  bg-[#1a1f2e]  border-[1px] border-white rounded-lg overflow-hidden shadow-lg pr-4 max-xl:my-8 ">
      <span className="font-serif absolute top-1/14 md:top-1/8 -left-1/16 text-[42rem] md:text-[52rem] lg:text-[64rem] rotate-12 leading-[256px] text-white mix-blend-exclusion select-none">a</span>
      <div className="ml-auto min-h-1/2 flex justify-end">
        <div className="w-fit h-full rounded-full border-10 md:border-20 border-white overflow-hidden mt-4 ">
          <img src="/assets/me_face.webp" className="w-fit h-full rounded-full aspect-square object-contain object-center z-10" />
        </div>
      </div>
      <div className="ml-auto min-h-1/2 flex flex-row items-center space-x-2">
        <div className="text-right text-6xl lg:text-7xl uppercase poppins-semibold ">Ács<br />Attila</div>
        <div className="bg-white h-full w-1 -z-10"></div>
        <div className="h-1/2 grid grid-cols-2 items-center gap-2 lg:gap-4">
          {contactLinks.map(item => <ContactItem key={item.link} icon={item.icon} link={item.link} className='' />)}

        </div>
      </div>
    </div>
  )
}

export default DesktopContactCard