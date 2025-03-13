import {
  Braces, Palette, Code, FileJson,
  Boxes, GitBranch, LayoutGrid, Figma
} from 'lucide-react';
import SkillCard from '../components/SkillCard';
import H2 from '../features/H2';
import Breaker from '../features/Breaker';
import useScrollAnimation from '../hooks/AnimationConfig';


const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: Code,
      category: 'Markup',
      rating: '7'
    },
    {
      name: 'CSS3',
      icon: Palette,
      category: 'Styling',
      rating: '7'
    },
    {
      name: 'React',
      icon: Boxes,
      category: 'Language',
      rating: '7'
    },
    {
      name: 'JavaScript',
      icon: Braces,
      category: 'Language',
      rating: '7'
    },
    {
      name: 'Tailwind',
      icon: Palette,
      category: 'Styling',
      rating: '7'
    },

    {
      name: 'TypeScript',
      icon: FileJson,
      category: 'Language',
      rating: '6'
    },
    {
      name: 'Git/GitHub',
      icon: GitBranch,
      category: 'Tool',
      rating: '6'
    },
    {
      name: 'Figma',
      icon: Figma,
      category: 'Design',
      rating: '5'
    },
    {
      name: 'Vue',
      icon: Boxes,
      category: 'Framework',
      rating: '5'
    },

    {
      name: 'Nuxt.js',
      icon: Boxes,
      category: 'Framework',
      rating: '5'
    },
    {
      name: 'Next.js',
      icon: LayoutGrid,
      category: 'Framework',
      rating: '4'
    },


  ];

  useScrollAnimation({
    sectionId: 'skills',
    configs: {
      skillsContainer: {
        className: 'skills-container', // Add this class to your container div
        animation: 'animate-bottom',
        groupAnimation: {
          enabled: true,
          childrenSelector: '.skillCardFloatBottom',
          delayBetween: 0.25
        }
      },
      title: {
        className: 'H2',
        animation: 'animate-right'
      },
      description: {
        className: 'animated-p',
        animation: 'animate-blur',
        delay: 1,
      }
    }
  });

  return (
    <>
      <section className="relative w-full" id="skills">
        <div className="max-w-360 mx-auto px-6 lg:px-12 py-24 min-h-screen">
          <div className="flex flex-col items-center mb-16">
            <H2 className="mb-8" gray={true}>
              Skills
            </H2>
            <p className="animated-p text-center max-w-2xl text-base sm:text-lg text-gray-400 mb-12">
              My technical skills and tools I use to bring <span className="text-blue-400">ideas to life</span>
            </p>
          </div>

          <div className="skills-container flex flex-wrap gap-8 justify-center mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="min-w-[calc(30%)] shrink max-lg:flex-1 sm:max-w-[calc(50%-1rem)] md:min-w-[calc(22.5%)] lg:min-w-[calc(25%-1rem)] xl:min-w-[calc(20%)]">
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} category={skill.category} rating={skill.rating} />
              </div>
            ))}
          </div>

        </div>

        <Breaker />
      </section>
    </>
  );
};

export default Skills;