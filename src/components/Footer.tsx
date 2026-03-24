import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white px-6 py-20 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Interested in <br />working together?
            </h2>
            <a 
              href="https://t.me/tidvn" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-lg border-b-2 border-[#7c3aed] pb-1 hover:text-[#7c3aed] transition-colors font-medium"
            >
              Send Me a Message
            </a>
          </div>
          
          <div className="flex flex-col gap-2 text-sm uppercase tracking-widest text-gray-500 font-semibold">
            <a href="https://facebook.com/tidpr2.5" target="_blank" rel="noreferrer" className="hover:text-[#7c3aed] transition-colors">Facebook</a>
            <a href="https://github.com/tidvn" target="_blank" rel="noreferrer" className="hover:text-[#7c3aed] transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Tuan Ngo</p>
          <p>Based in Ha Noi</p>
        </div>
      </div>
    </footer>
  );
}
