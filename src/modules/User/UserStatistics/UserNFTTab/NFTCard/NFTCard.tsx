import { Box } from '@mui/system';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
interface Props {
  data: string;
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
        <Image src={data} alt='image' fill />
      </Box>
    </Box>
  );
};
export default NFTCard;
