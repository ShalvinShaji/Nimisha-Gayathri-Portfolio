const variants = {
  h1: 'text-5xl md:text-7xl lg:text-8xl',
  h2: 'text-4xl md:text-5xl lg:text-6xl',
  h3: 'text-3xl md:text-4xl lg:text-5xl',
  h4: 'text-2xl md:text-3xl lg:text-4xl',
  h5: 'text-xl md:text-2xl lg:text-3xl',
  h6: 'text-lg md:text-xl lg:text-2xl',
};

const Heading = ({ 
  as = 'h2', 
  variant, 
  className = '', 
  gradient = false,
  children 
}) => {
  const Component = as;
  const variantClass = variants[variant || as];
  const gradientClass = gradient ? 'text-gradient' : '';

  return (
    <Component 
      className={`font-serif font-bold tracking-tight leading-tight ${variantClass} ${gradientClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Heading;
