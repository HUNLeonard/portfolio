import { Facebook, Instagram, Linkedin, LucideIcon, Mail } from "lucide-react";
import H2 from "../features/H2";
import H3 from "../features/H3";
import DesktopContactCard from "../components/DesktopContactCard";
import MobilContactCard from "../components/MobilContactCard";

export interface ContactType {
  icon: LucideIcon;
  type?: "email";
  text: string;
  link: string;
  color: string;
}

const Contact = () => {
  const contactLinks: ContactType[] = [
    {
      icon: Mail,
      type: "email",
      text: "acsata18@gmail.com",
      link: "acsata18@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: Facebook,
      text: "Facebook",
      link: "https://www.facebook.com/atesz.acs/",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      text: "Instagram",
      link: "https://www.instagram.com/atesz_acs/",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/attila-%C3%A1cs-9569b229a/",
      color: "text-blue-700",
    },
  ];

  return (
    <section
      className="min-h-[calc(100vh_+_92px)] relative w-full "
      id="contact"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 py-24 min-h-screen">
        <H2 className="!text-4xl" gray={true}>Let's Connect</H2>
        <H3 className="text-xl">Frontend Developer | React.js | Junior</H3>

        <DesktopContactCard contactLinks={contactLinks} />
        <MobilContactCard contactLinks={contactLinks} />

        <div className="relative poppins flex justify-center">
          <a
            href="mailto:acsata18@gmail.com" className="relative"
          >
            <button className="relative mx-auto text-white overflow-hidden
              transition-all duration-300  px-4 py-2 border-2 rounded-2xl 
               cursor-pointer shadow-md hover:shadow-xl text-2xl button-bg-change">
              Send email
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
