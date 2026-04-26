import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'framer-motion';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  transition?: SpringOptions;
}

const Tilt = ({
  children,
  className = '',
  maxTilt = 10,
  perspective = 800,
  transition = { stiffness: 300, damping: 25, mass: 0.5 },
}: TiltProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, transition);
  const ySpring = useSpring(y, transition);

  const transform = useMotionTemplate`perspective(${perspective}px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    x.set(-yPct * maxTilt);
    y.set(xPct * maxTilt);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Tilt;
