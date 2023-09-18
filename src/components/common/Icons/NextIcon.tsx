import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const NextIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9 6L15 12L9 18' stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default NextIcon;
