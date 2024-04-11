import { useAppSelector } from '@/core/store';
import { achievementCardKeys, prepareUserGradationToAchievementsCards } from '@/utils/helpers';
import { Box } from '@mui/material';

interface AchievementCardRowProps {
  achievementKey: string;
  value?: string;
  isSubAchievementKey?: boolean;
}

const AchievementCardRow = ({ achievementKey, value, isSubAchievementKey }: AchievementCardRowProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <p
        className='share-card-Montserrat-Alt-fw-600-fs-10'
        style={{
          margin: 0,
          paddingLeft: isSubAchievementKey ? '30px' : '0px',
          opacity: isSubAchievementKey ? '0.6' : '1',
        }}
      >
        {achievementKey}
      </p>
      {value && (
        <p
          className='share-card-Montserrat-Alt-fw-600-fs-10'
          style={{
            margin: 0,
            textAlign: 'left',
            color: '#92FE9D',
            fontWeight: '700',
            minWidth: '50px',
          }}
        >
          {value}
        </p>
      )}
    </Box>
  );
};

const AchievementCard = () => {
  const userGradation = useAppSelector(state => state.dashboardState.userGradation);
  const preparedUserGradation = userGradation && prepareUserGradationToAchievementsCards(userGradation);
  const userTransactionsGradation = preparedUserGradation?.slice(1, 5);
  const restGradations = preparedUserGradation?.slice(5, 9);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '20px',
        position: 'relative',
        border: '1px solid #92FE9D',
        borderRadius: '10px',
        flexDirection: 'column',
        flex: '1 0 50%',
      }}
    >
      {preparedUserGradation && userTransactionsGradation && (
        <>
          <AchievementCardRow
            achievementKey={achievementCardKeys[0]}
            value={preparedUserGradation[0].value}
          />
          <AchievementCardRow achievementKey={achievementCardKeys[1]} />
          {userTransactionsGradation.map((data, index) => (
            <AchievementCardRow
              achievementKey={achievementCardKeys[index + 2]}
              key={data.key}
              isSubAchievementKey
              value={`${data.value} ${data.currency}`}
            />
          ))}
          {restGradations?.map((data, index) => (
            <AchievementCardRow
              key={data.key}
              achievementKey={achievementCardKeys[index + 6]}
              value={`${data.value} ${data.currency}`}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default AchievementCard;
