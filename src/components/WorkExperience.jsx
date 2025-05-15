import React from "react";

const WorkCard = ({ icon, title, description }) => (
  <div className="bg-bg-secondary rounded-2xl p-8 backdrop-blur-sm border border-text-secondary/10">
    <img src={icon} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
    <p className="text-text-secondary">{description}</p>
    <button className="mt-4 px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all">
      Learn More
    </button>
  </div>
);

const WorkExperience = () => (
  <section className="py-20 bg-bg-primary">
    <div className="container mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-text-primary">Work Experience</h2>
      <div className="grid grid-cols-2 gap-8">
        <WorkCard 
          icon="/icons/star.svg"
          title="CIB on the Mobile"
          description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
        />
        <WorkCard 
          icon="/icons/bulb.svg"
          title="CIB on the Mobile"
          description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
        />
      </div>
    </div>
  </section>
);

export default WorkExperience;
