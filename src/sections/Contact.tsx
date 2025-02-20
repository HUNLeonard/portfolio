import { Facebook, Github, Instagram, Linkedin, LucideIcon } from "lucide-react";
import { FACEBOOKLINK, GITHUBLINK, INSTAGRAMLINK, LINKEDINLINK } from "../constants/constants"
import H2 from "../features/H2";
import H5 from "../features/H5";
import DesktopContactCard from "../components/DesktopContactCard";
import MobilContactCard from "../components/MobilContactCard";
import useScrollAnimation from "../hooks/AnimationConfig";
import SendEmailForm from "../components/SendEmailForm";

export interface ContactType {
  icon: LucideIcon;
  text: string;
  link: string;
}

const Contact = () => {
  const contactLinks: ContactType[] = [
    {
      icon: Github,
      text: "Github",
      link: GITHUBLINK,
    },
    {
      icon: Facebook,
      text: "Facebook",
      link: FACEBOOKLINK,
    },
    {
      icon: Instagram,
      text: "Instagram",
      link: INSTAGRAMLINK,
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      link: LINKEDINLINK,
    },
  ];

  useScrollAnimation({
    sectionId: 'contact',
    configs: {
      title: {
        className: 'H2',
        animation: 'animate-right',
        delay: 1
      },
      description: {
        tag: 'H5',
        animation: 'animate-bottom',
        delay: 1,
      },
      desktp: {
        className: 'max-ss-hidden',
        animation: 'animate-top',
        delay: 0.5,
      },
      mobil: {
        className: 'ss-hidden',
        animation: 'animate-bottom',
        delay: 1,
      },
      mobilImage: {
        className: 'mimage',
        animation: 'animate-top',
        delay: 0.5,
      }, mobilText: {
        className: 'ss-flex',
        animation: 'animate-bottom',
        delay: 0.5,
      }, sendmail: {
        tag: 'form',
        animation: 'animate-bottom',
      }
    }
  });

  return (
    <section
      className="min-h-[calc(100vh_+_92px)] relative w-full "
      id="contact"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 py-24 min-h-screen">
        <H2 className="max-xs-text-4xl" gray={true}>Let's Connect</H2>
        <H5 className="text-xl py-5">Frontend Developer | React.js | Junior</H5>

        <div className="flex flex-col 2xl:flex-row gap-4">


          <DesktopContactCard contactLinks={contactLinks} />
          <MobilContactCard contactLinks={contactLinks} />
          <SendEmailForm />


        </div>

      </div>
    </section>
  );
};

export default Contact;
