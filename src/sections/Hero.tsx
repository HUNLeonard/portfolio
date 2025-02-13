import { useContext, useEffect, useRef } from "react";
import H2 from "../features/H2";
import H3 from "../features/H3";
import { VariableContext } from "../Context/ContextManager";

const Hero = () => {
  const context = useContext(VariableContext);
  const container = useRef<HTMLElement>(null);

  if (context === null) {
    return;
  }
  const { scrollToElement } = context;

  useEffect(() => {
    const loadingImages = Array.from(container.current?.querySelectorAll(".loading-image") ?? []);

    loadingImages.forEach(async (img) => {
      if (!(img instanceof HTMLImageElement)) return;

      const loaded = () => {
        img.classList.remove("loading")
      }
      await new Promise((resolve) => setTimeout(resolve, 10));
      if (img.complete) {
        loaded()
      } else {
        img.classList.add("loading")
        img.addEventListener("load", loaded)
      }
    })
  }, [])

  return (
    <section ref={container} className="relative pt-22">
      <div style={{ backgroundImage: 'url(/assets/pawel-czerwinski-hero-backgorund-small.webp)' }} className="bg-gray-800 bg-center bg-cover absolute top-0 left-0 h-full w-full -z-20" />
      <img src="/assets/pawel-czerwinski-hero-backgorund.webp" alt="" className="loading-image bg-gray-800 object-cover object-center transition-opacity duraiton-500 absolute top-0 left-0 h-full w-full -z-10" />
      <div className="max-w-360 min-h-[calc(100vh_-_92px)] mx-auto poppins-bold flex flex-col justify-between z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-10 mx-6 lg:mx-12 2xl:mt-16 md:gap-12">
          <div className="lg:mt-24 lg:min-w-1/2 w-full lg:w-max">
            <H2 className="max-lg:mx-auto max-lg:text-center">
              Hi, my name is&nbsp;<span className="text-[#00aceb] [filter:drop-shadow(0px_0px_5px_rgb(0,0,0))]">Attila</span>
            </H2>
            <H3 className="max-lg:mx-auto max-lg:text-center w-fit max-w-128">
              I am a <span className="text-blue-700 [filter:drop-shadow(0px_0px_5px_rgb(0,0,0))]">React.js</span>  developer<br /> from Hungary.
            </H3>
          </div>

          <div className="relative max-lg:mx-auto lg:max-w-1/2 shrink lg:flex lg:items-end lg:justify-end overflow-hidden rounded-full" >
            <img src="/assets/me-small.webp" alt="" className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 shrink max-lg:mx-auto max-lg:max-w-[clamp(280px,75%,500px)] transition-[scale_0.5s] w-full md:max-w-112 lg:max-w-128 rounded-full object-cover object-center" />
            <img
              src={"/assets/me.webp"}
              alt="me"
              className="loading-image z-10 shrink max-lg:mx-auto max-lg:max-w-[clamp(280px,75%,500px)] w-full md:max-w-112 lg:max-w-128 transition-[opacity_0.5s,scale_0.5s] object-cover object-center rounded-full hover:scale-104"
            />
          </div>
        </div>
        <div
          className="mx-auto translate-x-1/2 mb-10 max-lg:mt-10 text-black w-12 h-40 flex justify-center items-center scroll-down cursor-pointer"
          onClick={() => scrollToElement("about")}
        >
          <div className="pulse w-full h-full "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
