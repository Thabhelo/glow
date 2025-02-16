import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Flame, Activity, ChevronRight, MessageCircle, Heart, Award } from 'lucide-react';

interface SquadMember {
  name: string;
  avatar: string;
  streakDays: number;
  points: number;
}

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isAchievement?: boolean;
}

const SquadPage = () => {
  const [activeTab, setActiveTab] = useState('Squad');
  
  const squadMembers: SquadMember[] = [
    {
      name: 'Julie',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      streakDays: 24,
      points: 89567,
    },
    {
      name: 'Thabhelo',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      streakDays: 7,
      points: 11920,
    },
    {
      name: 'Izuchukwu',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      streakDays: 1,
      points: 8902,
    },
    {
      name: 'Emme',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      streakDays: 13,
      points: 3201,
    },
    {
      name: 'Ayo',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop',
      streakDays: 9,
      points: 26291,
    },
  ];

  const squadChallenges = [
    {
      title: 'Credit Relay Race',
      description: 'Collaborate to finish a series of credit tasks. GLOW point booster reward.',
      progress: 60,
    },
    {
      title: 'Financial Flex-Off',
      description: 'Show off your tier level and GLOW points on Instagram, as a team.',
      progress: 60,
    },
  ];

  const squadActivities = [
    {
      message: 'Hurray! You are currently topping this squad.',
      link: 'See your reward',
    },
    {
      message: 'Izu just earned an exclusive drop.',
      link: 'Get yours here',
    },
    {
      message: 'Emme is on a 13-day streak.',
      link: 'Check her progress here.',
    },
  ];

  const communityPosts: Post[] = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'Just reached a credit score of 750! 🎉 Here\'s how I did it...',
      likes: 24,
      comments: 8,
      timeAgo: '2h ago',
      isAchievement: true,
    },
    {
      id: 2,
      user: 'Marcus J.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      content: 'My first month of budgeting complete! Saved $500 more than usual 💪',
      likes: 45,
      comments: 12,
      timeAgo: '4h ago',
    },
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Tabs */}
      <div className="sticky top-0 bg-navy-900/90 backdrop-blur-lg z-10 px-4 py-3">
        <div className="flex space-x-4">
          {['Squad', 'Community'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl transition-colors ${
                activeTab === tab
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Squad' ? (
        <>
          {/* Squad Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 rounded-xl p-4 mx-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-purple-400" size={20} />
              <h2 className="text-lg font-semibold">Squad Members</h2>
            </div>
            <div className="space-y-4">
              {squadMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{member.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <span>{member.streakDays}</span>
                      <Flame className="text-orange-400" size={16} />
                    </div>
                    <span className="text-right min-w-[80px]">{member.points.toLocaleString()} GP</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Squad Challenges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 rounded-xl p-4 mx-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="text-purple-400" size={20} />
                <h2 className="text-lg font-semibold">Squad Challenges</h2>
              </div>
            </div>
            <div className="space-y-4">
              {squadChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-blue-900/30 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <span className="text-white bg-white/20 px-3 py-1 rounded-full text-sm">
                      {challenge.progress}%
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Squad Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 rounded-xl p-4 mx-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="text-purple-400" size={20} />
              <h2 className="text-lg font-semibold">Squad Activities</h2>
            </div>
            <div className="space-y-3">
              {squadActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <Activity className="text-purple-400 mt-1" size={16} />
                  <div>
                    <p className="text-sm">{activity.message}</p>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline">
                      {activity.link}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        // Community Feed
        <div className="px-4 space-y-4">
          {communityPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-xl p-4 space-y-4"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={post.avatar}
                  alt={post.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{post.user}</h3>
                  <p className="text-sm text-white/60">{post.timeAgo}</p>
                </div>
                {post.isAchievement && (
                  <div className="ml-auto">
                    <Award className="text-yellow-400" size={20} />
                  </div>
                )}
              </div>

              <p className="text-sm">{post.content}</p>

              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                  <Heart size={18} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-white/80 transition-colors">
                  <MessageCircle size={18} />
                  <span>{post.comments}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SquadPage;