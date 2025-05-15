import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TechStack = () => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-20 bg-bg-primary overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-hidden ${
          isVisible ? 'section-show' : ''
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-text-primary">
          Technologies I <span className="text-accent">work with</span>
        </h2>
        
        <div className="grid grid-cols-4 grid-rows-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-12 max-w-4xl mx-auto">
          {[
            'figma', 'react', 'node', 'js', 'css',
            'vscode', 'next', 'mysql',
          ].map((tech, index) => (
            <div 
              key={tech}
              className="group relative flex items-center justify-center animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-300 animate-pulse-glow" />
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-bg-secondary/80 backdrop-blur-sm p-2 md:p-3 border border-text-primary/10 transition-all duration-300 group-hover:scale-110">
                <img
                  src={`/icons/${tech}.svg`}
                  alt={tech}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
