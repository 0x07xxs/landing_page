import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = ['Services', 'About', 'Solutions'];

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className={`text-gray-300 hover:text-white transition-colors duration-300 ${isHome ? 'text-white' : ''}`}
          >
            Home
          </Link>
        </motion.li>
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};