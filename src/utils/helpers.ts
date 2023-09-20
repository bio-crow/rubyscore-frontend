import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

export const copyToClickBoard = (text: string | undefined, message: string = 'Copied to clipboard') => {
  toast(message, { position: 'bottom-center' });
  text && copy(text);
};
