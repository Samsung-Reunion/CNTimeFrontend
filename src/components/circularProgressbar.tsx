import React from "react";

interface CircularProgressBarProps {
  percentage: number; // percentage의 타입을 명시적으로 지정
  timeText: string;
}

const CircularProgressBar = ({
  percentage,
  timeText,
}: CircularProgressBarProps) => {
  const radius = 180;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (percentage / 100) * circumference;

  console.log("per : " + percentage);

  return (
    <div className="flex items-center justify-center mt-4 mb-10">
      <svg
        className="transform -rotate-90"
        width={400}
        height={400}
        viewBox="0 0 400 400">
        <defs>
          {/* 그라데이션 정의 */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34D399" /> {/* 초록색 */}
            <stop offset="100%" stopColor="#3B82F6" /> {/* 파란색 */}
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r={radius}
          strokeWidth="30"
          className="text-gray-400"
          stroke="currentColor"
          fill="transparent"
        />

        <circle
          cx="200"
          cy="200"
          r={radius}
          strokeWidth="30"
          className="text-blue-500"
          strokeDasharray="1 1130" // 작게 둥글게 보이는 부분만 남기기
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round" // 둥글게 만들기
          stroke="url(#gradient)"
          fill="transparent"
          opacity={percentage < 99.5 ? 1.0 : 0}
          style={{
            transition: "stroke-dashoffset 1s linear", // 부드러운 이동 애니메이션
          }}
        />

        <circle
          cx="200"
          cy="200"
          r={radius}
          strokeWidth="30"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="butt"
          stroke="url(#gradient)"
          fill="transparent"
          style={{
            transition: "stroke-dashoffset 1s linear", // 부드러운 이동 애니메이션
          }}
        />
      </svg>
      <span className="absolute text-6xl font-semibold text-blue-500">
        {timeText}
      </span>
    </div>
  );
};

export default CircularProgressBar;
