import { motion } from 'framer-motion';
import { content } from '../data/content';

const About = () => {
  return (
    <section id="about" className="bg-neutral-900 min-h-screen py-24 md:py-40 border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 relative">
             <span className="block text-[15vw] md:text-[12rem] text-white/5 font-display font-bold absolute -top-16 md:-top-24 -left-4 select-none pointer-events-none whitespace-nowrap">
               Profile
             </span>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative z-10 pl-2 md:pl-4"
             >
                <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-2 tracking-tight leading-none">
                  The <span className="text-crimson-500 italic font-serif">Narrative</span>
                </h1>
                <p className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest max-w-md">
                   SHAPING THE FUTURE, HONOURING THE PAST
                </p>
             </motion.div>
        </div>

        <div className="grid md:grid-cols-12 gap-20">
            
            {/* Left Column: Bio */}
            <div className="md:col-span-7 space-y-16">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display leading-tight text-white font-light"
              >
                  "{content.philosophy.longQuote}"
              </motion.h2>
              <div className="text-neutral-300 space-y-6 leading-relaxed font-sans text-base md:text-lg font-light text-justify">
                  {content.philosophy.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
              </div>
              
              <div className="pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-3 gap-12">
                  {content.stats.map((stat, i) => (
                    <div key={i}>
                        <span className="block text-4xl md:text-5xl font-display text-crimson-500 mb-2">{stat.value}</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Column: Experience */}
            <div className="md:col-span-5 md:pl-8 md:border-l border-white/5">
              <h3 className="text-xs uppercase tracking-[0.3em] text-crimson-500 mb-16 font-bold">Experience Timeline</h3>
              <div className="space-y-16 border-l-2 border-white/5 pl-8 md:pl-0 md:border-none">
                  {content.experience.map((item, i) => (
                    <div key={i} className="group relative">
                        <div className="absolute -left-[39px] md:-left-8 top-2 w-3 h-3 bg-neutral-800 border border-crimson-500 rounded-full md:hidden"></div>
                        <span className="block text-xs font-mono text-neutral-500 mb-2">{item.year}</span>
                        <h4 className="text-2xl text-white font-display mb-1 group-hover:text-crimson-400 transition-colors">{item.role}</h4>
                        <p className="text-neutral-400 text-sm font-sans tracking-wide">{item.company}</p>
                    </div>
                  ))}
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
