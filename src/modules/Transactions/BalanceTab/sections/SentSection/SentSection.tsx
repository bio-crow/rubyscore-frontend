import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomSwitch from '@/components/common/ui/CustomSwitch/CustomSwitch';
import SecondaryButton from '@/components/common/ui/SecondaryButton/SecondaryButton';
import DownloadIcon from '@/components/common/Icons/DownloadIcon';
import PlusIcon from '@/components/common/Icons/PlusIcon';
import Disclamer from '@/modules/Transactions/BalanceTab/sections/SentSection/components/Disclamer';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import BalanceAndSentTable from '@/modules/Transactions/BalanceTab/sections/SentSection/components/BalanceAndSentTable/BalanceAndSentTable';
import { FC, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { BalanceAndSentFormContext } from '@/context/index';
import { BALANCE_AND_SEND_FIELDS } from '@/constants/formFields';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { balanceAndSendSchema, depositAnotherSchema } from '@/utils/validationConfig';
interface Props {
  tableData: any[];
}
const emptyFormObject = {
  id: 'id',
  [BALANCE_AND_SEND_FIELDS.MINUTE]: 1,
  [BALANCE_AND_SEND_FIELDS.HOUR]: 0,
  [BALANCE_AND_SEND_FIELDS.DAY]: 0,
  [BALANCE_AND_SEND_FIELDS.ADDRESS]: '',
  [BALANCE_AND_SEND_FIELDS.VALUE]: '',
  [BALANCE_AND_SEND_FIELDS.NETWORK]: 'scroll',
};
const SentSection: FC<Props> = ({ tableData }) => {
  const theme = useCustomTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    setError,
    clearErrors,
    trigger,
    getValues,
    control,
    reset,
  } = useForm({
    resolver: yupResolver<any>(balanceAndSendSchema),
    defaultValues: {
      array: [],
    },
    shouldUnregister: true,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'array',
    shouldUnregister: false,
  });
  const onSubmit = async (data: any) => {
    // console.log(data);
    //implement request logic
    remove();
    reset({
      array: [],
    });
  };
  const onError = (data: any) => {
    // console.log(data);
  };
  const addWallet = () => {
    append({ ...emptyFormObject, id: uuidv4() });
  };
  useEffect(() => {
    if (fields.length === 0) {
      reset({
        array: [],
      });
    }
  }, [fields]);
  return (
    <BalanceAndSentFormContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        setValue,
        setError,
        watch,
        clearErrors,
        trigger,
        getValues,
        control,
        reset,
        isValid,
        fields,
        append,
        removeArrayField: remove,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'unset', md: 'center' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '20px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='H2-Lato-fw-700-fs-24'
          >
            Sent
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'unset', md: 'center' },
              gap: '20px',
              flexDirection: { xs: 'column', md: 'row' },
              maxWidth: { xs: '300px', md: 'fit-content' },
              textWrap: 'nowrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <CustomSwitch />
              <Box
                sx={{
                  color: theme.palette.white50,
                }}
                className='Body-Lato-fw-500-fs-18'
              >
                Send instantly
              </Box>
            </Box>
            <FourthButton
              className='green'
              startIcon={<PlusIcon fill={theme.palette.lightGreen} />}
              variant='outlined'
              fullWidth
              size='medium'
              onClick={addWallet}
            >
              Add wallet
            </FourthButton>
            <FourthButton
              className='white'
              startIcon={<DownloadIcon fill={theme.palette.powderWhite} />}
              variant='outlined'
              fullWidth
              size='medium'
            >
              Export wallet
            </FourthButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <BalanceAndSentTable data={tableData} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Disclamer />
          <Box
            sx={{
              width: { xs: 'fit-content', xlg: '390px' },
            }}
          >
            <SecondaryButton variant='contained' size='large' type='submit' fullWidth>
              Confirm
            </SecondaryButton>
          </Box>
        </Box>
      </form>
    </BalanceAndSentFormContext.Provider>
  );
};
export default SentSection;
