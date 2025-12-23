import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="works" className="bg-neutral-900 min-h-screen py-24 md:py-40 relative border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        {/* Header - Layered Style */}
        <div className="mb-20 md:mb-32 relative">
             <span className="block text-[15vw] md:text-[12rem] text-white/5 font-display font-bold absolute -top-16 md:-top-24 -left-4 select-none pointer-events-none whitespace-nowrap">
               Portfolio
             </span>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative z-10 pl-2 md:pl-4"
             >
                <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-2 tracking-tight leading-none">
                  Selected <span className="text-crimson-500 italic font-serif">Works</span>
                </h1>
                <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase">
                   Archive • 2018 — 2024
                </p>
             </motion.div>
        </div>

        {/* List View Projects */}
        <div className="relative">
          {/* Background Image Preview - Cinematic */}
          <div className="hidden lg:block fixed top-0 right-0 w-[50vw] h-screen z-0 pointer-events-none opacity-40 overflow-hidden">
            <AnimatePresence mode="wait">
              {hoveredProject && (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, x: 100, scale: 1.05 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  {/* Left Side Fade Gradient - Exact Matte Black Blending */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900 via-40% to-transparent z-10" />
                  <img
                    src={hoveredProject.images[0]}
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt=""
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* List Items */}
          <div className="relative z-10 lg:w-3/4">
            {projects.map((project, index) => (
              <ProjectListItem 
                key={project.id} 
                project={project} 
                index={index} 
                onHover={setHoveredProject}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectListItem = ({ project, index, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      className="group border-b border-white/5 py-14 hover:pl-12 transition-all duration-700 ease-out delay-75 cursor-pointer relative"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="flex items-baseline gap-8 mb-4">
           <span className="text-neutral-600 font-mono text-sm opacity-60 group-hover:text-white transition-colors duration-500 delay-100">
            (0{index + 1})
          </span>
          <h2 className="text-4xl md:text-6xl font-display text-neutral-200 group-hover:text-white transition-colors duration-500 delay-75 font-normal">
            {project.title}
          </h2>
        </div>
        <div className="flex justify-between items-center pl-16">
          <p className="text-neutral-500 text-sm font-sans tracking-widest uppercase group-hover:text-white transition-colors duration-500 delay-100">
            {project.location}
          </p>
          <span className="text-crimson-500 opacity-0 group-hover:opacity-100 transition-all font-serif italic text-lg transform group-hover:translate-x-4 duration-700 delay-150">
             View Case Study →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};



export default Works;
