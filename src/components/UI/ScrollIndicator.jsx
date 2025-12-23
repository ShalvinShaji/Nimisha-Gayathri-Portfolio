import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-widest text-slate-400">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-6 h-10 border-2 border-crimson-500 rounded-full flex items-start justify-center p-2"
      >
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-2 bg-crimson-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
