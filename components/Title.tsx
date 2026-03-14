"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Title() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [50, 100], [0, -20]);
  const height = useTransform(scrollY, [0, 100], ["14rem", "8rem"]);
  const padding = useTransform(scrollY, [0, 100], ["5rem", "3rem"]);
  const tempOpacity = useTransform(scrollY, [80, 120], [1, 0]);
  const sunnyOpacity = useTransform(scrollY, [40, 80], [1, 0]);
  const highLowOpacity = useTransform(scrollY, [0, 40], [1, 0]);
  const compactOpacity = useTransform(scrollY, [100, 140], [0, 1]);

  return (
    <div className="sticky top-0 left-0 right-0 z-0 bg-black">
      <motion.div
        className="max-w-sm mx-auto flex flex-col items-center"
        style={{ y, height, paddingTop: padding }}
      >
        <h1 className="text-4xl font-medium">Location</h1>

        <div className="relative flex flex-col items-center">
          <motion.h1
            className="text-4xl font-medium absolute"
            style={{ opacity: tempOpacity }}
          >
            37
          </motion.h1>

          <motion.h3
            className="absolute top-10"
            style={{ opacity: sunnyOpacity }}
          >
            Sunny
          </motion.h3>

          <motion.div
            className="flex gap-2.5 absolute top-16"
            style={{ opacity: highLowOpacity }}
          >
            <p>H:37</p>
            <p>L:21</p>
          </motion.div>

          <motion.div
            className="flex gap-2 absolute top-0"
            style={{ opacity: compactOpacity }}
          >
            <p>37</p> | <p>Sunny</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
