import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target, Star, Users, Award } from 'lucide-react';

interface Activity {
  id: number;
  type: 'achievement' | 'points' | 'challenge' | 'social' | 'milestone';
  title: string;
  description: string;
  timestamp: string;
  points?: number;
  icon: React.ElementType;
  color: string;
}

export default function RecentActivity() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'achievement',
      title: 'New Achievement!',
      description: 'Completed your first credit challenge',
      timestamp: 'Just now',
      points: 63,
      icon: Trophy,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 2,
      type: 'social',
      title: 'Squad Update',
      description: 'Ayo just joined your GLOW squad!',
      timestamp: '5m ago',
      icon: Users,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      type: 'milestone',
      title: 'Credit Score Milestone',
      description: 'Your credit readiness increased by 5%',
      timestamp: '15m ago',
      points: 100,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      type: 'challenge',
      title: 'New Challenge Available',
      description: 'Take the Credit Basics Quiz',
      timestamp: '1h ago',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Recent Activity
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium"
        >
          View All
        </motion.div>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`p-2 rounded-xl bg-gradient-to-br ${activity.color} bg-opacity-20`}
                >
                  <activity.icon size={20} className="text-white" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{activity.title}</p>
                    <span className="text-xs text-white/60">{activity.timestamp}</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">{activity.description}</p>
                  
                  {activity.points && (
                    <div className="flex items-center mt-2 space-x-1">
                      <Star size={14} className="text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">+{activity.points} GP</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievement Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Award className="text-purple-400" size={20} />
            <h3 className="font-semibold">Next Achievement</h3>
          </div>
          <span className="text-sm text-white/60">2/3 Tasks</span>
        </div>
        
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '66%' }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>
        
        <p className="text-sm text-white/60 mt-2">
          Complete 1 more challenge to unlock "Credit Pioneer"
        </p>
      </motion.div>
    </div>
  );
}