import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Target } from 'lucide-react';

const AchievementsPage = () => {
  const achievements = [
    {
      title: 'Credit Pioneer',
      description: 'Got your first credit card',
      icon: Award,
      color: 'bg-purple-500',
      earned: true,
    },
    {
      title: 'Perfect Payer',
      description: 'Paid 3 bills on time',
      icon: Star,
      color: 'bg-yellow-500',
      earned: true,
    },
    {
      title: 'Score Master',
      description: 'Reached 700+ credit score',
      icon: Trophy,
      color: 'bg-blue-500',
      earned: false,
    },
    {
      title: 'Goal Setter',
      description: 'Created 5 financial goals',
      icon: Target,
      color: 'bg-green-500',
      earned: false,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Achievements</h2>
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl ${
              achievement.earned ? 'bg-white/20' : 'bg-white/5'
            } backdrop-blur-lg`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${achievement.color}`}>
                <achievement.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-white/70">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;