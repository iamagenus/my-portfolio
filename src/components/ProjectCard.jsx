import React from 'react';
import Tilt from 'react-parallax-tilt'; // Import the library

const ProjectCard = ({ project }) => {
  return (
    // Wrap the card in Tilt
    <Tilt 
      glareEnable={true} 
      glareMaxOpacity={0.3} 
      glareColor="#ffffff" 
      glarePosition="all" 
      scale={1.02}
      className="h-full" // Ensure it stretches
    >
      <div className="bg-charcoal-light rounded-lg overflow-hidden border border-charcoal-dark h-full flex flex-col hover:border-accent transition-colors duration-300">
        <div className="relative overflow-hidden shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white">
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