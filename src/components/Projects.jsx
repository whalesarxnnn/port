import GradientBackground from "./GradientBackground";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projectData = [
  {
    id: 1,
    name: "Comming Soon",
    description: "Comming Soon.",
    image: "/projects/project.png",
    demoUrl: "https://demo-link.com",
    codeUrl: "https://github.com/yourusername/repo",
    tags: ["React", "Node.js", "MongoDB"]
  },
    {
    id: 1,
    name: "Comming Soon",
    description: "Comming Soon.",
    image: "/projects/project.png",
    demoUrl: "https://demo-link.com",
    codeUrl: "https://github.com/yourusername/repo",
    tags: ["React", "Node.js", "MongoDB"]
  },
    {
    id: 1,
    name: "Comming Soon",
    description: "Comming Soon.",
    image: "/projects/project.png",
    demoUrl: "https://demo-link.com",
    codeUrl: "https://github.com/yourusername/repo",
    tags: ["React", "Node.js", "MongoDB"]
  },
];

const Projects = () => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="relative py-12 md:py-20 bg-bg-primary overflow-hidden">
      <GradientBackground />
      
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-hidden ${
          isVisible ? 'section-show' : ''
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 md:mb-12 text-center">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-bg-secondary/80 backdrop-blur-sm rounded-xl overflow-hidden hover:glass-effect hover-glow transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
              </div>
              <div className="p-4 md:p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">{project.name}</h3>
                <p className="text-sm md:text-base text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">View Live</a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
