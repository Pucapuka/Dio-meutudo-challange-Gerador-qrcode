import chalk from 'chalk';

export const mainPrompt = {
  properties: {
    select: {
      description: chalk.cyan('1) Gerar QR Code\n2) Gerar Senha\nOpção:'),
      pattern: /^[1-2]$/,
      message: 'Escolha apenas 1 ou 2',
      required: true
    }
  }
};

export const continuePrompt = {
  properties: {
    continueOption: {
      description: chalk.yellow('\nDeseja continuar? (s/n)'),
      pattern: /^[sn]$/i,
      message: 'Responda com "s" ou "n"',
      required: true
    }
  }
};