import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Play } from 'lucide-react';

interface LSectionLandingProps {
  onNavigate: (screen: 'challenges' | 'goals' | 'squad') => void;
}

const LSectionLanding: React.FC<LSectionLandingProps> = ({ onNavigate }) => {
  const tiles = [
    {
      id: 'challenges',
      title: 'GLOW Challenges',
      subtitle: 'Level 1: Credit Basics',
      description: 'Start your credit journey here!',
      image: 'https://images.unsplash.com/photo-1533421644343-45b606745fb1?w=800&h=400&fit=crop',
      gradient: 'from-purple-600/90 to-purple-900/90',
      illustration: (
        <div className="absolute right-4 bottom-4">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3"
          >
            <Shield size={24} className="text-purple-300" />
            <div className="text-left">
              <div className="text-sm font-semibold">Level 1</div>
              <div className="text-xs text-purple-200">Ready to play</div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 'goals',
      title: 'Goals',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      gradient: 'from-blue-600/90 to-blue-900/90',
      illustration: (
        <div className="absolute right-4 bottom-4">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-24 h-24 bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop')`
            }}
          />
        </div>
      ),
    },
    {
      id: 'squad',
      title: 'Your SQUAD',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop',
      gradient: 'from-indigo-600/90 to-indigo-900/90',
      illustration: (
        <div className="absolute right-4 bottom-4 flex -space-x-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              className="w-12 h-12 rounded-full border-2 border-white bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop')`
              }}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold italic mb-6">LIVE</h1>
      {tiles.map((tile) => (
        <motion.button
          key={tile.id}
          onClick={() => onNavigate(tile.id as 'challenges' | 'goals' | 'squad')}
          className="w-full relative rounded-xl overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative aspect-[2/1]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${tile.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${tile.gradient}`} />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{tile.title}</h2>
                {tile.subtitle && (
                  <p className="text-sm text-purple-200">{tile.subtitle}</p>
                )}
                {tile.description && (
                  <p className="text-sm text-purple-200">{tile.description}</p>
                )}
              </div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center space-x-2"
              >
                <Play size={20} className="text-white" />
                <span className="text-sm font-medium">Start Now</span>
                <ChevronRight className="text-white" size={20} />
              </motion.div>
            </div>
            {tile.illustration}
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default LSectionLanding;