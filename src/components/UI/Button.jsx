import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-crimson-500 text-white hover:bg-crimson-600 font-semibold',
  secondary: 'bg-transparent border-2 border-crimson-500 text-crimson-500 hover:bg-crimson-500 hover:text-white',
  ghost: 'bg-transparent text-slate-400 hover:text-crimson-500 hover:bg-dark-400',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        font-medium tracking-wide uppercase transition-smooth
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
