import { useEffect, useRef } from "react";
import H5 from "../features/H5";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../interfaces/Project";
import { cn } from "../utils/cn";
import BubbleText from "./BubbleText";
import Img from "./Img";
import { useLoadingImage } from "../hooks/useLoadingImage";
import ContactItem from "./ContactItem";
import { GITHUBLINK, GPROJECTLINK } from "../constants/constants";

const ProjectCard = ({
  title,
  desc = "lorem",
  note = "",
  slug = "",
  src = "",
  src_mobil = "",
  keywords = [""],
}: Project) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    useLoadingImage(container.current);
  }, []);

  const projectIO = GPROJECTLINK + slug
  const projectGit = GITHUBLINK + slug



  return (
    <div className={`sm:p-1 pt-4 lg:p-4 min-w-full snap-center min-h-128`}>
      <div className="sm:p-4 lg:p-8 space-y-3 lg:space-y-8 rounded-md h-full">
        {/* Title */}
        {/* container-1 */}
        <div className="pl-4 w-full line-clamp-2">
          <H5 key={title} title={title} className="underline underline-offset-6">
            {title}
          </H5>
        </div>


        {/* container-2 */}
        <div className="relative flex gap-4 justify-end h-[92%] max-md:border-2 border-white/75 rounded-md md:rounded-xl overflow-hidden">

          {/* Description + Keywords */}
          <div className={cn("absolute left-0 top-0 bottom-0 md:top-2/5 md:-translate-y-1/2",
            "md:w-3/4 max-md:backdrop-blur-sm  ",
            "md:bg-gray-600 max-md:bg-gray-600/40 max-md:shadow-2xl ",
            "px-3 lg:px-6 py-4 z-10 space-y-6 md:h-fit w-full md:rounded-xl ")}>
            <div className="max-md:bg-gray-800/50 max-md:px-4 max-md:py-2 max-md:rounded-md poppins-semibold space-y-6">
              <div className={cn("max-xss-text-sm text-base text-gray-200 poppins-semibold",
                "")}
              >
                {desc}
              </div>
              <div className={cn("max-xss-text-xs text-sm text-gray-300 poppins-semibold",
                "")}
              >
                <span className="underline">Note:</span>&nbsp;{note}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 flex-wrap text-white">
              {keywords.map((kw) => (
                <BubbleText key={kw}>{kw}</BubbleText>
              ))}
            </div>
          </div>

          {/* Links */}

          <div className="absolute left-0 bottom-0 z-10 max-md:m-6">
            <div className="grid grid-cols-2 items-center gap-2 lg:gap-4">
              <ContactItem link={projectGit} icon={Github} className="hover:bg-transparent"></ContactItem>
              <ContactItem link={projectIO} icon={ExternalLink} className="hover:bg-transparent"></ContactItem>
            </div>
          </div>


          {/* Site */}
          <div ref={container} className="relative w-full max-md:aspect-square h-full md:max-w-4/5 lg:max-w-2/3 md:aspect-auto[12/8] md:rounded-2xl overflow-hidden bg-neutral-800">
            <a href={projectIO} target="_blank" className="max-md:hidden">

              <Img src={src.split(".webp")[0] + "-small.webp"} loading="eager" title={title} hoverColor={true} className="cursor-pointer" />

              <Img src={src} title={title} hoverColor={true} className="absolute top-0 cursor-pointer loading-image" />
            </a>

            <Img src={src_mobil.length === 0 ? src.split(".webp")[0] + "-small.webp" : src_mobil.split(".webp")[0] + "-small.webp"}
              loading="eager" title={title} className="md:hidden grayscale-50" />
            <Img src={src_mobil.length === 0 ? src : src_mobil} title={title} className="absolute top-0 md:hidden grayscale-50 loading-image" />
          </div>


        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
