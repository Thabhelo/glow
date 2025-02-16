import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import CreditBasicsGame from './CreditBasicsGame';

interface QuizCardProps {
  onAnswer: (correct: boolean) => void;
  onBack: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ onAnswer, onBack }) => {
  return (
    <CreditBasicsGame
      onBack={onBack}
      onComplete={(score) => {
        onAnswer(true);
        setTimeout(onBack, 1000);
      }}
    />
  );
};

export default QuizCard;