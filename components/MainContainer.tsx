"use client";

import { ReactNode } from "react";

interface MainContainerProps {
  children?: ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <main className="grid min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      {children}
    </main>
  );
}
