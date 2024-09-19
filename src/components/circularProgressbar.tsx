import React from "react";

interface CircularProgressBarProps {
  percentage: number; // percentage의 타입을 명시적으로 지정
  timeText: string;
}

const CircularProgressBar = ({
  percentage,
  timeText,
}: CircularProgressBarProps) => {
  const radius = 280;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (percentage / 100) * circumference;

  console.log("per : " + percentage);

  return (
    <div className="flex items-center justify-center w-96 h-96 mt-4 mb-10">
      <svg
        className="transform -rotate-90"
        width="100%"
        height="100%"
        viewBox="0 0 600 600">
        <defs>
          {/* 그라데이션 정의 */}
          <linearGradient id="backGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6AB2FF" />
            <stop offset="47%" stopColor="#3B4BFF" />
            <stop offset="100%" stopColor="#3DE0B1" />
          </linearGradient>
          <linearGradient
            id="timerGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%">
            <stop offset="0%" stopColor="#B9DBFF" />
            <stop offset="47%" stopColor="#7883FF" />
            <stop offset="100%" stopColor="#4CF7C7" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#B9DBFF" />
            <stop offset="47%" stopColor="#7883FF" />
            <stop offset="100%" stopColor="#4CF7C7" />
          </linearGradient>
          <filter
            id="blurFilter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <circle
          cx="300"
          cy="300"
          r={radius}
          strokeWidth="14"
          stroke="url(#backGradient)"
          fill="transparent"
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            opacity: "30%",
            border: "transparent",
          }}
        />

        <circle
          cx="300"
          cy="300"
          r={radius}
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#backGradient)"
          fill="transparent"
          filter="url(#blurFilter)"
          style={{
            transition: "stroke-dashoffset 1s linear",
            border: "transparent",
            opacity: "100%",
          }}
        />

        <circle
          cx="300"
          cy="300"
          r={radius}
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#timerGradient)"
          fill="transparent"
          style={{
            transition: "stroke-dashoffset 1s linear",
            opacity: "100%",
          }}
        />

        <text
          x="50%"
          y="50%"
          fill="url(#textGradient)"
          dominantBaseline="middle"
          textAnchor="middle"
          transform="rotate(90, 300, 300)"
          className="font-pretendard text-8xl font-medium text-center"
          style={{ border: "transparent" }}>
          {timeText}
        </text>
      </svg>
      {/* <span className="absolute text-6xl font-semibold text-blue-500">
        {timeText}
      </span> */}
    </div>
  );
};

export default CircularProgressBar;
