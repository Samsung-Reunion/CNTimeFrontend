module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        "cntimer-blue": "#3F23ED",
        "cntimer-blue-semidark": "#3315eb",
        "cntimer-grey": "#23262B",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      scale: {
        101: "1.01",
        102: "1.02",
        99: "0.99",
        98: "0.98",
      },
    },
  },
  plugins: [],
};
