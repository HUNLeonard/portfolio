import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  icon: LucideIcon;
}

const AboutCard = ({ title, icon: Icon }: AboutCardProps) => {
  return (
    <div className="group h-full relative w-full">
      {/* Glow effect container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

      {/* Card content */}
      <div className="cardFloatInBottom relative flex flex-col items-center p-8 bg-[#1a1f2e] rounded-xl border border-gray-800 shadow-lg 
                    transition-all duration-500 ease-out h-full
                    hover:border-blue-500/30 backdrop-blur-sm
                    hover:translate-y-[-8px] hover:translate-x-[4px] hover:rotate-1
                    group-hover:shadow-[0_0_40px_8px_rgba(0,149,255,0.1)] blur-xs opacity-0">

        {/* Icon container with enhanced glow */}
        <div className="w-20 h-20 mb-8 rounded-full bg-blue-500/10 flex items-center justify-center
                      transform transition-all duration-500
                      group-hover:shadow-[0_0_20px_rgba(0,149,255,0.3)]
                      group-hover:bg-blue-500/20">
          <Icon className="w-10 h-10 text-blue-400 transform transition-transform duration-500 group-hover:scale-110" />
        </div>

        {/* Title with enhanced text effect */}
        <h3 className="text-2xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300
                     transform transition-all duration-500
                     group-hover:from-blue-200 group-hover:to-cyan-200">{title}</h3>
      </div>
    </div>
  )
};

export default AboutCard;
