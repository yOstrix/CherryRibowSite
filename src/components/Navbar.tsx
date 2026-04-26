import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group" onClick={() => setIsOpen(false)}>
              <div className="bg-[#fff5f8] p-1.5 md:p-2 rounded-xl md:rounded-2xl group-hover:bg-[#fce4ec] transition-colors">
                <img className="h-10 md:h-12 w-auto" src={logo} alt="Cherry Ribow" />
              </div>
              <div className="ml-3 md:ml-4">
                <span className="block text-xl md:text-2xl font-serif text-gray-900 leading-none">Cherry <span className="text-[#f06292]">Ribow</span></span>
                <span className="hidden xs:block text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Artesanal & Premium</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link to="/" className="text-gray-600 hover:text-[#f06292] transition-colors font-medium">Início</Link>
            <Link to="/produtos" className="text-gray-600 hover:text-[#f06292] transition-colors font-medium">Produtos</Link>
            <Link to="/servicos" className="text-gray-600 hover:text-[#f06292] transition-colors font-medium">Serviços</Link>
            <Link to="/contato" className="bg-[#f06292] text-white hover:bg-[#ff80ab] transition-all px-6 lg:px-8 py-3 rounded-full font-bold shadow-md shadow-[#fce4ec] flex items-center">
              <ShoppingBag size={18} className="mr-2" />
              Contato
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#f06292] hover:bg-[#fce4ec] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#fce4ec] overflow-hidden"
            >
              <div className="px-4 pt-4 pb-10 space-y-2 text-center">
                <Link to="/" onClick={() => setIsOpen(false)} className="block text-xl text-gray-700 py-4 font-serif italic border-b border-cherry-pink/30 mx-8">Início</Link>
                <Link to="/produtos" onClick={() => setIsOpen(false)} className="block text-xl text-gray-700 py-4 font-serif italic border-b border-cherry-pink/30 mx-8">Produtos</Link>
                <Link to="/servicos" onClick={() => setIsOpen(false)} className="block text-xl text-gray-700 py-4 font-serif italic border-b border-cherry-pink/30 mx-8">Serviços</Link>
                <Link to="/contato" onClick={() => setIsOpen(false)} className="block bg-[#f06292] text-white mx-8 mt-6 py-4 rounded-2xl font-bold shadow-lg shadow-[#fce4ec]">
                  Falar no WhatsApp
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
