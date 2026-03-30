'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from "../../lib/utils";

export interface ParallaxMedia {
	src: string;
	alt?: string;
    type?: 'image' | 'video';
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ParallaxMedia[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9, scale5, scale6];

	const positioningStyles = [
		"[&>div]:!w-[60vw] md:[&>div]:!w-[25vw] [&>div]:!h-[40vh] md:[&>div]:!h-[50vh]", // 0
		"[&>div]:!-top-[25vh] [&>div]:!-left-[35vw] md:[&>div]:!-left-[25vw] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw] [&>div]:!h-[20vh] md:[&>div]:!h-[35vh]", // 1
		"[&>div]:!top-[20vh] [&>div]:!-left-[35vw] md:[&>div]:!-left-[25vw] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw] [&>div]:!h-[20vh] md:[&>div]:!h-[35vh]", // 2
		"hidden md:flex md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[45vw] md:[&>div]:!w-[15vw] md:[&>div]:!h-[45vh]", // 3
		"hidden md:flex md:[&>div]:!top-[35vh] md:[&>div]:!-left-[45vw] md:[&>div]:!w-[15vw] md:[&>div]:!h-[30vh]", // 4
		"[&>div]:!-top-[25vh] [&>div]:!left-[35vw] md:[&>div]:!left-[25vw] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw] [&>div]:!h-[20vh] md:[&>div]:!h-[35vh]", // 5
		"[&>div]:!top-[20vh] [&>div]:!left-[35vw] md:[&>div]:!left-[25vw] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw] [&>div]:!h-[20vh] md:[&>div]:!h-[35vh]", // 6
		"hidden md:flex md:[&>div]:!-top-[10vh] md:[&>div]:!left-[45vw] md:[&>div]:!w-[15vw] md:[&>div]:!h-[45vh]", // 7
		"hidden md:flex md:[&>div]:!top-[35vh] md:[&>div]:!left-[45vw] md:[&>div]:!w-[15vw] md:[&>div]:!h-[30vh]", // 8
	];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
                <div className="relative h-full w-full">
				    {images.map((media, index) => {
					const scale = scales[index % scales.length];
					const posClass = positioningStyles[index] || "";

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform ${posClass}`}
						>
							<div className="relative h-[25vh] w-[25vw]" style={{ WebkitBackfaceVisibility: 'hidden', WebkitTransform: 'translate3d(0, 0, 0)' }}>
                                {media.type === 'video' ? (
                                    <video
                                        src={media.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={cn("h-full w-full object-cover", index !== 0 && "rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]")}
                                    />
                                ) : (
								    <img
									    src={media.src || '/placeholder.svg'}
									    alt={media.alt || `Parallax media ${index + 1}`}
									    className={cn("h-full w-full object-cover", index !== 0 && "rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]")}
								    />
                                )}
							</div>
						</motion.div>
					);
				})}
                </div>
			</div>
		</div>
	);
}
