import React from 'react';
import { Check } from 'lucide-react';

const ProgressCircle = ({ goal, current }) => {
  // Ensure we don't divide by zero if goal is 0
  const percentage = goal > 0 ? (current / goal) * 100 : 0;
  const goalMet = percentage >= 100;

  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  // Prevent the circle from "over-filling" visually
  const strokeDashoffset = circumference - (Math.min(percentage, 100) / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center my-4">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="#0B6477" // b-teal
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={goalMet ? "#80ED99" : "#0AD1C8"} // b-light-green or b-aqua
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center text-white">
        {goalMet ? (
            <div className="text-center">
                <Check className="w-12 h-12 text-b-light-green mx-auto" />
                <p className="text-xl font-bold">Goal Met!</p>
            </div>
        ) : (
            <>
                <span className="text-4xl font-bold">{goal - current}g</span>
                <span className="text-lg text-gray-300">left</span>
            </>
        )}
      </div>
    </div>
  );
};

export default ProgressCircle;