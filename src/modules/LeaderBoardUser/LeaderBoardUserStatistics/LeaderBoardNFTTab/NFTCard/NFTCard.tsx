import { Box } from '@mui/system';
import { INFTData } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import { networkStaticData } from '@/constants/index';
interface Props {
  data: INFTData;
}
const NFTCard: FC<Props> = ({ data }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '10px',
          aspectRatio: '1/1.5',
        }}
      >
        <Image src={data.properties.image.description} alt='image' fill />
      </Box>
    </Box>
  );
};
export default NFTCard;
