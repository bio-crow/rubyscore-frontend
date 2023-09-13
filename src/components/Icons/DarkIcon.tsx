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
        d='M12 21C13.2032 21.0001 14.3941 20.7589 15.5025 20.2908C16.6108 19.8226 17.614 19.137 18.4528 18.2744C19.2916 17.4119 19.9489 16.3899 20.3859 15.2689C20.8229 14.1479 21.0307 12.9507 20.997 11.748C19.7384 12.6241 18.2268 13.0626 16.6947 12.9961C15.1626 12.9297 13.6947 12.3619 12.5167 11.3801C11.3386 10.3983 10.5155 9.05685 10.174 7.56183C9.83238 6.06681 9.99121 4.50099 10.626 3.10501C8.38425 3.45048 6.35559 4.62968 4.94592 6.40668C3.53625 8.18368 2.84955 10.4274 3.02319 12.689C3.19684 14.9506 4.21803 17.0632 5.88246 18.6042C7.54689 20.1452 9.73179 21.0008 12 21Z'
        stroke={fill}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MenuIcon;
