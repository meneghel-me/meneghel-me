import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }} className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all`}>
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Meneghel.Me</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </header>

      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-[70vh] text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Artificial Intelligence</h2>
        <p className="text-lg mb-6">Explore more!</p>
        <Button className="px-6 py-3 text-lg" variant="default">
          Comece Agora
        </Button>
      </motion.section>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
      >
        {[1, 2, 3].map((item) => (
          <motion.div 
            key={item} 
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow-lg rounded-xl bg-gray-100 dark:bg-gray-800 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Recurso {item}</h3>
            <p className="text-gray-600 dark:text-gray-300">Descrição do recurso incrível.</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
