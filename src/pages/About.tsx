import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen px-6 max-w-7xl mx-auto pt-40 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        <div className="md:col-span-5">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">About</h1>
          <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-[32px] overflow-hidden relative shadow-xl">
             <img 
               src="https://picsum.photos/seed/developer/800/1000" 
               alt="Tuan Ngo" 
               className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
        
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800 dark:text-gray-200">
              I'm a creative developer with a passion for building digital experiences that merge design and engineering. 
              My focus is on creating interactive, accessible, and performant web applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mt-6">
              With a background in both design and development, I bridge the gap between aesthetics and functionality. 
              I believe that the best products are built when these two disciplines work in harmony.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Capabilities</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium">
                  <li>Frontend Development</li>
                  <li>Creative Coding</li>
                  <li>UI/UX Design</li>
                  <li>Web Animations</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Technologies</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion / GSAP</li>
                  <li>Three.js / WebGL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
