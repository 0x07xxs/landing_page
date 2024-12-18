import { motion } from 'framer-motion';
import { Users, Database, Workflow, FileSearch, Laptop, Braces } from 'lucide-react';

const solutions = [
  {
    icon: Users,
    title: 'Lead Flow Automation',
    description: 'Automate your lead capture, qualification, and nurturing process to convert more prospects into customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015'
  },
  {
    icon: Database,
    title: 'CRM Automation',
    description: 'Streamline your customer relationship management with automated data entry, updates, and follow-ups.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Transform manual business processes into efficient automated workflows that save time and reduce errors.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: FileSearch,
    title: 'Data Scraping',
    description: 'Extract valuable data from websites and documents automatically to gain insights and make informed decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: Laptop,
    title: 'Custom Automation',
    description: 'Tailored automation solutions designed specifically for your unique business processes and needs.',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=2025'
  },
  {
    icon: Braces,
    title: 'API Integration',
    description: 'Connect and automate data flow between different software systems and applications seamlessly.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2070'
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our range of AI-powered automation solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-black/40 p-6 hover:bg-black/60 transition-colors backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
              </div>
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: `url(${solution.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 