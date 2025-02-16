import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Brain } from 'lucide-react';

interface StatsGridProps {
  stats: {
    glowPoints: number;
    referrals: string;
    position: string;
    creditReadiness: string;
  };
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const statItems = [
    { 
      label: 'Glow Points',
      value: (
        <div className="flex items-center gap-1">
          <span>{stats.glowPoints.toLocaleString()}</span>
          <span className="text-[10px] px-1.5 py-0.5 bg-purple-500/20 rounded-full text-purple-300 font-normal">
            Celestial
          </span>
        </div>
      ),
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      label: 'Referrals',
      value: '3',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: 'Leaderboard',
      value: '9th',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      label: 'Credit Readiness',
      value: '62%',
      icon: Brain,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-4"
    >
      {statItems.map((stat, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-lg" />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r opacity-20 ${stat.color}`}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <stat.icon className={`text-gradient-${stat.color}`} size={18} />
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
            <div className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;