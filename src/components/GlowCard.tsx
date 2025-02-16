import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { User, Barcode } from 'lucide-react';

interface GlowCardProps {
  name: string;
  tier: string;
  points: number;
}

const GlowCard: React.FC<GlowCardProps> = ({ name, tier, points }) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    let interval = setInterval(() => {
      controls.start({
        background: [
          'linear-gradient(225deg, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.1) 100%)',
          'linear-gradient(315deg, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.1) 100%)',
        ],
        transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
      });
    }, 0);

    return () => clearInterval(interval);
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        className="relative h-64 rounded-2xl p-6 overflow-hidden cursor-pointer preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated background layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br"
          animate={controls}
        />
        <div className="absolute inset-0 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        
        {/* Holographic effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Card content with 3D transform */}
        <div className="relative z-10 h-full flex flex-col justify-between transform translate-z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/30 to-purple-600/30 backdrop-blur-md flex items-center justify-center border border-purple-500/30"
              >
                <User size={24} className="text-white" />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent"
                >
                  {name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-purple-200/80"
                >
                  {tier}
                </motion.p>
              </div>
            </div>
            
            {/* Position badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30"
            >
              <span className="text-sm font-medium text-purple-100">5th</span>
            </motion.div>
          </div>

          {/* Points display */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-baseline space-x-2"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-100 to-purple-300 bg-clip-text text-transparent">
                {points.toLocaleString()}
              </span>
            </motion.div>

            {/* Barcode */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 text-purple-300/60"
            >
              <Barcode size={20} />
              <span className="text-xs font-mono">
                {Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('')}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Animated corner accents */}
        {[0, 90, 180, 270].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute w-8 h-8 border-2 border-purple-500/20"
            style={{
              top: rotation < 180 ? -4 : 'auto',
              bottom: rotation >= 180 ? -4 : 'auto',
              left: rotation >= 90 && rotation < 270 ? -4 : 'auto',
              right: rotation < 90 || rotation >= 270 ? -4 : 'auto',
              borderRadius: '50%',
              transform: `rotate(${rotation}deg)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GlowCard;