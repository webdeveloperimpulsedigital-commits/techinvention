"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
  index?: number;
}

export function WordRotate({
  words,
  duration = 2500,
    framerProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  className,
  index: externalIndex,
}: WordRotateProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  useEffect(() => {
    if (externalIndex !== undefined) return;

    const interval = setInterval(() => {
      setInternalIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration, externalIndex]);

  const index = externalIndex !== undefined ? externalIndex : internalIndex;

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="popLayout">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
