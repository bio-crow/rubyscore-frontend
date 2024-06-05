import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const DownloadIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M6 20H18' stroke={fill} strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5'
        stroke='#F5F7F3'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DownloadIcon;
