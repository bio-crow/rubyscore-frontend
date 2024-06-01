import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomSwitch from '@/components/common/ui/CustomSwitch/CustomSwitch';
import { FC, useState } from 'react';
import SingleWalletForm from '@/modules/Transactions/BalanceTab/sections/DepositSection/SingleWalletForm/SingleWalletForm';
import AnotherWalletForm from '@/modules/Transactions/BalanceTab/sections/DepositSection/AnotherWalletForm/AnotherWalletForm';

interface Props {}
const DepositSection: FC<Props> = () => {
  const theme = useCustomTheme();
  const [sendToAnotherWallet, setSendToAnotherWallet] = useState(false);
  const handeChange = e => {
    setSendToAnotherWallet(e.target.checked);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: { xs: '100%', lg: 'fit-content' },
        maxWidth: { xs: '500px', lg: 'unset' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='H2-Lato-fw-700-fs-24'
        >
          Deposit
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <CustomSwitch value={sendToAnotherWallet} onChange={handeChange} />
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-500-fs-18'
          >
            Send to another address
          </Box>
        </Box>
      </Box>
      {sendToAnotherWallet ? <AnotherWalletForm /> : <SingleWalletForm />}
    </Box>
  );
};
export default DepositSection;
