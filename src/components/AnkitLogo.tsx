
import React from 'react';

const AnkitLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <img 
        src="/lovable-uploads/41b1153e-1506-4a4b-aac1-e500c2a94a52.png" 
        alt="ANKIT BOOK STORE" 
        className="w-full h-auto object-contain" 
      />
    </div>
  );
};

export default AnkitLogo;
