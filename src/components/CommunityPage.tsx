import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Award, Heart } from 'lucide-react';

const CommunityPage = () => {
  const posts = [
    {
      id: 1,
      user: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'Just reached a credit score of 750! 🎉 Here\'s how I did it...',
      likes: 24,
      comments: 8,
      timeAgo: '2h ago',
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Community</h2>
        <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
          <Users size={20} />
        </button>
      </div>

      <div className="flex overflow-x-auto py-2 space-x-4 scrollbar-hide">
        {['All', 'Success Stories', 'Tips', 'Questions'].map((tab, index) => (
          <button
            key={index}
            className="bg-white/10 px-4 py-2 rounded-full whitespace-nowrap hover:bg-white/20 transition-colors"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
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
              {index === 0 && (
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
    </div>
  );
};

export default CommunityPage;