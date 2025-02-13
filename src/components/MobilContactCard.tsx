import { LucideIcon } from "lucide-react"
import ContactItem from "./ContactItem"

interface ContactType {
  icon: LucideIcon,
  type?: "email",
  text: string,
  link: string,
  color: string,
}


const MobilContactCard = ({ contactLinks }: { contactLinks: ContactType[] }) => {
  return (
    <div className="ss-hidden my-8">
      {/* Image */}
      <div className="mx-auto my-8 max-w-[min(max(50%,300px),500px)] flex justify-end mimage">
        <div className="w-fit h-full rounded-full border-10 md:border-20 border-white overflow-hidden mt-4 ">
          <img src="/assets/me_face.webp" className="w-fit h-full rounded-full aspect-square object-contain object-center" />
        </div>
      </div>
      {/* Text */}
      <div className="relative ss-flex flex-col h-full w-full mx-auto bg-[#1a1f2e] 
      border-[1px] border-white backdrop-blur-lg  shadow-lg overflow-hidden">

        <div className="flex flex-row pt-4 pb-3 px-4 justify-between max-h-32">
          <div className="max-xs-text-4xl text-4xl uppercase poppins-semibold flex flex-col justify-between max-w-2/4 w-full"><p>Ács</p><p>Attila</p></div>

          <div className="min-w-1 bg-white mx-4"></div>
          <div className="grid grid-cols-2 justify-items-center items-center gap-2 lg:gap-4 max-w-2/4 w-full">
            {contactLinks.map(item => <ContactItem key={item.link} icon={item.icon} type={item.type} text={item.text} link={item.link} color={item.color} className="" />)}
          </div>

        </div>
      </div>
    </div>

  )
}

export default MobilContactCard