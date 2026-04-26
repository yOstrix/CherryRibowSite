import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
    >
      <div className="relative w-full max-w-lg px-6 flex flex-col items-center">
        {/* Círculo de brilho atrás da logo - Aumentado */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-cherry-pink rounded-full blur-[100px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center w-full"
        >
          {/* Logo - Tamanho aumentado de h-48 para h-64+ */}
          <motion.img 
            src={logo} 
            alt="Cherry Ribow Logo" 
            className="h-64 md:h-[400px] w-auto drop-shadow-[0_20px_50px_rgba(240,98,146,0.3)] object-contain"
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            className="h-1 bg-cherry-dark mt-12 rounded-full overflow-hidden max-w-[300px]"
          >
            <motion.div 
              className="h-full bg-white/60 w-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, trackingSpacing: "0.1em" }}
            animate={{ opacity: 1, trackingSpacing: "0.4em" }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-cherry-dark font-serif italic uppercase text-lg md:text-xl tracking-[0.4em]"
          >
            Artesanal & Premium
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
