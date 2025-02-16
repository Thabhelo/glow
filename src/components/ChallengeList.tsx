import React from 'react';
import { motion } from 'framer-motion';
import { Timer, CreditCard, PiggyBank, TrendingUp, Book, Star, Shield, Trophy, Target } from 'lucide-react';

interface ChallengeListProps {
  onChallengeSelect: () => void;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ onChallengeSelect }) => {
  const challenges = [
    {
      id: 1,
      title: 'Credit Basics',
      level: 'Level 1',
      description: 'Master the fundamentals of credit and earn your first GLOW badge!',
      reward: '+540 GP',
      progress: 0,
      status: 'unlocked',
      xpRequired: '1000 XP',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      achievements: [
        { icon: Star, label: 'Perfect Score Bonus' },
        { icon: Trophy, label: 'Speed Runner' },
        { icon: Target, label: 'Streak Master' }
      ]
    },
    {
      id: 2,
      title: 'Credit Builder',
      level: 'Level 2',
      description: 'Learn advanced credit-building strategies',
      reward: '+750 GP',
      progress: 0,
      status: 'locked',
      xpRequired: '2000 XP',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      lockMessage: 'Complete Level 1 to unlock'
    },
    {
      id: 3,
      title: 'Credit Master',
      level: 'Level 3',
      description: 'Become a credit expert and unlock special rewards',
      reward: '+1000 GP',
      progress: 0,
      status: 'locked',
      xpRequired: '3000 XP',
      icon: Trophy,
      color: 'from-amber-500 to-orange-500',
      lockMessage: 'Complete Level 2 to unlock'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          GLOW Challenges
        </h2>
        <div className="flex items-center space-x-2 bg-white/5 rounded-full px-3 py-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">1,240 XP</span>
        </div>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => challenge.status === 'unlocked' && onChallengeSelect()}
            className={`relative overflow-hidden rounded-xl border ${
              challenge.status === 'unlocked' 
                ? 'border-purple-500/20 hover:border-purple-500/40 cursor-pointer' 
                : 'border-white/5'
            } transition-all duration-300`}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${
              challenge.status === 'unlocked' 
                ? challenge.color 
                : 'from-gray-800 to-gray-900'
            } opacity-10`} />

            {/* Content */}
            <div className="relative p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`p-2 rounded-xl bg-gradient-to-br ${
                      challenge.status === 'unlocked' ? challenge.color : 'from-gray-700 to-gray-800'
                    } bg-opacity-20`}
                  >
                    <challenge.icon size={24} className={challenge.status === 'unlocked' ? 'text-white' : 'text-gray-400'} />
                  </motion.div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg">{challenge.title}</h3>
                      <span className="text-sm text-purple-300">{challenge.level}</span>
                    </div>
                    <p className="text-sm text-white/70">{challenge.description}</p>
                  </div>
                </div>
                {challenge.status === 'unlocked' && (
                  <span className="text-green-400 font-medium">{challenge.reward}</span>
                )}
              </div>

              {challenge.status === 'unlocked' ? (
                <>
                  {/* XP Required */}
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400">{challenge.xpRequired}</span>
                  </div>

                  {/* Achievements */}
                  <div className="flex space-x-3">
                    {challenge.achievements?.map((achievement, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-white/5 group hover:bg-white/10 transition-colors"
                      >
                        <achievement.icon size={16} className="text-purple-400 group-hover:text-purple-300" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Play button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center space-x-2 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 transition-colors"
                  >
                    <Target size={16} className="text-purple-400" />
                    <span className="text-sm font-medium text-purple-400">Start Challenge</span>
                  </motion.div>
                </>
              ) : (
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <PiggyBank size={16} />
                  <span>{challenge.lockMessage}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;