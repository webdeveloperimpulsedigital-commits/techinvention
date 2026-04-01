import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the props for the LocationCard component
interface LocationCardProps {
  city: string;
  address: string;
  description?: string;
  imageUrl: string;
  link?: string;
  directionsUrl?: string; // keeping just in case they use it later but unused here
  className?: string;
}

// The main LocationCard component
export const LocationCard = ({
  city,
  address,
  description,
  imageUrl,
  link,
  className,
}: LocationCardProps) => {
  // Framer Motion hooks for creating the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Create transforms for rotation based on mouse position
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10deg", "-10deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10deg", "10deg"]
  );

  // Handle mouse movement over the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Reset the tilt effect when the mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative w-full h-80 rounded-xl bg-cover bg-center cursor-pointer",
        "shadow-lg transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${imageUrl})`,
        }}
        className="absolute inset-4 overflow-hidden grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] place-content-end rounded-xl bg-cover bg-center shadow-lg"
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="p-6 md:p-8 text-white flex flex-col justify-end w-full"
        >
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-2 text-white drop-shadow-md">{city}</h3>
            <p className="text-sm md:text-base text-white/90 font-medium drop-shadow-md">{address}</p>
          </div>
          
          <div className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mt-6">
             <div className="w-10 h-1 bg-white/40 rounded-full mb-5" />
             <p className="text-sm md:text-base text-white/95 leading-relaxed">
               {description}
             </p>
             {link && (
                 <a href={link} className="block mt-6 w-fit relative z-50">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn relative flex items-center gap-4 bg-brand-primary text-white px-7 py-3 rounded-full text-sm font-medium tracking-tight transition-all duration-300 hover:bg-brand-primary/90 hover:shadow-xl overflow-hidden w-fit shadow-xl border border-white/10"
                    >
                        <span className="relative z-10 tracking-widest text-[10px] uppercase">
                            Know More
                        </span>
                        <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute -left-full transition-transform duration-300 group-hover/btn:translate-x-full"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </motion.div>
                 </a>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
