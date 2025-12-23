import React from 'react';
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ project }) => {
  return (
    <Tilt 
      className="flex flex-col h-full" // CRITICAL: This keeps the layout intact
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.02}
      transitionSpeed={1000}
    >
      <div className="bg-charcoal-light rounded-lg overflow-hidden border border-charcoal-dark flex flex-col h-full group hover:border-accent transition-colors duration-300 hover:shadow-2xl hover:shadow-accent/40">
        
        {/* Image Container - Strictly enforced height */}
        <div className="relative w-full h-48 overflow-hidden shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div>
            <a 
              href={project.link} 
              className="inline-block px-4 py-2 bg-accent text-charcoal-dark font-bold rounded hover:bg-accent-hover transition shadow-lg shadow-accent/20"
            >
              View Project
            </a>
          </div>
        </div>

      </div>
    </Tilt>
  );
};

export default ProjectCard;