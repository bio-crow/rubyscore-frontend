import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const PlusIcon: FC<Props> = ({ style, fill = '#333333' }) => {
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
        d='M12 12V18M6 12H12H6ZM18 12H12H18ZM12 12V6V12Z'
        stroke={fill}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PlusIcon;
