import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import PlusIcon from '@/components/common/Icons/PlusIcon';
import { Button } from '@mui/material';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { TooltipAnotherWallet } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomSelect from '@/components/common/ui/CustomSelect/CustomSelect';
import { networkOptions } from '@/modules/Transactions/BalanceTab/sections/DepositSection/mokeData';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface Props {}
const AnotherWalletForm: FC<Props> = () => {
  const theme = useCustomTheme();
  const [value, setValue] = useState('zora');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        gap: '10px',
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.backgroundColor,
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          alignItems: { xs: 'justify', lg: 'center' },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Inter-fw-500-fs-10'
          >
            Network
          </Box>
          <Box
            sx={{
              minWidth: '250px',
            }}
          >
            <CustomSelect options={networkOptions} value={value} onChange={setValue} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Inter-fw-500-fs-10'
          >
            Value
          </Box>
          <CustomInput />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Inter-fw-500-fs-10'
          >
            Address
          </Box>
          <CustomInput />
        </Box>
        <Button
          onClick={handleSubmit}
          sx={{
            alignSelf: 'flex-end',
            padding: '12px',
            background: theme.palette.btnSecondaryDefault,
            borderRadius: '10px',
            border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
            minWidth: '0',
            ':hover': {
              background: theme.palette.btnSecondaryHover,
            },
          }}
        >
          <PlusIcon fill={theme.palette.black} />
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <CustomTooltip title={<TooltipAnotherWallet />}>
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
        <Box
          sx={{
            color: theme.palette.white50,
          }}
          className='Body-Inter-fw-500-fs-14'
        >
          The amount will go to the deposit of this wallet in the Rubiscore system
        </Box>
      </Box>
    </Box>
  );
};
export default AnotherWalletForm;
