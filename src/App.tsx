import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Award, Target, Users, Home } from 'lucide-react';
import GlowCard from './components/GlowCard';
import StatsGrid from './components/StatsGrid';
import ChallengeList from './components/ChallengeList';
import QuizCard from './components/QuizCard';
import AchievementsPage from './components/AchievementsPage';
import GoalsPage from './components/GoalsPage';
import CommunityPage from './components/CommunityPage';
import SquadPage from './components/SquadPage';
import LSectionLanding from './components/LSectionLanding';
import OwnSection from './components/OwnSection';
import WinPage from './components/WinPage';
import Background3D from './components/Background3D';
import AnimatedAvatar from './components/AnimatedAvatar';
import RecentActivity from './components/RecentActivity';

const screens = ['home', 'l-section', 'achievements', 'goals', 'community', 'challenges', 'quiz', 'squad', 'own', 'win'] as const;
type Screen = typeof screens[number];

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [glowPoints, setGlowPoints] = useState(89567);

  const handleQuizAnswer = (correct: boolean) => {
    if (correct) {
      setGlowPoints(prev => prev + 63);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 pb-24"
          >
            <AnimatedAvatar />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
              <GlowCard
                name="THABHELO DUVE"
                tier="Celestial"
                points={glowPoints}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
              <StatsGrid
                stats={{
                  glowPoints,
                  referrals: '75+',
                  position: '3rd',
                  creditReadiness: '82%'
                }}
              />
            </div>
            <RecentActivity />
          </motion.div>
        );
      case 'l-section':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <LSectionLanding
              onNavigate={(screen) => setCurrentScreen(screen)}
            />
          </motion.div>
        );
      case 'own':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <OwnSection onNavigate={(screen) => setCurrentScreen(screen as Screen)} />
          </motion.div>
        );
      case 'achievements':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <AchievementsPage />
          </motion.div>
        );
      case 'goals':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <GoalsPage />
          </motion.div>
        );
      case 'community':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <CommunityPage />
          </motion.div>
        );
      case 'squad':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <SquadPage />
          </motion.div>
        );
      case 'challenges':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <ChallengeList onChallengeSelect={() => setCurrentScreen('quiz')} />
          </motion.div>
        );
      case 'quiz':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pb-24"
          >
            <QuizCard onAnswer={handleQuizAnswer} onBack={() => setCurrentScreen('challenges')} />
          </motion.div>
        );
      case 'win':
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pb-24"
          >
            <WinPage />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      <div className="relative">
        <header className="sticky top-0 px-4 py-3 flex items-center justify-between bg-gradient-to-r from-indigo-950/80 via-purple-950/80 to-pink-950/80 backdrop-blur-lg z-50 border-b border-white/5">
          {currentScreen !== 'home' ? (
            <button
              onClick={() => setCurrentScreen('home')}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-handlee font-bold italic bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              GLOW Pass
            </motion.h1>
          )}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center"
            >
              <User size={20} />
            </motion.div>
          </div>
        </header>

        <main className="px-4 py-4 sm:py-6 max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-950/90 via-purple-950/90 to-pink-950/90 backdrop-blur-lg border-t border-white/5 z-50">
          <div className="flex justify-around py-3 sm:py-4 max-w-lg mx-auto">
            {[
              { icon: Home, label: 'G', screen: 'home' as const },
              { icon: Award, label: 'L', screen: 'l-section' as const },
              { icon: Target, label: 'O', screen: 'own' as const },
              { icon: Users, label: 'W', screen: 'win' as const }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreen(item.screen)}
                className={`p-2 rounded-lg transition-colors relative ${
                  currentScreen === item.screen ? 'bg-white/10' : ''
                }`}
              >
                <span className="text-xl sm:text-2xl font-handlee font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {item.label}
                </span>
                {currentScreen === item.screen && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-3 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;