import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const WarningIcon: FC<Props> = ({ style, fill = '#333333' }) => {
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
        d='M20.0429 21.0004H3.95707C2.41904 21.0004 1.4566 19.3368 2.22326 18.0035L10.2662 4.01576C11.0352 2.67835 12.9648 2.67834 13.7338 4.01575L21.7768 18.0035C22.5434 19.3368 21.581 21.0004 20.0429 21.0004Z'
        stroke={fill}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M12 9V13' stroke={fill} strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M12 17.0101L12.01 16.999'
        stroke={fill}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default WarningIcon;
