import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedAvatar() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative w-32 h-32 mx-auto mb-6"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      
      {/* Avatar container with jump and flip animations */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-purple-500/20">
          {/* New 3D Avatar */}
          <img
            src="https://raw.githubusercontent.com/thabhelo/glow-pass/main/public/avatar.png"
            alt="Animated Teen Avatar"
            className="w-full h-full object-cover"
          />
          
          {/* Enhanced glow effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.2)',
                '0 0 40px rgba(168, 85, 247, 0.4)',
                '0 0 20px rgba(168, 85, 247, 0.2)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>

      {/* Animated ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          border: '2px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '50%'
        }}
      />

      {/* Energy particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, (i % 2 ? 30 : -30) * Math.random()],
            y: [0, -40 * Math.random()],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          style={{
            left: `${50 + (i - 2) * 10}%`,
            top: '50%',
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Motion trails */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute w-full h-full rounded-full"
          animate={{
            scale: [1, 1.2],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            repeat: Infinity,
          }}
          style={{
            border: '2px solid rgba(168, 85, 247, 0.2)',
          }}
        />
      ))}
    </motion.div>
  );
}