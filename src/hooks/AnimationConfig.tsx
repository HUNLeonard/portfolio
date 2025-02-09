import { useEffect, useRef } from 'react';

interface ScrollConfig {
  [key: string]: {
    tag?: string;
    className?: string;
    animation: string;
    delay?: number;
    groupAnimation?: {
      enabled: boolean;
      childrenSelector: string;
      delayBetween?: number;
    };
    customIntersection?: boolean;
  };
}

const useScrollAnimation = ({
  sectionId,
  configs
}: {
  sectionId: string,
  configs: ScrollConfig
}) => {
  const observersRef = useRef<{ [key: string]: IntersectionObserver }>({});
  const isIntersectedRef = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleGroupAnimation = (
      container: Element,
      childSelector: string,
      animation: string,
      delay: number = 0.5
    ) => {
      const elements = container.querySelectorAll(childSelector);
      elements.forEach((el, index) => {
        (el as HTMLElement).style.setProperty('--pos', `${index * delay}`);
        el.classList.add(animation);
      });
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
      key: string,
      config: ScrollConfig[string]
    ) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (config.groupAnimation?.enabled) {
            // Group animation mode
            if (!isIntersectedRef.current[key]) {
              isIntersectedRef.current[key] = true;
              handleGroupAnimation(
                entry.target,
                config.groupAnimation.childrenSelector,
                config.animation,
                config.groupAnimation.delayBetween
              );
              observer.unobserve(entry.target);
            }
          } else {
            // Individual animation mode
            const element = entry.target as HTMLElement;
            element.style.setProperty('--pos', `${config.delay ? config.delay * index : '0'}`);

            if (config.customIntersection) {
              // Handle different animations based on class
              if (element.classList.contains('Left')) {
                element.classList.add('animate-left');
              } else if (element.classList.contains('Right')) {
                element.classList.add('animate-right');
              } else {
                element.classList.add(config.animation);
              }
            } else {
              element.classList.add(config.animation);
            }

            observer.unobserve(entry.target);
          }
        }
      });
    };

    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;

    // Process each configuration
    Object.entries(configs).forEach(([key, config]) => {
      if (config.groupAnimation?.enabled) {
        // Group animation setup
        const container = section.querySelector(
          `${config.className ? '.' + config.className : ''}` || config.tag || ''
        );
        if (container) {
          const observer = new IntersectionObserver(
            (entries) => handleIntersection(entries, observer, key, config),
            {
              threshold: 0.1,
              rootMargin: '0px'
            }
          );
          observersRef.current[key] = observer;
          observer.observe(container);
        }
      } else {
        // Individual animation setup
        const elements = section.querySelectorAll(
          `${config.className ? '.' + config.className : ''}` || config.tag || ''
        );
        if (elements.length > 0) {
          const observer = new IntersectionObserver(
            (entries) => handleIntersection(entries, observer, key, config),
            {
              threshold: 0.1,
              rootMargin: '0px'
            }
          );
          observersRef.current[key] = observer;
          elements.forEach((el) => observer.observe(el));
        }
      }
    });

    return () => {
      Object.values(observersRef.current).forEach(observer => {
        observer.disconnect();
      });
      observersRef.current = {};
      isIntersectedRef.current = {};
    };
  }, [sectionId, configs]);
};

export default useScrollAnimation;