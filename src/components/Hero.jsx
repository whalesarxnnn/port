import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="home" className="relative min-h-screen pt-20 lg:pt-32 pb-16 bg-bg-primary overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
      </div>

      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-hidden ${
          isVisible ? 'section-show' : ''
        }`}
      >
        <div className="max-w-4xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Avatar */}
          <div className="relative flex-shrink-0 w-48 sm:w-64 lg:w-80 animate-float">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 animate-pulse-glow" />
              <img 
                src="/avatar.png" 
                alt="Avatar with MacBook"
                className="w-full h-full object-contain scale-110 transition-transform duration-500 hover:scale-125"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 rounded-full blur-2xl opacity-75 animate-pulse-glow" />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="hover-scale">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl text-text-primary mb-4">
                Hello! I Am <span className="text-violet-400 font-medium">Saranyapong Wongwanich</span>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl text-text-secondary mb-2">A Developer who</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
              Judges a book<br />
              by its <span className="text-violet-400">cover</span>..
            </h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
