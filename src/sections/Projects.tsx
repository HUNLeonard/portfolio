import { Project } from '../interfaces/Project'
import ProjectCard from '../components/ProjectCard'
import { cn } from '../utils/cn'
import H2 from '../features/H2'
import H5 from '../features/H5'
import useScrollAnimation from '../hooks/AnimationConfig'
import Breaker from '../features/Breaker'

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Code Snippets Manager",
      slug: "code-snippets-react",
      src: "/assets/csm.webp",
      src_mobil: "/assets/csm-phone.webp",
      desc: "Site for storing and managing code snippets with others or in private.",
      note: "This is a website that I wanted to create a long time ago. It allows me to store my codes in one place and not have to look back at previous project codes.",
      keywords: ["ReactJs", "Zustand", "Tailwind", "React Query", "ExpressJS", "MongoDB", "React Router", "Context Api", "HTML", "CSS"],
    },
    {
      title: "Harmony - Product showcase",
      slug: "harmony-react",
      src: "/assets/harmony.webp",
      src_mobil: "/assets/harmony-phone.webp",
      desc: "A showcase site for different products.",
      note: "I wanted to make a 'fullscreen' webapp, from without looking it up (this was kinda pain :') ).",
      keywords: ["ReactJs", "Zustand", "Tailwind", "HTML", "CSS"],
    }, {
      title: "Trend Mart dummy webshop",
      slug: "trendmart-react",
      src: "/assets/trendmart.webp",
      desc: "A dummy webshop with sorting filtering and routing, with also using search query in filtering.",
      note: "This is just a frontend webshop, not using any external databases. On checkout I just delete the cart currently.",
      keywords: ["ReactJs", "React Query", "Context Api", "React Router", "Zustand", "Tailwind", "HTML", "CSS"],
    }, {
      title: "List maker with Zustand",
      slug: "listmaker-react",
      src: "/assets/listmaker.webp",
      desc: "A kanban styled list maker, with basic functionality.",
      note: "In this project I've tried out a statemanager called Zustand.",
      keywords: ["Tailwind", "ReactJs", "Zustand"],
    }, {
      title: "Movies with external API",
      slug: "movies-react",
      src: "/assets/movies-wide.webp",
      src_mobil: "/assets/movies-phone.webp",
      desc: "A website where the user can sort, filter in movies that come from the TheMovieDataBase API.",
      note: "A project where I tried to learn the React Query and React Routers basics.",
      keywords: ["ReactJs", "React Query", "Context Api", "React Router", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Todo App with React",
      slug: "todo-react",
      src: "/assets/todo.webp",
      desc: "A regular todo app, using the localStorage, and regular ReactJS code.",
      note: "One of my first react applications that I kept.",
      keywords: ["HTML5", "CSS3", "Tailwind", "ReactJs"],
    }
  ]

  useScrollAnimation({
    sectionId: 'projects',
    configs: {
      title: {
        className: 'H2',
        animation: 'animate-left'
      },
      subtitle: {
        className: 'projdesc',
        animation: 'animate-right'
      },
      pcontainer: {
        className: 'projcont',
        animation: 'animate-bottom',
      },
    }
  });


  return (
    <>
      <section className="relative w-full min-h-screen max-w-360 mx-auto px-6 lg:px-12 py-24" id="projects">
        <div className='mb-8 md:mb-16 space-y-2'>
          <H2 gray={true} className='!leading-20'>My Projects</H2>
          <H5 className='projdesc !leading-12'>Apps I've made so far to practice...</H5>
        </div>
        <div className={cn("projcont overflow-x-auto overflow-y-hidden cursomScroll ", //[scroll-snap-type:x_mandatory] Remove it for the moment, need fixing
          "border-2 border-gray-200/50 rounded-md md:rounded-lg")}>
          <div className={cn("flex flex-row flex-nowrap gap-10")}>
            {projects.map(pr =>
              <ProjectCard key={pr.title} {...pr} />
            )}
          </div>
        </div>

      </section>
      <Breaker />
    </>
  )
}

export default Projects