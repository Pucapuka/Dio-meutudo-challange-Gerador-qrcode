export const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];

export const shuffleString = (str) => 
  [...str].sort(() => Math.random() - 0.5).join('');