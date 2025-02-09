
import AboutCard from '../components/AboutCard';
import { Chrome, Code, Layout } from 'lucide-react';
import Breaker from '../features/Breaker';
import useScrollAnimation from '../hooks/AnimationConfig';
import H2 from '../features/H2';

const About = () => {
  const cards = [
    {
      title: "Web Development",
      icon: Layout,
    },
    {
      title: "Frontend Development",
      icon: Chrome,
    },
    {
      title: "React Development",
      icon: Code,
    }
  ];

  useScrollAnimation({
    sectionId: 'about',
    configs: {
      cards: {
        className: 'cardFloatInBottom',
        animation: 'animate-bottom',
        delay: 1,
      },
      title: {
        tag: 'h2',
        animation: 'animate-right',
      },
      text: {
        tag: 'p',
        animation: 'animate-blur',
        delay: 1,
      }
    }
  });


  return (
    <section className="min-h-[calc(100vh_-_92px)] relative w-full " id="about">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 flex flex-col justify-between min-h-screen">
        <div className="flex flex-col items-start sm:items-center">
          <H2 className="mb-12" gray={true}>
            About Me
          </H2>
          <div className="max-w-4xl text-left sm:text-center space-y-8 text-sm sm:text-lg text-gray-400">
            <p className="leading-relaxed">
              I'm a <span className="text-blue-400">22-year-old fresh graduate</span> from
              <span className="text-blue-400"> Szeged's Computer Science BSc program</span>,
              where I specialized in Programming Information Technology. My thesis focused on
              developing an online store using <span className="text-blue-400">Nuxt.js framework</span>.
              This was one of my ways to kick start my understanding in modern webdevelopment.
            </p>
            <p className="leading-relaxed">
              Fresh out of college, I've started my journey with <span className="text-blue-400">React.js</span>,
              where I want to master modern frontend technologies tricks and beauty.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row max-md:flex-wrap justify-center gap-8 w-full my-6 mx-auto ">
          {cards.map((card, index) => (
            <div key={index} className="shrink w-full sm:w-[calc(50%_-_1rem)] md:w-1/3">
              <AboutCard key={card.title} title={card.title} icon={card.icon} />
            </div>
          ))}
        </div>

        <div className="text-left sm:text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed">
            I'm passionate about creating <span className="text-blue-400">applicaitons as close to the designers dream</span> as
            possible and always looking forward to new challenges and collaborations. Thank you for
            taking the time to explore my work!
          </p>
        </div>
      </div>
      <Breaker />
    </section>
  );
};

export default About;