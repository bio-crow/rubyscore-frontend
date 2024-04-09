import { useAppSelector } from '@/core/store';
import { formatPercentsForCards } from '@/utils/helpers';
import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface ShareModalProps {
  close: () => void;
}

const ShareModal = ({ close }: ShareModalProps) => {
  const myLevelData = useAppSelector(state => state.dashboardState.myLevelData);
  const percent =
    myLevelData &&
    formatPercentsForCards(
      Number.parseFloat(`${(myLevelData.position.current / myLevelData.position.max) * 100}`)
    );
  return (
    <Box
      sx={{
        minWidth: '758px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '32px',
        background: '#1C1E25',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box className='H2-Lato-fw-700-fs-24'>Share my Stats</Box>
        <Box sx={{ cursor: 'pointer', width: '40px', height: '40px' }} onClick={close}>
          <Image src='/asserts/close.svg' width='40' height='40' alt='close' />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: '10px',
          padding: '50px',
          position: 'relative',
        }}
      ></Box>
    </Box>
  );
};

interface ShareModalWrapperProps {
  open: boolean;
  onClose: () => void;
}

const ShareModalWrapper = ({ open, onClose }: ShareModalWrapperProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ShareModal close={onClose} />
    </Modal>
  );
};

export default ShareModalWrapper;
