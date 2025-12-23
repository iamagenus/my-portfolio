import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import profilePic from "./assets/profile.jpg"; // Ensure this matches your file name (.jpg vs .png)

function App() {
  return (
    <div className="min-h-screen">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-charcoal-dark/90 backdrop-blur sticky top-0 z-10 border-b border-charcoal-light">
        <div className="text-2xl font-bold text-accent">My Portfolio</div>
        <div>
          <a
            href="#projects"
            className="mr-8 font-medium text-gray-300 hover:text-accent transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-300 hover:text-accent transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section with Typewriter */}
            <header className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-24 px-6 max-w-6xl mx-auto">
              
              {/* Left Side: Text */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-extrabold mb-4 text-white">
                  Hi, I'm{" "}
                  <span className="text-accent">
                    Brandon Lewandowski
                  </span>
                </h2>
                
                {/* THE TYPEWRITER EFFECT */}
                <div className="text-xl text-gray-300 max-w-lg mx-auto md:mx-0 h-16 md:h-auto">
                  <span>I build </span>
                  <TypeAnimation
                    sequence={[
                      'accessible web apps.', 1000,
                      'pixel-perfect UIs.', 1000,
                      'Python scripts.', 1000,
                      'automated data pipelines.', 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="font-bold text-accent"
                    repeat={Infinity}
                  />
                </div>
                
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-accent text-charcoal-dark rounded-lg hover:bg-accent-hover transition font-bold shadow-lg shadow-accent/20"
                  >
                    See My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-charcoal-light rounded-lg hover:bg-charcoal-light text-white transition font-bold"
                  >
                    Contact Me
                  </a>
                </div>
      
                <div className="mt-8 flex justify-center md:justify-start gap-6 text-3xl">
                  <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110"><FaGithub /></a>
                  <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition hover:scale-110"><FaLinkedin /></a>
                  <a href="mailto:email@example.com" className="text-gray-400 hover:text-accent transition hover:scale-110"><FaEnvelope /></a>
                </div>
              </motion.div>
      
              {/* Right Side: Image */}
              <motion.div 
                className="relative shrink-0 w-48 h-48 md:w-64 md:h-64"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-full blur opacity-40 animate-pulse"></div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="relative w-full h-full rounded-full object-cover border-4 border-charcoal"
                />
              </motion.div>
      
            </header>

      {/* Skills Section */}
      <section className="bg-charcoal-dark py-10 border-y border-charcoal-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              React
            </span>
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              Python
            </span>
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              Scrapy
            </span>
            <span className="px-4 py-2 bg-charcoal-light text-accent rounded-full font-semibold border border-charcoal shadow-sm">
              Excel / Data
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">
          Latest Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-charcoal-dark">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-4 text-white">Contact Me</h3>
          <p className="text-gray-400">
            Have a question or want to build something together?
          </p>
        </div>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-gray-500 text-center py-8 border-t border-charcoal-light">
        <p>
          &copy; {new Date().getFullYear()} Brandon "iamagenus" Lewandowski. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;