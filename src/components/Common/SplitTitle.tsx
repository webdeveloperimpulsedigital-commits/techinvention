import React from 'react';

interface SplitTitleProps {
    title: string;
    className?: string; // Optional class applied to the whole title if needed, or we just rely on parent
}

export const SplitTitle: React.FC<SplitTitleProps> = ({ title }) => {
    if (!title) return null;
    const words = title.split(' ');
    
    if (words.length <= 1) {
        return <span className="text-black">{title}</span>;
    }
    
    const mid = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, mid).join(' ');
    const secondHalf = words.slice(mid).join(' ');
    
    return (
        <>
            <span className="text-brand-primary">{firstHalf}</span>{' '}
            <span className="text-brand-secondary">{secondHalf}</span>
        </>
    );
};
