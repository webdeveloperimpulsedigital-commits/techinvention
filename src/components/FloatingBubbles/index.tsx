import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bubbleImg from '../../assets/images/3d_bio_bubble.png';

const FloatingBubbles = () => {
    const [elements, setElements] = useState<{ id: number; left: string; top: string; size: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Create 15 floating bubbles spread randomly across the viewport
        const arr = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}vw`,
            // Distribute purely within viewport since container is fixed
            top: `${Math.random() * 100}vh`, 
            size: Math.random() * 80 + 50, // 50px to 130px
            delay: Math.random() * 5,
            duration: Math.random() * 20 + 25, // Slow drifting (25s to 45s)
        }));
        setElements(arr);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {elements.map((el) => (
                <motion.img
                    key={el.id}
                    src={bubbleImg}
                    alt=""
                    className="absolute mix-blend-multiply opacity-50 dark:invert dark:mix-blend-screen dark:opacity-[0.15]"
                    style={{
                        left: el.left,
                        top: el.top,
                        width: el.size,
                        height: el.size,
                    }}
                    animate={{
                        y: [0, -150, 50, 0],
                        x: [0, 100, -100, 0],
                        rotate: [0, 90, 270, 360],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingBubbles;
