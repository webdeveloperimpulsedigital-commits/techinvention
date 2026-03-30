"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text?: string;
    className?: string;
}

function Text_03({
    text = "Hover me",
    className = "",
}: AnimatedTextProps) {
    return (
        <motion.span
            className={cn(
                "w-full text-center inline-block cursor-pointer transition-all",
                className
            )}
            whileHover="hover"
            initial="initial"
        >
            {Array.from(new Intl.Segmenter('hi-IN', { granularity: 'grapheme' }).segment(text)).map(({ segment: char }, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                        initial: {
                            y: 0,
                            scale: 1,
                        },
                        hover: {
                            y: -10, // Increased slightly for large text
                            scale: 1.1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                delay: index * 0.03,
                            },
                        },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

export { Text_03 }
