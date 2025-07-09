import { mainPrompt, continuePrompt } from './lib/shared/prompts/main.js';
import { handleQRCode } from './lib/qrcode/controller.js';
import { handlePassword } from './lib/password/controller.js';
import { displayHeader, displaySuccess } from './utils/cli.js';
import { handleError } from './utils/errorHandler.js';
import { APP_STRINGS } from './lib/shared/constants.js';
import prompt from 'prompt';

(async () => {
  try {
    displayHeader();
    prompt.start();

    while (true) {
      const { select } = await prompt.get(mainPrompt);

      switch (select) {
        case '1':
          await handleQRCode();
          break;
        case '2':
          await handlePassword();
          break;
      }

      const { continueOption } = await prompt.get(continuePrompt);
      if (continueOption.toLowerCase() === 'n') {
        displaySuccess(APP_STRINGS.GOODBYE);
        break;
      }
    }
  } catch (error) {
    handleError(error);
  }
})();