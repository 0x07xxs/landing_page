import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, MessageSquare } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  index: number;
}

const services = [
  {
    icon: Code,
    title: 'Custom AI Development',
    description: 'Tailored AI solutions designed specifically for your business needs',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Integration',
    description: 'Intelligent conversational AI for enhanced customer service',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2070'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, image, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-8">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>
          </div>
          <p className="text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions to power your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};