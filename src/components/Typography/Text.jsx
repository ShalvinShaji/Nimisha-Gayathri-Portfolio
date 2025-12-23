const variants = {
  body: 'text-base md:text-lg',
  small: 'text-sm md:text-base',
  large: 'text-lg md:text-xl',
  caption: 'text-xs md:text-sm',
};

const Text = ({ 
  as = 'p', 
  variant = 'body', 
  className = '', 
  muted = false,
  children 
}) => {
  const Component = as;
  const variantClass = variants[variant];
  const mutedClass = muted ? 'text-concrete-600 dark:text-concrete-400' : '';

  return (
    <Component 
      className={`font-sans leading-relaxed ${variantClass} ${mutedClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Text;
