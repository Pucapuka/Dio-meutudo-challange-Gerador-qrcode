import { displayError } from './cli.js';

export const handleError = (error) => {
  displayError(`Erro: ${error.message}`);
  process.exit(1);
};