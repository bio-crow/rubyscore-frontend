import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const LinkIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 2V6M14 2H10H14ZM14 2L8 8L14 2Z'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 8.66667V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H7.33333'
        stroke={fill}
        strokeWidth='1.2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default LinkIcon;
