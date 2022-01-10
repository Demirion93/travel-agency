export const formatTime = (arg) => {
  if(!arg || isNaN(arg) || arg < 0){
    return null;
  } else {
    const ss = String(Math.floor(arg % 60)).padStart(2, '0');
    const mm = String(Math.floor(arg / 60 % 60)).padStart(2, '0');
    const hh = String(Math.floor(arg / 3600)).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }
};