import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const StatCard = ({ number, label }) => (
  <div className="bg-bg-secondary p-6 rounded-xl">
    <h3 className="text-4xl font-bold text-accent mb-1">{number}</h3>
    <p className="text-text-secondary">{label}</p>
  </div>
);

const About = () => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="relative py-12 md:py-20 bg-bg-primary overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-hidden ${
          isVisible ? 'section-show' : ''
        }`}
      >
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 fade-up-hidden ${isVisible ? 'fade-up-show' : ''}`}
        >
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">About Me</h2>
            <div className="space-y-6 text-base md:text-lg text-text-secondary">
              <p>
                Hi! I'm a passion-driven web developer who loves creating engaging digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 my-8">
                <StatCard number="0.2" label="Years Experience" />
                <StatCard number="3" label="Projects Completed" />
                <StatCard number="0" label="Happy Clients" />
                <StatCard number="0" label="Awards Won" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Experience</h3>
            <div className="space-y-8">
              <div className="p-6 bg-bg-secondary rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">Web Developer</h4>
                    <p className="text-accent">Freelance</p>
                  </div>
                  <span className="text-text-secondary">2024 - Present</span>
                </div>
                <p className="text-text-secondary">
                  Developing responsive websites and applications using modern technologies.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">Self-paced education</h4>
                    <p className="text-accent">Studying</p>
                  </div>
                  <span className="text-text-secondary">2024 - Present</span>
                </div>
                <p className="text-text-secondary">
                  It is a self-study  to gain knowledge about programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
