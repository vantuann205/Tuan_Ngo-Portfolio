import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans flex flex-col selection:bg-[#7c3aed] selection:text-white transition-colors duration-300 relative overflow-hidden">
        
        {/* Gradient Background */}
        <div className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-[#fbcfe8] dark:bg-[#fbcfe8]/10 blur-[120px] opacity-80"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[80%] rounded-full bg-[#8b5cf6] dark:bg-[#8b5cf6]/20 blur-[150px] opacity-70"></div>
          <div className="absolute top-[10%] left-[20%] w-[50%] h-[60%] rounded-full bg-[#c084fc] dark:bg-[#c084fc]/20 blur-[140px] opacity-60"></div>
        </div>

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
