import qrcode from 'qrcode-terminal';

export const generateQRCode = (text) => {
  qrcode.generate(text, { small: true });
};