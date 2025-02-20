import { LucideIcon } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  link = "",
  className = "",
}: {
  icon: LucideIcon;
  link?: string;
  className?: string
}) => {

  return (

    <a
      href={`${link}`}
      className={`relative gap-2 items-center w-fit h-fit transition-all duration-200 p-0.5 bg-[rgba(255,255,255,1)] rounded-md  text-[#1a1f2e] hover:bg-[#1a1f2e] hover:text-white ${className}`}
      target="_blank"
    >
      <div className="max-md:hidden"><Icon size={52} /></div>
      <div className="md:hidden"><Icon size={40} /></div>
    </a>

  );
};

export default ContactItem;
