import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useContext, useEffect } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { SearchWalletFormContext } from '@/context/index';
import { FormInputText } from '@/components/common/fields/InputField';
import { SEARCH_WALLET_FIELD } from '@/constants/formFields';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@/components/common/Icons/SearchIcon';
import { useAppSelector } from '@/core/store';

interface Props {
  onSubmit: Function;
  onError: Function;
  isLoading: boolean;
}

const LeaderBoardSearchForm: FC<Props> = ({ onSubmit, onError, isLoading }) => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const { control, handleSubmit, errors, setValue } = useContext(SearchWalletFormContext);
  const filteredUser = useAppSelector(state => state.leaderboardState.filteredUser);
  useEffect(() => {
    setValue(SEARCH_WALLET_FIELD.WALLET, filteredUser?.wallet);
  }, [filteredUser]);
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: isSm ? 'row' : 'column',
        alignItems: isSm ? 'center' : 'unset',
        padding: '32px 0px 20px 0px',
        width: '100%',
        gap: '20px',
      }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormInputText
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon fill={theme.palette.white50} />
            </InputAdornment>
          ),
        }}
        name={SEARCH_WALLET_FIELD.WALLET}
        control={control}
        placeholder='Search wallet'
      />
      <PrimaryButton
        variant='contained'
        size='large'
        loading={isLoading}
        fullWidth={!isSm}
        type='submit'
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        Search
      </PrimaryButton>
    </form>
  );
};
export default LeaderBoardSearchForm;
