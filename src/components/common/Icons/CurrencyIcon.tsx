import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const CurrencyIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 12L12.5 21L19 12M6 12L12.5 3M6 12L12.5 13.2857M19 12L12.5 3M19 12L12.5 13.2857M12.5 3V13.2857'
        stroke={fill}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CurrencyIcon;
