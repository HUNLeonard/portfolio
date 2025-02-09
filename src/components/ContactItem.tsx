import { LucideIcon } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  type,
  text,
  link,
  className,
  color
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
      className={`relative flex flex-row flex-nowrap gap-2 items-center poppins text-sm md:text-base text-white  hover:text-gray-200 transition-colors duration-500 `}
      target={`${type !== undefined && '_blank'}`}
    >
      <Icon size={20} className={`${color} pt-0.5 bg-white rounded-full`} />
      <span className={`relative underline-hover max-xs-hidden ${className ?? ''} `}>{text}</span>
    </a>

  );
};

export default ContactItem;
