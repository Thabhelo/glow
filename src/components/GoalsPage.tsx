import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CreditCard, PiggyBank } from 'lucide-react';

const GoalsPage = () => {
  const goals = [
    {
      title: 'Improve Credit Score',
      current: 680,
      target: 750,
      progress: 75,
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      title: 'Save for Emergency Fund',
      current: 2500,
      target: 5000,
      progress: 50,
      icon: PiggyBank,
      color: 'bg-green-500',
    },
    {
      title: 'Pay Off Credit Card',
      current: 1500,
      target: 3000,
      progress: 25,
      icon: CreditCard,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Financial Goals</h2>
        <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
          <Target size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 rounded-xl p-4 space-y-3"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${goal.color}`}>
                <goal.icon size={20} />
              </div>
              <h3 className="font-semibold">{goal.title}</h3>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{goal.current}</span>
                <span>{goal.target}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${goal.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;