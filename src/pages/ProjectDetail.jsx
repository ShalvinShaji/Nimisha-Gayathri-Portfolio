import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import PageTransition from '../components/Layout/PageTransition';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-neutral-900">
          <div className="text-center">
            <h2 className="text-4xl font-display text-white mb-4">Project Not Found</h2>
            <Link to="/works" className="text-crimson-500 hover:text-white transition-colors uppercase tracking-widest text-sm">
              Back to Works
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Calculate Next Project
  const currentIndex = projects.findIndex(p => p.id === parseInt(id));
  const nextProjectIndex = (currentIndex + 1) % projects.length;
  const nextProjectId = projects[nextProjectIndex].id;

  return (
    <PageTransition>
      <div className="bg-neutral-900 min-h-screen pt-[72px] md:pt-[96px]">
        {/* Creative Split Hero */}
        <section className="container-custom h-[calc(100vh-72px)] md:h-[calc(100vh-96px)] flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:py-0">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 lg:pr-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-crimson-500" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                  {project.location} • {project.year}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-[8vw] font-display text-white font-light tracking-tighter leading-[0.85] mb-8">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>

              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
                  <span className="text-crimson-500">→</span> Role: {project.role}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
                  <span className="text-crimson-500">→</span> Typology: {project.tools[0]}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="w-full lg:w-[55%] h-[50vh] lg:h-full relative overflow-hidden group order-1 lg:order-2">
            <motion.div 
              style={{ y }} 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              {/* Image with Dynamic Effects */}
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-in-out"
              />
              
              {/* Glassmorphism Subtle Signature Overlay */}
              <div className="absolute top-0 right-0 p-8 z-20">
                <span className="text-7xl md:text-[10rem] font-display font-bold text-white/5 select-none pointer-events-none">
                  (0{project.id})
                </span>
              </div>
            </motion.div>

            {/* Artistic Border Detail */}
            <div className="absolute inset-8 border border-white/5 pointer-events-none z-30 transition-all duration-700 group-hover:inset-4 group-hover:border-crimson-500/20" />
          </div>
        </section>

        {/* Project Info - Minimalist Grid */}
        <div className="container-custom py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-32">
            {/* Concept Text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8 font-light">The Concept</h3>
                <p className="text-2xl md:text-3xl text-white font-serif leading-relaxed font-light mb-12">
                  {project.concept}
                </p>
                <div className="text-neutral-400 leading-relaxed font-light text-lg space-y-6">
                  <p>{project.description}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-12 lg:pt-8 text-sm">
              <div className="border-t border-neutral-800 pt-4">
                <span className="block text-xs uppercase tracking-widest text-crimson-500 mb-2">Role</span>
                <span className="text-white text-lg font-light">{project.role}</span>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                 <span className="block text-xs uppercase tracking-widest text-crimson-500 mb-2">Collaborators</span>
                <span className="text-white text-lg font-light">Studio Team, Structural Engineers Inc.</span>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                <span className="block text-xs uppercase tracking-widest text-crimson-500 mb-2">Tools</span>
                 <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full text-xs tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Gallery */}
          <div className="space-y-24">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full relative"
              >
                <div className="aspect-[16/9] bg-neutral-800 overflow-hidden relative">
                   <img
                    src={image}
                    alt={`${project.title} view ${index + 2}`}
                    className="w-full h-full object-cover grayscale block hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <span className="absolute -bottom-8 left-0 text-xs text-neutral-600 uppercase tracking-widest">
                  Figure 0{index + 2}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-40 pt-12 border-t border-neutral-800 flex justify-between items-center">
            <Link to="/" className="group flex items-center gap-4">
              <span className="text-2xl text-neutral-500 group-hover:text-crimson-500 transition-colors">←</span>
              <span className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Back to Home</span>
            </Link>
             <Link to={`/project/${nextProjectId}`} className="group hidden md:flex items-center gap-4">
              <span className="text-sm uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Next Project</span>
              <span className="text-2xl text-neutral-500 group-hover:text-crimson-500 transition-colors">→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
