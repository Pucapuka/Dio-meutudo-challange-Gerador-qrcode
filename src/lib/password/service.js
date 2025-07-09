import { PASSWORD_CONFIG } from '../shared/constants.js';
import { getRandomChar, shuffleString } from '../shared/helpers.js';
import { validatePassword } from './validators.js';

const CHAR_SETS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export const generatePassword = (length = PASSWORD_CONFIG.DEFAULT_LENGTH) => {
  let password = [
    getRandomChar(CHAR_SETS.lower),
    getRandomChar(CHAR_SETS.upper),
    getRandomChar(CHAR_SETS.number),
    getRandomChar(CHAR_SETS.special)
  ];

  const allChars = Object.values(CHAR_SETS).join('');
  for (let i = 4; i < length; i++) {
    password.push(getRandomChar(allChars));
  }

  return shuffleString(password.join(''));
};