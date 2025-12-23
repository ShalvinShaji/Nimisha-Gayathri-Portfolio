import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { 
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: { 
      opacity: 1,
      y: 0,
       transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const navList = [
    { title: "Works", href: "#works" },
    { title: "Profile", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8 bg-neutral-900/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group relative z-50">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest uppercase text-crimson-500 group-hover:text-white transition-colors">
              Nimisha
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navList.map(item => (
              <NavItem key={item.title} href={isHome ? item.href : `/${item.href}`}>{item.title}</NavItem>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden relative z-50 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors p-2"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-neutral-900 flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {navList.map((item, i) => (
                <Link
                  key={item.title}
                  to={isHome ? item.href : `/${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-4xl font-display text-white hover:text-crimson-500 transition-colors inline-block"
                  >
                    {item.title}
                  </motion.span>
                </Link>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Socials</p>
              <div className="flex gap-4 justify-center">
                 <span className="text-white/60 text-sm">IG</span>
                 <span className="text-white/60 text-sm">LN</span>
                 <span className="text-white/60 text-sm">BE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ href, children }) => {
  const isHash = href.startsWith('#') || href.includes('#');
  
  if (isHash && !href.startsWith('/')) {
    return (
      <a 
        href={href} 
        className="relative text-sm uppercase tracking-[0.2em] font-medium text-neutral-400 transition-colors hover:text-crimson-400 font-sans"
      >
          {children}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className="relative text-sm uppercase tracking-[0.2em] font-medium text-neutral-400 transition-colors hover:text-crimson-400 font-sans"
    >
        {children}
    </Link>
  );
};

export default Header;
