import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const UploadIcon: FC<Props> = ({ style, fill = '#333333' }) => {
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
        d='M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5'
        stroke={fill}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default UploadIcon;
