import { useEffect, useRef, useState } from "react";

interface Options {
  root: any;
  rootMargin: string;
  threshold: number;
}

const useElementOnScreen = (options: Options) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    if (ref && ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref, isVisible };
};

export default useElementOnScreen;
