import { useAppDispatch, useAppSelector } from '@/core/store';
import { formatPercentsForCards } from '@/utils/helpers';
import { Box, Modal, Skeleton } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ModalButton from './ModalButton';
import RubyScoreImage from 'public/asserts/logo.svg';
import { getReferrals } from '@/core/thunk/user.thunk';
import CardBg from 'public/asserts/card_bg.png';
import { toJpeg } from 'html-to-image';
import { toast } from 'react-toastify';
import AchievementCard from './AchievementCard';
import { ShareModalSocial, ShareModalType } from '@/core/state/shareModal.state';
import TelegramIcon from 'public/asserts/social/telegram(white).svg';
import XIcon from 'public/asserts/social/x(white).svg';
import { uploadImage } from '@/core/api/shares.api';
import ZkSyncImage from 'public/asserts/shareIcons/zk_sync.png';
import LineaImage from 'public/asserts/shareIcons/Linea.png';
import BaseImage from 'public/asserts/shareIcons/base.png';
import zkEVMImage from 'public/asserts/shareIcons/zk_evm.png';
import ScrollImage from 'public/asserts/shareIcons/scroll.png';
import MantaImage from 'public/asserts/shareIcons/manta.png';
import BlastImage from 'public/asserts/shareIcons/blast.png';
import ZoraImage from 'public/asserts/shareIcons/zora.png';

const networkName = {
  zk_era: {
    title: 'zkSync',
    src: ZkSyncImage,
  },
  linea: {
    title: 'Linea',
    src: LineaImage,
  },
  base: {
    title: 'Base',
    src: BaseImage,
  },
  zk_evm: {
    title: 'zkEVM',
    src: zkEVMImage,
  },
  scroll: {
    title: 'Scroll',
    src: ScrollImage,
  },
  manta: {
    title: 'Manta',
    src: MantaImage,
  },
  blast: {
    title: 'Blast',
    src: BlastImage,
  },
  zora: {
    title: 'Zora',
    src: ZoraImage,
  },
};

interface ShareModalProps {
  close: () => void;
  activeNetwork: string;
  type: ShareModalType;
  social: ShareModalSocial;
}

const ShareModal = ({ close, activeNetwork, type, social }: ShareModalProps) => {
  const [image, setImage] = useState<string>('');
  const [cardRef, setCardRef] = useState<null | HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const myLevelData = useAppSelector(state => state.dashboardState.myLevelData);
  const refCode = useAppSelector(state => state.userState.refCode);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(getReferrals());
  }, []);
  const percent =
    myLevelData &&
    formatPercentsForCards(
      Number.parseFloat(`${(myLevelData.position.current / myLevelData.position.max) * 100}`)
    );

  useEffect(() => {
    if (cardRef) {
      toJpeg(cardRef, {
        quality: 0.85,
      })
        .then(function (dataUrl: string) {
          setImage(dataUrl);
        })
        .catch(function () {
          toast.error('oops, something went wrong!');
        });
    }
  }, [cardRef]);

  const onSaveImage = () => {
    const link = document.createElement('a');
    link.download = `stats-${Date.now().toString()}.jpg`;
    link.href = image;
    link.click();
  };

  const shareViaTelegram = async () => {
    setIsLoading(true);
    const uploadedImageLink = await uploadImage(image);
    if (!uploadedImageLink) {
      setIsLoading(false);
      return;
    }
    const url = `https://t.me/share/url?url=${window.location.origin}/dashboard?og_image=${uploadedImageLink.data.id}%26ref=${refCode}`;
    window.open(url, '_blank');
    setIsLoading(false);
  };

  const shareViaTwitter = async () => {
    setIsLoading(true);
    const uploadedImageLink = await uploadImage(image);
    if (!uploadedImageLink) {
      setIsLoading(false);
      return;
    }
    const url = `https://twitter.com/intent/tweet?url=${window.location.origin}/dashboard?og_image=${uploadedImageLink.data.id}%26ref=${refCode}`;
    window.open(url, '_blank');
    setIsLoading(false);
  };

  const getShareButton = () =>
    ({
      telegram: (
        <ModalButton onClick={shareViaTelegram} disabled={isLoading}>
          <Image src={TelegramIcon} alt='telegram' />
          Share via Telegram
        </ModalButton>
      ),
      twitter: (
        <ModalButton onClick={shareViaTwitter} disabled={isLoading}>
          <Image src={XIcon} alt='x(twitter)' />
          Share via X(Twitter)
        </ModalButton>
      ),
    })[social as string];

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
      {myLevelData ? (
        <Box
          ref={setCardRef}
          sx={{
            borderRadius: '10px',
            padding: '50px',
            position: 'relative',
            overflow: 'hidden',
            background: '#121317',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              alignItems: 'flex-start',
              gap: '47px',
              flex: '1 0 50%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '650px',
                height: '360px',
                right: '0',
                bottom: '0',
                background: 'rgba(83, 231, 200, 0.40)',
                filter: 'blur(150px)',
                transform: 'translateX(50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '660px',
                opacity: '0.4',
                left: '50%',
                top: '70%',
                background: '#04CBFD',
                filter: 'blur(250px)',
                transform: 'translateX(-50%)',
              }}
            />
            {type === 'stats' && (
              <Image src={CardBg} style={{ position: 'absolute', right: 0, bottom: 0 }} alt='bg' />
            )}
            <Box sx={{ gap: '24px', display: 'flex', alignItems: 'center' }}>
              <Image src={RubyScoreImage} alt='rubyscore' width='156' />
              <span
                style={{
                  display: 'inline-block',
                  height: '16px',
                  width: '2px',
                  borderRadius: '1px',
                  background: 'linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%, #00C9FF 100%)',
                }}
              />
              <Box
                className='Body-Inter-fw-700-fs-16'
                sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}
              >
                <Image
                  src={networkName[activeNetwork as keyof typeof networkName]?.src}
                  width={30}
                  height={30}
                  alt='network'
                />
                {networkName[activeNetwork as keyof typeof networkName]?.title}
              </Box>
            </Box>
            <Box>
              <p className='share-card-Michroma-fw-400-fs-16' style={{ margin: 0 }}>
                CURRENT RANK
              </p>
              <p className='share-card-Montserrat-Alt-fw-600-fs-72' style={{ margin: 0, color: '#92FD9D' }}>
                #{new Intl.NumberFormat().format(myLevelData?.position.current)}
              </p>
            </Box>
            <Box>
              <p className='share-card-Montserrat-Alt-fw-600-fs-32' style={{ margin: 0 }}>
                TOP <span style={{ color: '#92FD9D' }}>{percent}%</span>
              </p>
              {myLevelData?.position.max && (
                <p className='share-card-Montserrat-Alt-fw-600-fs-12' style={{ margin: 0 }}>
                  Wallet is better than{' '}
                  <span style={{ fontWeight: '700', color: '#92FD9D' }}>
                    {new Intl.NumberFormat().format(
                      myLevelData?.position.max - myLevelData?.position.current
                    )}{' '}
                  </span>
                  of {new Intl.NumberFormat().format(myLevelData?.position.max)}
                </p>
              )}
            </Box>
          </Box>
          {type === 'achievements' && <AchievementCard />}
        </Box>
      ) : (
        <Skeleton variant='rounded' width='694px' height='360px' />
      )}
      <Box sx={{ display: 'flex', gap: '20px' }}>
        {image && refCode && myLevelData ? (
          getShareButton()
        ) : (
          <Skeleton variant='rounded' width='50%' height='54px' />
        )}
        {image && refCode && myLevelData ? (
          <ModalButton onClick={onSaveImage}>Save Image</ModalButton>
        ) : (
          <Skeleton variant='rounded' width='50%' height='54px' />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
        <p className='Body-Lato-fw-500-fs-12-h-24' style={{ color: 'rgba(245, 247, 243, 0.50)', margin: 0 }}>
          Referral link
        </p>
        <p className='Body-Inter-fw-700-fs-16' style={{ margin: 0 }}>
          {refCode ? (
            `rubyscore.io/dashboard?ref=${refCode}`
          ) : (
            <Skeleton variant='text' sx={{ fontSize: '16px' }} width={325} />
          )}
        </p>
      </Box>
    </Box>
  );
};

interface ShareModalWrapperProps {
  open: boolean;
  onClose: () => void;
  activeNetwork: string;
  type: ShareModalType;
  social: ShareModalSocial;
}

const ShareModalWrapper = ({ open, onClose, activeNetwork, type, social }: ShareModalWrapperProps) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: 'blur(6px)' }}>
      <>
        <ShareModal close={onClose} activeNetwork={activeNetwork} type={type} social={social} />
      </>
    </Modal>
  );
};

export default ShareModalWrapper;
