import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import { appRoutes } from '@/constants/routes';
import Link from 'next/link';

const Section1 = () => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', xlg: '1fr 210px 170px 170px 210px' },
        gap: '20px',
        gridTemplateAreas: {
          xs: "'logo' 'community' 'learn' 'more' 'social'",
          sm: "'logo logo' 'community learn' 'more social'",
          xlg: "'logo community learn more social'",
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 0px 40px 0px',
      }}
    >
      <Box
        sx={{
          gridArea: 'logo',
          alignSelf: 'start',
        }}
      >
        <Image src='/asserts/logo.svg' alt='logo' width={261} height={40} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          gridArea: 'community',
          alignSelf: 'start',
        }}
      >
        {/*   <Box
          sx={{
            paddingBottom: '4px',
            color: theme.palette.white50,
            textTransform: 'uppercase',
          }}
          className='Body-Lato-fw-500-fs-12-h-24'
        >
          Community
        </Box>
        <CustomLink title='Community Hub' url={appRoutes.DASHBOARD} />
        <CustomLink title='Community Initiativies' url='#' />
        <CustomLink title='Governance Forum' url='#' />
        <CustomLink title='Merch Store' url='#' /> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          gridArea: 'learn',
          alignSelf: 'start',
        }}
      >
        {/*  <Box
          sx={{
            paddingBottom: '4px',
            color: theme.palette.white50,
            textTransform: 'uppercase',
          }}
          className='Body-Lato-fw-500-fs-12-h-24'
        >
          Learn
        </Box>
        <CustomLink title='Blog' url='#' />
        <CustomLink title='Manager Toolkit' url='#' />
        <CustomLink title='WTF is QF' url='#' />
        <CustomLink title='Support' url='#' /> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          gridArea: 'more',
          alignSelf: 'start',
        }}
      >
        {/*  <Box
          sx={{
            paddingBottom: '4px',
            color: theme.palette.white50,
            textTransform: 'uppercase',
          }}
          className='Body-Lato-fw-500-fs-12-h-24'
        >
          More
        </Box>
        <CustomLink title='Impact Report' url='#' />
        <CustomLink title='Press & Media' url='#' />
        <CustomLink title='Hackatons' url='#' />
        <CustomLink title='Bounties' url='#' /> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          gridArea: 'social',
          maxWidth: '210px',
          alignSelf: 'start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <Box
            sx={{
              color: theme.palette.white50,
              textTransform: 'uppercase',
            }}
            className='Body-Lato-fw-500-fs-12-h-24'
          >
            Follow
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <CustomSocialLink icon='/asserts/social/telegram.svg' url='https://t.me/RubinScore_ann' />
            <CustomSocialLink icon='/asserts/social/twitter.svg' url='https://twitter.com/rubyscore_io' />
            <CustomSocialLink
              icon='/asserts/social/linkedin.svg'
              url='https://www.linkedin.com/in/rubyscore'
            />
            <CustomSocialLink icon='/asserts/social/medium.svg' url='https://medium.com/@rubyscore.io' />
          </Box>
        </Box>
        <PrimaryButton variant='contained' size='large' fullWidth>
          Get Updates
        </PrimaryButton>
      </Box>
    </Box>
  );
};
export default Section1;

const CustomLink = ({ title, url }: { title: string; url: string }) => {
  const theme = useCustomTheme();
  return (
    <Link
      href={url}
      style={{
        textDecoration: 'none',
      }}
    >
      <Box className='menu-Lato-fw-500-fs-14' color={theme.palette.powderWhite}>
        {title}
      </Box>
    </Link>
  );
};
const CustomSocialLink = ({ icon, url }: { icon: string; url: string }) => {
  const theme = useCustomTheme();
  return (
    <Link
      href={url}
      target='_blank'
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '10px',
          background: theme.palette.white10,
        }}
      >
        <Image src={icon} alt='logo' width={24} height={24} />
      </Box>
    </Link>
  );
};
