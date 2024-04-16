import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface ModalButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const ModalButton = ({ children, ...props }: ModalButtonProps) => {
  return (
    <Button
      {...props}
      variant='outlined'
      className='Body-Inter-fw-700-fs-16'
      sx={{
        padding: '12px 0px',
        flexGrow: 1,
        flexBasis: '50%',
        border: '1px solid rgba(245, 247, 243, 0.50)',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '700',
        textTransform: 'none',
        color: '#F5F7F3',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',

        '&:hover': {
          border: '1px solid rgba(245, 247, 243, 0.80)',
          background: '#F5F7F30A',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
