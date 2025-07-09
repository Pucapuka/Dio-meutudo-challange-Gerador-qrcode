import { PASSWORD_CONFIG } from '../shared/constants.js';

export const lengthPrompt = {
  properties: {
    length: {
      description: 'Tamanho da senha (8-32 caracteres):',
      type: 'number',
      default: PASSWORD_CONFIG.DEFAULT_LENGTH,
      conform: (value) => 
        value >= PASSWORD_CONFIG.MIN_LENGTH && 
        value <= PASSWORD_CONFIG.MAX_LENGTH,
      message: `O tamanho deve ser entre ${PASSWORD_CONFIG.MIN_LENGTH} e ${PASSWORD_CONFIG.MAX_LENGTH}`,
      required: true
    }
  }
};