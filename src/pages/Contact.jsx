import { useState } from 'react';
import { motion } from 'framer-motion';

import { content } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-neutral-900 min-h-screen py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
      <div className="container-custom">
          
          {/* Header - Layered Style (Full Width) */}
          <div className="mb-16 md:mb-24 relative">
              <span className="block text-[18vw] md:text-[12rem] text-white/5 font-display font-bold absolute -top-16 md:-top-24 -left-4 select-none pointer-events-none whitespace-nowrap">
                Contact
              </span>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 pl-2 md:pl-4"
              >
                <h1 className="text-[10vw] md:text-7xl font-display font-medium text-white mb-2 tracking-tight leading-none">
                    The <span className="text-crimson-500 italic font-serif">Signature</span>
                </h1>
                  <p className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                    Initiate a dialogue with us
                  </p>
              </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
            
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-12">

              <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="w-2 h-2 rounded-full bg-crimson-600"></span>
                       <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Studio</p>
                    </div>
                    <p className="text-xl text-neutral-200 font-display leading-relaxed pl-5 border-l border-white/10">
                        {content.contact.address.line1}<br/>
                        {content.contact.address.line2}<br/>
                        {content.contact.address.line3}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="w-2 h-2 rounded-full bg-crimson-600"></span>
                       <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Email</p>
                    </div>
                    <a href={`mailto:${content.contact.email}`} className="text-xl text-white hover:text-crimson-400 transition-colors font-display pl-5 border-l border-white/10 block">
                      {content.contact.email}
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="w-2 h-2 rounded-full bg-white"></span>
                       <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Connect</p>
                    </div>
                    <div className="flex gap-6 pl-5">
                      {content.contact.social.map((item, i) => (
                          <a key={i} href={item.url} className="text-sm text-neutral-400 hover:text-white transition-colors uppercase tracking-wider">
                            {item.name}
                          </a>
                      ))}
                    </div>
                  </div>
              </div>
            </div>

            {/* Right: Clean Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-crimson-500 focus:outline-none focus:ring-0 transition-colors font-serif text-lg placeholder-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-crimson-500 focus:outline-none focus:ring-0 transition-colors font-serif text-lg"
                        />
                      </div>
                  </div>
                  
                  <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-crimson-500 focus:outline-none focus:ring-0 transition-colors font-serif text-lg"
                      />
                  </div>

                  <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-crimson-500 focus:outline-none focus:ring-0 transition-colors resize-none font-serif text-lg"
                      />
                  </div>

                  <div className="pt-4 text-right">
                      <button 
                        type="submit" 
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-crimson-600 px-8 font-medium text-black transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        <span className="mr-2 text-sm uppercase tracking-widest font-bold">{submitted ? 'Message Sent' : 'Send Message'}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                  </div>
              </form>
            </div>

          </div>
      </div>
    </section>
  );
};

export default Contact;
