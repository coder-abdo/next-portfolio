import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
export const useProjectAnimate = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityprogress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return { ref, scaleProgress, opacityprogress };
};
