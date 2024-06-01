import { Box } from '@mui/system';
import InProgressTable from '@/modules/Transactions/InProgressTab/InProgressTable/InProgressTable';
import { inProgressData } from '@/modules/Transactions/InProgressTab/InProgressTable/mokeInProgressData';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import TrashIcon from '@/components/common/Icons/TrashIcon';
import { useCustomTheme } from '@/hooks/useCustomTheme';

const InProgressTab = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <FourthButton
          className='white'
          startIcon={<TrashIcon fill={theme.palette.powderWhite} />}
          variant='outlined'
          size='medium'
        >
          Delete all
        </FourthButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <InProgressTable data={inProgressData} />
      </Box>
    </Box>
  );
};
export default InProgressTab;
