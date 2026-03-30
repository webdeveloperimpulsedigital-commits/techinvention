import React from 'react';

interface Background3DProps {
    videoSrc: string;
}

const Background3D: React.FC<Background3DProps> = ({ videoSrc }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Subtle dark overlay for text visibility */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10" />
        </div>
    );
};

export default Background3D;
