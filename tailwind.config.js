module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}', // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        'cntimer-blue': '#3F23ED',
        'cntimer-blue-semidark': '#3315eb',
        'cntimer-grey': '#23262B',
        'cntimer-main-grey': '#6B727F',
        'cntimer-skyblue': '#719BFF',
        'cntimer-background': '#101212',
        'cntimer-lightgrey': '#ABAEB3',
        'cntimer-bg-dark-grey': '#23262B',
        'cntimer-bg-dark-grey-hovered': '#1A1C1F',
        'cntimer-bg-goal-text-grey': '#35373c',
        'cntimer-bg-finish-goaltext': '#3A3E44',
      },
      maxWidth: {
        modal: '23rem',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        roboto_mono: ['Roboto Mono', 'sans-serif'],
        gangwon_eduall: ['GangwonEduAll', 'sans-serif'],
      },
      scale: {
        101: '1.01',
        102: '1.02',
        99: '0.99',
        98: '0.98',
      },
      width: {
        'app-width': '420px',
      },
      fontSize: {
        '4.5xl': [
          '2.6rem',
          {
            lineHeight: '2.8rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
