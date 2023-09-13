import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}
const MenuIcon: FC<Props> = ({ style, fill = 'var(--powder-white)' }) => {
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
        d='M3 5H21M3 12H21M3 19H21'
        stroke={fill}
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MenuIcon;
