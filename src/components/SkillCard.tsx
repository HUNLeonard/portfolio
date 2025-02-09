import { LucideIcon } from 'lucide-react';

const categoryColors = {
  Language: { from: 'from-blue-500', to: 'to-blue-700', base: 'bg-blue-500' },
  Styling: { from: 'from-purple-500', to: 'to-purple-700', base: 'bg-purple-500' },
  Markup: { from: 'from-green-500', to: 'to-green-700', base: 'bg-green-500' },
  Framework: { from: 'from-orange-500', to: 'to-orange-700', base: 'bg-orange-500' },
  Library: { from: 'from-pink-500', to: 'to-pink-700', base: 'bg-pink-500' },
  Tool: { from: 'from-cyan-500', to: 'to-cyan-700', base: 'bg-cyan-500' },
  Design: { from: 'from-red-500', to: 'to-red-700', base: 'bg-red-500' }
};

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  rating: string;
  category: string;
}


const SkillCard = ({ icon: Icon, name, category, rating }: SkillCardProps) => {
  const colors = categoryColors[category as keyof typeof categoryColors];

  return (
    <div
      className="skillCardFloatBottom group relative transition-all duration-500 ease-out transform blur-xs opacity-0">
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.from} ${colors.to} rounded-lg blur opacity-10 
                      group-hover:opacity-30 transition-all duration-500 group-hover:[animation:pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]`}></div>

      <div className={`relative p-6 bg-[#1a1f2e] rounded-xl border border-gray-800 
                      transition-all duration-500 h-full
                      hover:border-opacity-0 backdrop-blur-sm group-hover:transform group-hover:rotate-y-180`}>
        {/* Front side */}
        <div className={`transition-all duration-0 delay-150 group-hover:opacity-0 opacity-100`}>
          <div className={`w-16 h-16 mb-4 rounded-full ${colors.base} bg-opacity-10 
                          flex items-center justify-center transition-all duration-500
                          group-hover:shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className={`max-xss-text-xs max-xs-text-sm text-base sm:text-lg poppins-bold ${colors.base} text-gray-200 mb-2 block px-3 py-1 rounded-full line-clamp-1 text-ellipsis w-full`}>{name}</h3>
        </div>

        {/* Back side */}
        <div className={`absolute inset-0 p-6 transform rotate-y-180 
                        transition-all duration-0 delay-150 group-hover:opacity-100 opacity-0`}>
          <div className="h-full flex flex-col justify-between">
            <div className="w-full">
              <div className="mb-4">
                <p className="max-xss-text-xs max-xs-text-sm text-base sm:text-lg text-gray-200 mb-2">Level</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${colors.base} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${Number(rating) * 10}%` }}
                  ></div>
                </div>
                <p className="text-right max-xss-text-xs max-xs-text-sm text-base sm:text-lg text-gray-400 mt-1">{rating}/10</p>
              </div>
            </div>
            <span className={`max-xss-text-xs max-xs-text-sm max-sm:text-sm ${colors.base} bg-opacity-20 px-3 py-1 rounded-full inline-block line-clamp-1 text-ellipsis`}>
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;