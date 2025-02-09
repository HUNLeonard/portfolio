import H2 from '../features/H2';
import Breaker from '../features/Breaker';
import H3 from '../features/H3';
import TimelineItem from '../components/TimeLineItem';
import useScrollAnimation from '../hooks/AnimationConfig';


const Experience = () => {

  useScrollAnimation({
    sectionId: 'experience',
    configs: {
      leftCard: {
        className: 'LeftCard',
        animation: 'animate-bottom',
        delay: 1,
      },
      rightCard: {
        className: 'RightCard',
        animation: 'animate-bottom',
        delay: 1,
      },
      title: {
        className: 'H2',
        animation: 'animate-bottom'
      },
      subtitle: {
        className: 'H3',
        animation: 'animate-bottom'
      }
    }
  });

  return (
    <>
      <section className="min-h-[calc(100vh_-_92px)] relative w-full" id="experience">
        <div className="max-w-360 mx-auto px-6 lg:px-12 py-24 flex flex-col justify-between min-h-screen">
          <div className="flex flex-col items-start lg:items-center">
            <H3 className='!py-0 -mb-4'>What I achived so far...</H3>
            <H2 gray={true}>
              My Experiences
            </H2>
          </div>

          {/* Timeline Section */}
          <div className="relative max-w-6xl mx-auto w-full my-12">
            {/* Center Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 h-full w-1 lg:-ml-0.5">
              <div className="h-full bg-gradient-to-b from-emerald-400 to-transparent" />
            </div>

            {/* Timeline Content */}
            <div className="relative">
              <TimelineItem
                side="left"
                title="Computer Science BSc"
                organization="University of Szeged"
                date="June 2021 - February 2025"
                points={[
                  "Explored diverse programming languages and technologies, discovering a passion for web development",
                  "Learned the fundamentals of software development",
                  "Developed problem-solving skills and adaptability in programming challenges",
                  "Gained valuable experience in team collaboration through group projects",
                  "Built a foundation in learning new technologies efficiently and independently"
                ]}
              />

              <TimelineItem
                side="right"
                title="Front-End Intern"
                organization="origin/develop kft."
                date="August 2024 - October 2024"
                points={[
                  "Developed web applications using modern frontend technologies: React, JavaScript, HTML5, CSS",
                  "Utilized essential development tools: Git, GitHub, Trello, Figma",
                  "Created responsive designs and ensured cross-browser compatibility",
                  "Participated in code reviews and team collaborations",
                  "Worked closely with backend developers and UI/UX designers"
                ]}
              />

              {/* Timeline Circles */}
              <div className="absolute left-2.5 lg:left-1/2 -ml-6 lg:-ml-6 top-[5%] w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-emerald-400 border-4 border-[#0a0d14]" />
              <div className="absolute left-2.5 lg:left-1/2 -ml-6 lg:-ml-6 top-[60%] w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-emerald-400 border-4 border-[#0a0d14]" />
            </div>
          </div>


        </div>
        <Breaker />
      </section>

    </>
  );
};

export default Experience;