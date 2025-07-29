import React from 'react';
import { PlusCircle } from 'lucide-react';

const QuickAddItem = ({ meal, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(meal)}
      className="w-full flex items-center justify-between p-4 rounded-lg bg-b-dark-blue hover:bg-b-teal transition-colors duration-200"
    >
      <div>
        <p className="font-bold text-left">{meal.name}</p>
        <p className="text-sm text-gray-300 text-left">{meal.protein}g P, {meal.collagen}g C</p>
      </div>
      <PlusCircle className="text-b-light-green" size={28} />
    </button>
  );
};

export default QuickAddItem;