import { motion } from 'motion/react';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Experience",
      category: "Development",
      year: "2025"
    },
    {
      id: 2,
      title: "Interactive Portfolio",
      category: "Design & Development",
      year: "2024"
    },
    {
      id: 3,
      title: "Web3 Dashboard",
      category: "Frontend",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen px-6 max-w-7xl mx-auto pt-40 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-gray-900 dark:text-white">Selected Work</h1>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-gray-200 dark:border-gray-800 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-2xl"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:translate-x-2 group-hover:text-[#7c3aed] transition-all duration-300">{project.title}</h2>
                <p className="text-gray-500 mt-2 font-medium">{project.category}</p>
              </div>
              <span className="text-gray-400 font-mono text-sm mt-4 md:mt-0">{project.year}</span>
            </motion.div>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-800"></div>
        </div>
      </motion.div>
    </div>
  );
}
