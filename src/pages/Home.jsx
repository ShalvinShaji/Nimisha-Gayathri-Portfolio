import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import PageTransition from '../components/Layout/PageTransition';
import { content } from '../data/content';
import Works from './Works';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <PageTransition>
      <div className="bg-neutral-900 min-h-screen text-white selection:bg-crimson-500 selection:text-black">
        
        {/* HERO - The Architect's Vision */}
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Atmospheric Background Effects */}
          <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-10 text-center relative px-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-[9vw] xl:text-[8vw] font-display font-medium text-white tracking-tighter leading-[0.85] mb-6 md:mb-10 text-gradient-crimson mix-blend-color-dodge lg:whitespace-nowrap">
              {content.hero.title}
            </h1>
            
            <div className="flex justify-center items-center gap-2 md:gap-6">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: 40, md: 60 }} 
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-crimson-500" 
                />
                <p className="text-neutral-300 font-sans font-medium text-[10px] sm:text-xs md:text-base uppercase tracking-[0.3em] md:tracking-[0.5em] leading-relaxed whitespace-nowrap">
                  {content.hero.subtitle}
                </p>
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: 40, md: 60 }} 
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-px bg-crimson-500" 
                />
            </div>
          </motion.div>

           {/* Scroll Hint */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 1 }}
             className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
             onClick={() => window.location.href='#works'}
           >
             <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-crimson-500 transition-colors">Explore</span>
             <div className="w-px h-12 bg-neutral-700 group-hover:bg-crimson-500 transition-colors duration-500"></div>
           </motion.div>
        </section>

        {/* PHILOSOPHY - The Manifesto */}
        <section className="py-24 md:py-40 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-8 md:gap-12 items-center">
              {/* Semantic Red Line - Aligned with Text Quote Only */}
              <div className="hidden md:block w-1 h-32 md:h-40 bg-crimson-600 shrink-0"></div>
              
              <div className="relative">
                {/* Mobile Line (Left Border) */}
                <div className="md:hidden absolute -left-6 top-2 bottom-2 w-1 bg-crimson-600"></div>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-display leading-tight text-neutral-50"
                >
                  We craft <span className="text-crimson-500 italic font-serif">silence</span> amidst the chaos. 
                  Structures that do not just inhabit space, but <span className="stroke-text-crimson">define it</span>.
                </motion.p>
              </div>
            </div>
            
            {/* Footer Link - Separate from alignment context */}
            <div className="mt-12 md:mt-20 flex justify-end">
              <a href="#about" className="group flex items-center gap-4 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                Our Philosophy
                <span className="block h-px w-12 bg-neutral-600 group-hover:w-24 group-hover:bg-crimson-500 transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </section>

        {/* WORKS SECTION */}
        <Works />

        {/* ABOUT SECTION */}
        <About />

        {/* CONTACT SECTION */}
        <Contact />

      </div>
    </PageTransition>
  );
};

export default Home;


