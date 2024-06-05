import React, { FC } from 'react';

interface Props {
  style?: any;
  fill?: string;
}

const TrashIcon: FC<Props> = ({ style, fill = '#333333' }) => {
  return (
    <svg
      style={style}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.53162 3.57858C2.51103 3.42421 2.56488 3.26981 2.69173 3.17948C3.27163 2.7666 5.26079 1.66699 9.99896 1.66699C14.7371 1.66699 16.7263 2.76659 17.3062 3.17948C17.433 3.26981 17.4869 3.42421 17.4663 3.57858L16.0503 14.1985C15.913 15.229 15.3026 16.1363 14.4 16.6521L14.1335 16.8044C11.5715 18.2684 8.42638 18.2684 5.86447 16.8044L5.5979 16.6521C4.69529 16.1363 4.085 15.229 3.94761 14.1985L2.53162 3.57858Z'
        stroke={fill}
        strokeWidth='1.6'
      />
      <path d='M2.5 4.16699C4.64286 6.38921 15.3572 6.38918 17.5 4.16699' stroke={fill} strokeWidth='1.6' />
    </svg>
  );
};

export default TrashIcon;
