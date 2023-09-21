import { Box } from '@mui/system';
import { INFTCard } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
interface Props {
  data: INFTCard;
}
const NFTCard: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '10px',
          position: 'relative',
          paddingTop: '128%',
        }}
      >
        <Image src={data.image} alt='image' fill />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px',
            borderRadius: '20px',
            background: theme.palette.black,
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          <Image src={data.net.icon} alt='image' width={24} height={24} />
          <Box color={theme.palette.powderWhite}>{data.net.title}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: theme.palette.powderWhite,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '200px',
        }}
        className='Body-Lato-fw-700-fs-18'
      >
        {data.description}
      </Box>
    </Box>
  );
};
export default NFTCard;
