"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiSidebar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/sidebarSlice";
import Nav from "./Nav";

export default function Sidemenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state?.sidebar?.isOpen);

  const sidebarWidth = 360;

  return (
    <>
      <motion.div
        animate={{ x: isOpen ? 0 : -sidebarWidth }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="lg:flex hidden md:w-[19.5%] w-full z-10 fixed lg:top-0 bottom-0 flex-col lg:justify-between justify-end gap-0.5 md:h-[calc(100dvh-1.5rem)] h-full lg:m-2.5 lg:mr-0 p-2.5 bg-secondary/90 backdrop-blur-xl rounded-2xl shadow-md"
      >
        <Nav />
      </motion.div>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => dispatch(toggleSidebar())}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-4 left-2 z-20 text-white w-8 h-8 rounded-md flex items-center justify-center cursor-pointer"
          >
            <FiSidebar />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
