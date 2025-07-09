import chalk from 'chalk';
import { APP_STRINGS } from '../lib/shared/constants.js';

export const displayHeader = () => {
  console.log(chalk.blue.bold(APP_STRINGS.WELCOME));
  console.log(chalk.blue(APP_STRINGS.OPTIONS));
};

export const displaySuccess = (message) => {
  console.log(chalk.green(message));
};

export const displayError = (message) => {
  console.error(chalk.red(message));
};