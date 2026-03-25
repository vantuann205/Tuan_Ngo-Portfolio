import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Github, Twitter } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight z-50 text-gray-900 dark:text-white">
          <Sun className="text-[#7c3aed]" size={24} />
          Tuan Ngo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full p-1.5 shadow-sm border border-gray-200/50 dark:border-gray-800/50">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${location.pathname === link.path
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <a href="https://twitter.com/dijnie" target="_blank" rel="noreferrer" className="hover:text-[#7c3aed] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/Dijnie" target="_blank" rel="noreferrer" className="hover:text-[#7c3aed] transition-colors">
              <Github size={20} />
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center bg-white dark:bg-gray-900 rounded-full p-1 shadow-sm border border-gray-200/50 dark:border-gray-800/50"
            aria-label="Toggle theme"
          >
            <div className={`p-1.5 rounded-full transition-colors ${!isDark ? 'bg-[#7c3aed] text-white' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
              <Sun size={16} />
            </div>
            <div className={`p-1.5 rounded-full transition-colors ${isDark ? 'bg-[#7c3aed] text-white' : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
              <Moon size={16} />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40 flex flex-col justify-center items-center gap-8"
            >
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-bold tracking-tight transition-colors ${location.pathname === link.path ? 'text-[#7c3aed]' : 'text-gray-900 dark:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 mt-8">
                <a href="https://twitter.com/dijnie" target="_blank" rel="noreferrer" className="text-gray-900 dark:text-white">
                  <Twitter size={24} />
                </a>
                <a href="https://github.com/Dijnie" target="_blank" rel="noreferrer" className="text-gray-900 dark:text-white">
                  <Github size={24} />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="mt-4 flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1"
              >
                <div className={`p-2 rounded-full ${!isDark ? 'bg-[#7c3aed] text-white' : 'text-gray-400'}`}>
                  <Sun size={20} />
                </div>
                <div className={`p-2 rounded-full ${isDark ? 'bg-[#7c3aed] text-white' : 'text-gray-400'}`}>
                  <Moon size={20} />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
    </header >
  );
}
