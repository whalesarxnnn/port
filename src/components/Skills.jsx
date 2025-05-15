import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="skills" className="relative py-20 bg-bg-primary overflow-hidden">
      <div className="gradient-overlay" />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute left-1/4 top-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div 
        ref={elementRef}
        className={`container mx-auto px-8 relative z-10 section-hidden ${
          isVisible ? 'section-show' : ''
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Here are the technologies and tools I work with on a daily basis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Python", icon: "python" },
            { name: "Express.js", icon: "express" },
            { name: "JavaScript", icon: "js" },
            { name: "HTML & CSS", icon: "css" },
            { name: "React.js", icon: "react" },
            { name: "Node.js", icon: "node" },
            { name: "Next.js", icon: "next" },
            { name: "Figma", icon: "figma" }
          ].map((skill, index) => (
            <div key={index} 
              className="group relative bg-bg-secondary/50 backdrop-blur-sm p-6 rounded-2xl border border-text-secondary/5 hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <img
                    src={`/icons/${skill.icon}.svg`}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-base font-medium text-text-primary text-center group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
