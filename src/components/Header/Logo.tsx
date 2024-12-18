import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Logo = () => {
  return (
    <Link to="/">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={logo} 
          alt="Intellenai Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
          Intellenai
        </span>
      </motion.div>
    </Link>
  );
};