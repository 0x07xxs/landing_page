import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const HeaderTitle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGetStartedPage = location.pathname === '/getstarted';
  const isHomePage = location.pathname === '/';

  return (
    <div className="text-center">
      {isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Transforming Businesses with AI</span>
        </motion.div>
      )}

      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400 py-3"
        >
          {isGetStartedPage ? 'Book a meeting with us' : 'Intellenai Solutions'}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
      >
        {isGetStartedPage 
          ? "Want to know if you qualify for the service? Book a free consultation and let us know what issues you're currently facing in your business"
          : "Empowering your business with cutting-edge AI automation solutions that drive growth and innovation"
        }
      </motion.p>

      {!isGetStartedPage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => navigate('/getstarted')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
          </button>
        </motion.div>
      )}
    </div>
  );
};