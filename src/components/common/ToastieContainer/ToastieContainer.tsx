'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const ToastieContainer = () => {
  const theme = useCustomTheme();
  return (
    <ToastContainer
      autoClose={1000}
      closeButton={false}
      hideProgressBar={true}
      closeOnClick={false}
      pauseOnHover={true}
      toastStyle={{ background: theme.palette.black, border: `1px solid ${theme.palette.white10}` }}
      bodyStyle={{ color: theme.palette.white50, textAlign: 'center' }}
    />
  );
};
export default ToastieContainer;
