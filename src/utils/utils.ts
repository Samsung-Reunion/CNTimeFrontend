// 시간을 분:초 형식으로 변환하는 함수
export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const formatTimeHours = (time: number) => {
  const hours = Math.floor(time / (60 * 60))
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((time / 60) % 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
