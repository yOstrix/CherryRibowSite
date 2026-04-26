import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sakura = () => {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Aumentamos para 20 pétalas para ser mais visível, mas ainda minimalista
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 25,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
      sway: 50 + Math.random() * 100,
    }));
    setPetals(newPetals);
  }, []);

  return (
    // z-index alto (z-[100]) para ficar por cima de tudo, pointer-events-none para não atrapalhar cliques
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            top: "-5%", 
            left: petal.left, 
            opacity: 0, 
            rotate: petal.rotation,
            scale: 0.5
          }}
          animate={{ 
            top: "105%", 
            opacity: [0, 0.7, 0.7, 0], // Mais opacas para aparecerem bem
            rotate: petal.rotation + 720,
            x: [0, petal.sway, -petal.sway, 0],
            scale: [0.5, 1, 1, 0.5]
          }}
          transition={{ 
            duration: petal.duration, 
            repeat: Infinity, 
            delay: petal.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size,
            background: 'linear-gradient(135deg, #ffc1e3 0%, #ff80ab 100%)', // Gradiente fofinho
            borderRadius: '100% 0% 100% 100%',
            boxShadow: '0 0 10px rgba(255, 193, 227, 0.5)', // Brilho leve
          }}
        />
      ))}
    </div>
  );
};

export default Sakura;
