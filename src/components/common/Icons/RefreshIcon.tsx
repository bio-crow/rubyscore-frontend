import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const RefreshIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.388 13.5C21.664 18.311 17.513 22 12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C16.6 2 20.125 4.468 21.668 8'
        stroke={fill}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 8H21.9C21.9788 8 22.0568 7.98448 22.1296 7.95433C22.2024 7.92417 22.2685 7.87998 22.3243 7.82426C22.38 7.76855 22.4242 7.70241 22.4543 7.62961C22.4845 7.55681 22.5 7.47879 22.5 7.4V3'
        stroke={fill}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default RefreshIcon;
