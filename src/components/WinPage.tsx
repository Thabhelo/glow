import React from 'react';
import { motion } from 'framer-motion';

const WinPage = () => {
  const rewards = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      title: '20% Discount off Nike Dunks',
      points: 3800,
      iconStyle: 'invert'
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg',
      title: '5% Discount off digital games',
      points: 470,
      iconStyle: 'invert'
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      title: '2% Discount on Premium',
      points: 2000,
      iconStyle: 'original',
      bgColor: 'bg-[#1DB954]/10'
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg',
      title: '10% Discount on Air Jordans',
      points: 1000,
      iconStyle: 'invert'
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg',
      title: 'Access to Roblox GLOW event',
      points: 500,
      iconStyle: 'original',
      bgColor: 'bg-[#FF0000]/10'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2B4D] via-[#1A2544] to-purple-900 rounded-t-[2.5rem]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-t-[2.5rem]" />
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent rounded-t-[2.5rem]" />
      
      {/* Content */}
      <div className="relative space-y-6 pb-24">
        {/* Page title with enhanced positioning */}
        <h1 className="text-3xl font-handlee font-bold italic bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-6 pt-6 mb-2">
          WIN
        </h1>

        {/* Profile Section with curved container */}
        <div className="flex flex-col items-center pt-2 mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-2xl border-2 border-purple-400/50 overflow-hidden backdrop-blur-sm transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt="Julie Robertson"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-300/20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Julie Robertson
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                89,567
              </span>
              <span className="text-lg text-purple-300">GP</span>
            </div>
          </motion.div>
        </div>

        {/* Rewards List with enhanced styling */}
        <div className="space-y-4 px-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-300/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 flex items-center justify-between backdrop-blur-sm border border-white/10 hover:border-purple-500/20 transition-all transform hover:scale-[1.02] hover:-rotate-1">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${reward.bgColor || 'bg-gradient-to-br from-purple-500/10 to-purple-400/5'} p-2 flex items-center justify-center transform group-hover:rotate-3 transition-transform`}>
                    <img
                      src={reward.icon}
                      alt={reward.title}
                      className={`w-8 h-8 object-contain ${reward.iconStyle === 'invert' ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white/90">{reward.title}</p>
                    <p className="text-sm text-purple-300">- {reward.points} GP</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-400/20 text-purple-300 font-medium border border-purple-500/20 hover:from-purple-500/30 hover:to-purple-400/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                >
                  Claim
                </motion.button>
              </div>
            </motion.div>
          ))}

          <motion.button
            whileHover={{ y: -2 }}
            className="w-full py-4 text-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            See more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WinPage;