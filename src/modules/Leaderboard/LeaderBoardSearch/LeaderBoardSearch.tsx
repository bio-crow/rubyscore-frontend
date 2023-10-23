import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchWalletSchema } from '@/utils/validationConfig';
import LeaderBoardSearchForm from '@/modules/Leaderboard/LeaderBoardSearch/LeaderBoardSearchForm/LeaderBoardSearchForm';
import { SearchWalletFormContext } from '@/context/index';
import { searchUser } from '@/core/api/leaderboard.api';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { appRoutes } from '@/constants/routes';
interface Props {
  activeTab: any;
}
const LeaderBoardSearch: FC<Props> = ({ activeTab }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    resolver: yupResolver<any>(searchWalletSchema),
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    const result = await searchUser({
      wallet: data.wallet,
      project: activeTab.index,
    });
    if (result) {
      const wallet = result.data.result.user.profile.wallet;
      router.push(`${appRoutes.LEADERBOARD_USER}/${wallet}`);
    }
    setLoading(false);
  };
  const onError = (data: any) => {
    // console.log(data)
  };
  return (
    <SearchWalletFormContext.Provider
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
      }}
    >
      <LeaderBoardSearchForm onSubmit={onSubmit} onError={onError} isLoading={loading} />
    </SearchWalletFormContext.Provider>
  );
};
export default LeaderBoardSearch;
