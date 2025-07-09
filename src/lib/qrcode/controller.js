import prompt from 'prompt';
import { generateQRCode } from './service.js';
import { textPrompt } from './prompts.js';
import { displaySuccess } from '../../utils/cli.js';

export const handleQRCode = async () => {
  const { text } = await prompt.get(textPrompt);
  displaySuccess('\nSeu QR Code:\n');
  generateQRCode(text);
};