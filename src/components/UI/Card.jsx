import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ project, index }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden aspect-[4/5] bg-dark-400 hover-lift border border-dark-50 hover:border-crimson-500 transition-all duration-500"
      >
        {/* Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-crimson-500 mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>{project.location}</span>
              <span className="text-crimson-500">•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        {/* Gold corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-crimson-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
};

export default Card;
