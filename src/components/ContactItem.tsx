import { LucideIcon } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  type,
  link,

}: {
  icon: LucideIcon;
  type?: "email";
  text: string;
  link: string;
  className?: string;
  color: string,
}) => {

  return (

    <a
      href={type === "email" ? `mailto:${link}` : `${link}`}
      className={`relative gap-2 items-center w-fit h-fit transition-all duration-200 p-0.5 bg-[rgba(255,255,255,1)] rounded-md  text-[#1a1f2e] hover:bg-[#1a1f2e] hover:text-white`}
      target={`${type !== undefined && '_blank'}`}
    >
      <div className="max-md:hidden"><Icon size={52} className={``} /></div>
      <div className="md:hidden"><Icon size={40} className={``} /></div>
    </a>

  );
};

export default ContactItem;
