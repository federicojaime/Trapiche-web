// components/ui/ActivityCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ActivityCard = ({ activity, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border-l-4 border-green-300"
    >
      <div className="flex items-start">
        <span className="text-green-300 mr-3">✅</span>
        <div>
          <h4 className="text-white font-medium mb-2">{activity.split(':')[0]}</h4>
          {activity.includes(':') && (
            <p className="text-white/80 text-sm">{activity.split(':')[1].trim()}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;