import { Box } from '@mui/system';
import { FC, ReactElement } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
interface Props {
  info: { value: string; description: string; ToolTip?: ReactElement };
}
const MainInfoCard: FC<Props> = ({ info }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '10px 30px 10px 10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.black,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box color={theme.palette.lightGreen} className='Body-Lato-fw-800-fs-24'>
          {info.value}
        </Box>
        {info.ToolTip && (
          <CustomTooltip title={info.ToolTip}>
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <InfoIcon fill={theme.palette.white50} />
            </Box>
          </CustomTooltip>
        )}
      </Box>

      <Box color={theme.palette.white50} className='Body-Lato-fw-600-fs-14'>
        {info.description}
      </Box>
    </Box>
  );
};
export default MainInfoCard;

const TooltipContent = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box className='Body-Inter-fw-700-fs-18' color={theme.palette.powderWhite}>
        Amount on balance
      </Box>
      <Box className='Body-Lato-fw-600-fs-14' color={theme.palette.white50}>
        The balance amount of the ETH coin and the main stablecoins
      </Box>
    </Box>
  );
};
