import React from "react";

interface CircularProgressBarProps {
  percentage: number; // percentage의 타입을 명시적으로 지정
  timeText: string;
}

const CircularProgressBar = ({
  percentage,
  timeText,
}: CircularProgressBarProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center mt-4 mb-10">
      <svg
        className="transform -rotate-90"
        width={120}
        height={120}
        viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          className="text-gray-300"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          className="text-blue-500"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>
      <span className="absolute text-xl font-semibold text-blue-500">
        {timeText}
      </span>
    </div>
  );
};

export default CircularProgressBar;
