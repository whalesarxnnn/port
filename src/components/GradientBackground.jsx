import React from "react";

const GradientBackground = ({ className = "" }) => (
  <div className={`absolute inset-0 w-full h-[150%] -top-1/4 ${className}`}>
    <div className="absolute left-1/4 top-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] transition-all duration-1000 animate-pulse" />
    <div className="absolute right-1/4 bottom-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] transition-all duration-1000 animate-pulse" 
      style={{ animationDelay: '1s' }}
    />
  </div>
);

export default GradientBackground;
