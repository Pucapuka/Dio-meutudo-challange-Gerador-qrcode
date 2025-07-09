import prompt from 'prompt';
import { generatePassword } from './service.js';
import { lengthPrompt } from './prompts.js';
import { displaySuccess } from '../../utils/cli.js';

export const handlePassword = async () => {
  const { length } = await prompt.get(lengthPrompt);
  const password = generatePassword(Number(length));
  displaySuccess(`\nSua senha gerada: ${password}`);
};