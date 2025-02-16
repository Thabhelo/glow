import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronRight, TrendingUp, AlertCircle, ArrowRight, PieChart, Sparkles, DollarSign } from 'lucide-react';

interface OwnSectionProps {
  onNavigate?: (screen: string) => void;
}

const OwnSection: React.FC<OwnSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeLeft = {
    years: 0,
    months: 11,
    weeks: 2,
    days: 7
  };

  const creditReadiness = 82;

  const projectedYearlyEarnings = 42000;

  const futureScope = {
    total: projectedYearlyEarnings,
    categories: [
      { 
        name: 'Student Loans',
        color: 'from-fuchsia-500 to-purple-600',
        percentage: 35,
        impact: 'High',
        prediction: 'Based on your current habits, you might face challenges with student loan payments. Consider building an emergency fund.',
        improvement: '+15% better outcome with consistent savings',
        yearlyImpact: -8400
      },
      { 
        name: 'Credit Card Debts',
        color: 'from-amber-400 to-orange-500',
        percentage: 25,
        impact: 'Medium',
        prediction: 'Your credit utilization suggests moderate risk. Reducing usage to below 30% will improve your outlook.',
        improvement: '+25% better outcome with lower utilization',
        yearlyImpact: -4200
      },
      { 
        name: 'Car Loan',
        color: 'from-blue-400 to-cyan-500',
        percentage: 20,
        impact: 'Low',
        prediction: 'You\'re on track for favorable auto loan terms. Keep maintaining your payment history.',
        improvement: '+10% better rates with continued good standing',
        yearlyImpact: -3360
      },
      { 
        name: 'Payday Loans',
        color: 'from-orange-400 to-red-500',
        percentage: 20,
        impact: 'Critical',
        prediction: 'High-risk area. Consider alternatives to payday loans to protect your financial future.',
        improvement: '+30% improvement by avoiding high-interest loans',
        yearlyImpact: -6300
      }
    ]
  };

  const navigateToLearning = () => {
    if (onNavigate) {
      onNavigate('challenges');
    }
  };

  return (
    <div className="space-y-6 px-4 pb-24 max-w-[430px] mx-auto">
      <h1 className="text-3xl font-handlee font-bold italic bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        OWN
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy-900/80 rounded-3xl p-6 backdrop-blur-xl border border-white/10 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Hey Julie, check out your GLOW Clock</h2>
          <Clock className="text-purple-400" size={24} />
        </div>
        
        <div className="flex items-center justify-between space-x-8">
          <div className="relative w-32 h-32">
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400/30"
              style={{ borderRadius: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(168, 85, 247, 0.3) 0%, transparent 65%)',
                transform: 'rotate(-90deg)'
              }}
              animate={{ rotate: 270 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/5 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-14px)`,
                    transformOrigin: 'center 16px'
                  }}
                />
              ))}
              
              <motion.div
                className="absolute h-12 w-0.5 bg-gradient-to-t from-purple-400 to-transparent origin-bottom rounded-full"
                style={{
                  transform: `rotate(${(currentTime.getMinutes() * 6) + (currentTime.getSeconds() * 0.1)}deg)`
                }}
              />
              
              <motion.div
                className="absolute h-8 w-1 bg-gradient-to-t from-purple-300 to-transparent origin-bottom rounded-full"
                style={{
                  transform: `rotate(${(currentTime.getHours() * 30) + (currentTime.getMinutes() * 0.5)}deg)`
                }}
              />
              
              <motion.div
                className="absolute w-3 h-3 bg-purple-400 rounded-full z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-purple-400"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          <div className="flex space-x-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-[4.5rem]"
              >
                <motion.div 
                  className="relative bg-gradient-to-b from-purple-900/60 to-purple-800/40 rounded-xl py-3 px-2 text-center backdrop-blur-sm border border-white/10 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <span className="relative z-10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                    {value}
                  </span>
                </motion.div>
                <p className="text-xs text-center mt-2 text-white/70 font-medium">
                  {unit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.p 
          className="text-sm text-center mt-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent font-medium"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ...till you turn 18!
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-navy-900/80 rounded-3xl p-6 backdrop-blur-xl border border-white/10 shadow-xl"
      >
        <h2 className="text-xl font-medium mb-6">Credit Readiness</h2>
        
        <div className="relative h-3 bg-gradient-to-r from-white/5 to-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300"
            initial={{ width: 0 }}
            animate={{ width: `${creditReadiness}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-5 h-5 bg-gradient-to-br from-white to-purple-100 rounded-full shadow-lg -top-1 transform -translate-x-1/2"
            style={{ left: `${creditReadiness}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="absolute inset-0.5 rounded-full bg-white" />
          </motion.div>
        </div>

        <div className="flex justify-between items-center text-sm mb-6">
          <span className="text-white/70">You're here</span>
          <span className="text-white/70">Where you need to be</span>
        </div>

        <motion.button
          onClick={navigateToLearning}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300 transition-all rounded-xl py-3.5 px-4 text-center font-medium shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2"
        >
          <span>Continue Learning</span>
          <ChevronRight size={18} />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-navy-900/80 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <PieChart className="text-purple-400" size={24} />
              <h2 className="text-xl font-medium">FutureScope</h2>
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-purple-500/20 rounded-full p-1"
            >
              <Sparkles size={16} className="text-purple-400" />
            </motion.div>
          </div>

          <div className="relative aspect-square max-w-[280px] mx-auto mb-6">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-purple-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign size={20} className="text-green-400" />
                  <span className="text-2xl font-bold text-green-400">
                    {projectedYearlyEarnings.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-white/60">Projected Yearly</p>
              </motion.div>
            </div>

            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(139, 92, 246, 0.1)"
                strokeWidth="2"
              />
              {futureScope.categories.reduce((acc, category, i) => {
                const startAngle = acc;
                const endAngle = acc + (category.percentage * 360) / 100;
                const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                const largeArc = endAngle - startAngle > 180 ? 1 : 0;

                return (
                  <>
                    <motion.path
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      className={`cursor-pointer bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <title>{`${category.name}: ${category.yearlyImpact.toLocaleString()} impact on yearly earnings`}</title>
                    </motion.path>
                    {acc + (category.percentage * 360) / 100}
                  </>
                );
              }, 0)}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {futureScope.categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  selectedCategory === category.name ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <span className="text-sm text-white/90">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10"
            >
              <div className="p-6 space-y-4">
                {futureScope.categories.map(category => {
                  if (category.name === selectedCategory) {
                    return (
                      <div key={category.name} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <TrendingUp size={18} className="text-purple-400" />
                            <h3 className="font-medium">Impact Analysis</h3>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            category.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                            category.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            category.impact === 'Low' ? 'bg-green-500/20 text-green-300' :
                            'bg-red-600/20 text-red-400'
                          }`}>
                            {category.impact} Impact
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <AlertCircle size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                            <p className="text-sm text-white/80">{category.prediction}</p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <ArrowRight size={16} className="text-green-400 mt-1 flex-shrink-0" />
                            <p className="text-sm text-green-400">{category.improvement}</p>
                          </div>
                          <div className="flex items-start space-x-2 mt-4">
                            <DollarSign size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                            <p className="text-sm text-yellow-400">
                              Yearly Impact: {category.yearlyImpact.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OwnSection;