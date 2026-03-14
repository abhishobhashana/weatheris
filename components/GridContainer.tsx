"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface GridContainerProps {
  children?: ReactNode;
}

export default function GridContainer({ children }: GridContainerProps) {
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  return (
    <motion.main
      animate={{
        paddingLeft: isOpen ? 320 : 0,
        opacity: isOpen ? 1 : 0.9,
      }}
      transition={{
        paddingLeft: { type: "spring", stiffness: 150, damping: 20 },
        opacity: { duration: 0.25 },
      }}
      className="min-h-screen w-full flex flex-col justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      {children}
    </motion.main>
  );
}
