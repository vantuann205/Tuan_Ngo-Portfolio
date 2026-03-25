import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center px-6 max-w-7xl mx-auto pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-gray-900 dark:text-white">
            Hello, my name is <br />
            Tuan Ngo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mb-10">
            I am a Creative Developer who is currently based in Ha Noi, Viet Nam.
          </p>

          <div className="inline-flex items-center gap-2 bg-[#7c3aed] text-white px-6 py-3 rounded-full font-medium">
            <Code2 size={20} />
            Developer
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full max-w-md mx-auto md:ml-auto"
        >
          <img
            src="https://picsum.photos/seed/tuan/800/1200"
            alt="Tuan Ngo"
            className="object-cover w-full h-full rounded-[48px] shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
