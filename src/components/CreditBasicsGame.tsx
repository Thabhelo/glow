import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Trophy, Timer, ArrowRight, Gift, Shield, Sparkles, Zap, ChevronLeft, Award, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CreditBasicsGameProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const CreditBasicsGame: React.FC<CreditBasicsGameProps> = ({ onBack, onComplete }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'feedback' | 'complete'>('intro');
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showPowerup, setShowPowerup] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [powerups, setPowerups] = useState({
    timeFreeze: 2,
    fiftyFifty: 1,
    extraLife: 1
  });

  const questions = [
    {
      type: 'quiz',
      question: "What's the most important factor in your credit score?",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      options: [
        { text: "Payment History", correct: true },
        { text: "Credit Mix", correct: false },
        { text: "Length of Credit", correct: false },
        { text: "Recent Applications", correct: false }
      ],
      explanation: "Payment history accounts for 35% of your credit score - it's the biggest factor!",
      tip: "Set up automatic payments to never miss a due date!"
    },
    {
      type: 'quiz',
      question: "You just got your first credit card! What's your first move?",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      scenario: "Your new credit card has a $1,000 limit. You're excited to start building credit!",
      options: [
        { 
          text: "Buy a new gaming console for $500",
          correct: false,
          feedback: "That's 50% of your limit! Try to keep utilization under 30%."
        },
        { 
          text: "Set up a small monthly subscription",
          correct: true,
          feedback: "Perfect! Small, regular payments help build payment history."
        },
        { 
          text: "Max it out - you can pay later",
          correct: false,
          feedback: "High utilization can hurt your credit score."
        },
        { 
          text: "Never use it",
          correct: false,
          feedback: "You need to use credit to build credit history."
        }
      ]
    },
    {
      type: 'quiz',
      question: "What's a good credit utilization ratio?",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      options: [
        { text: "Under 30%", correct: true },
        { text: "50%", correct: false },
        { text: "75%", correct: false },
        { text: "100%", correct: false }
      ],
      explanation: "Keeping your credit utilization under 30% shows responsible credit management.",
      tip: "Set up credit alerts to notify you when you're approaching 30% utilization!"
    }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback && gameState === 'playing') {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, showFeedback, gameState]);

  const handleAnswer = (correct: boolean) => {
    setShowFeedback(correct ? 'correct' : 'incorrect');
    
    if (correct) {
      const streakBonus = streakCount >= 2 ? 50 : 0;
      const timeBonus = Math.floor(timeLeft * 5);
      const questionXP = 100 + streakBonus + timeBonus;
      
      setScore(s => s + questionXP);
      setXpGained(questionXP);
      setStreakCount(s => s + 1);
      
      if (streakCount === 1) {
        setShowPowerup(true);
      }

      // Trigger confetti on correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setLives(l => l - 1);
      setStreakCount(0);
    }

    setTimeout(() => {
      setShowFeedback(null);
      setTimeLeft(20);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(c => c + 1);
      } else {
        setGameState('complete');
        onComplete(score);
      }
    }, 2000);
  };

  const renderIntro = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-900/95 to-indigo-900/95 z-50 flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full space-y-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center"
        >
          <Trophy className="w-12 h-12 text-yellow-400" />
        </motion.div>
        <h1 className="text-3xl font-bold">Credit Basics Challenge</h1>
        <p className="text-purple-200">Master the fundamentals of credit and earn rewards!</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-purple-500/20">
            <Heart className="w-6 h-6 mx-auto text-red-400 mb-2" />
            <p className="text-sm">3 Lives</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/20">
            <Timer className="w-6 h-6 mx-auto text-purple-400 mb-2" />
            <p className="text-sm">Beat the Clock</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/20">
            <Star className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
            <p className="text-sm">Earn XP</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setGameState('playing')}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg"
        >
          Start Challenge
        </motion.button>
      </div>
    </motion.div>
  );

  const renderGame = () => {
    if (lives === 0) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >
          <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-2xl p-8 max-w-md w-full text-center space-y-6 backdrop-blur-xl border border-purple-500/20">
            <Trophy className="w-16 h-16 mx-auto text-yellow-400" />
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <p className="text-purple-200">You earned {score} XP</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold"
            >
              Try Again
            </motion.button>
          </div>
        </motion.div>
      );
    }

    const question = questions[currentQuestion];

    return (
      <div className="relative min-h-screen pb-24">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-30 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/20 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ scale: i < lives ? 1 : 0.8, opacity: i < lives ? 1 : 0.3 }}
                  className="w-6 h-6"
                >
                  <Heart className="w-full h-full text-red-400" fill={i < lives ? "#f87171" : "none"} />
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-yellow-400">{score}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Timer className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-purple-400">{timeLeft}s</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-2 bg-purple-900/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="absolute h-full bg-gradient-to-r from-purple-500 to-indigo-500"
            />
          </div>
        </motion.div>

        <div className="p-4 space-y-6">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src={question.image}
                alt="Question illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>

            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold">{question.question}</h2>
              {question.scenario && (
                <p className="mt-2 text-purple-200">{question.scenario}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.correct)}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md border border-purple-500/20 p-4 text-left transition-all hover:border-purple-500/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option.text}</span>
                    <ArrowRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showPowerup && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onAnimationComplete={() => setShowPowerup(false)}
              className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 rounded-full shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Gift className="text-white" size={16} />
                <span className="text-white text-sm">Streak Powerup Unlocked!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderFeedback = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-2xl p-6 max-w-md w-full text-center space-y-4 backdrop-blur-xl border border-purple-500/20"
      >
        {showFeedback === 'correct' ? (
          <>
            <Sparkles className="w-12 h-12 mx-auto text-yellow-400" />
            <h3 className="text-xl font-bold text-green-400">Correct!</h3>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold">+{xpGained} XP</span>
            </div>
            {streakCount > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400">{streakCount}x Streak!</span>
              </div>
            )}
          </>
        ) : (
          <>
            <Shield className="w-12 h-12 mx-auto text-red-400" />
            <h3 className="text-xl font-bold text-red-400">Not quite!</h3>
            <p className="text-purple-200">{questions[currentQuestion].explanation}</p>
          </>
        )}
      </motion.div>
    </motion.div>
  );

  const renderComplete = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
    >
      <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-2xl p-8 max-w-md w-full text-center space-y-6 backdrop-blur-xl border border-purple-500/20">
        <Award className="w-16 h-16 mx-auto text-yellow-400" />
        <h2 className="text-2xl font-bold">Challenge Complete!</h2>
        <p className="text-purple-200">You've mastered the credit basics!</p>
        <div className="flex items-center justify-center space-x-2">
          <Star className="w-6 h-6 text-yellow-400" />
          <span className="text-xl font-bold text-yellow-400">{score} XP</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold"
        >
          Continue Learning
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {gameState === 'intro' && renderIntro()}
        {gameState === 'playing' && renderGame()}
        {gameState === 'feedback' && renderFeedback()}
        {gameState === 'complete' && renderComplete()}
      </AnimatePresence>
    </div>
  );
};

export default CreditBasicsGame;