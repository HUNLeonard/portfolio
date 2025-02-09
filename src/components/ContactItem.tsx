import { LucideIcon } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  type,
  link,
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
      className={`relative gap-2 items-center w-fit h-fit`}
      target={`${type !== undefined && '_blank'}`}
    >
      <Icon size={40} className={`${color} m-0.5 border-2 bg-[rgba(255,255,255,0.7)] rounded-md`} />
    </a>

  );
};

export default ContactItem;
