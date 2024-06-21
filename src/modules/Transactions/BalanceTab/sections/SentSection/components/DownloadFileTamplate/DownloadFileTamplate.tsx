import { useCustomTheme } from '@/hooks/useCustomTheme';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import UploadIcon from '@/components/common/Icons/UploadIcon';
import Link from 'next/link';

const DownloadFileTemplate = () => {
  const theme = useCustomTheme();
  return (
    <Link href={'/static/template_import_rubyscore.xlsx'} target='_blank'>
      <FourthButton
        className='white'
        startIcon={<UploadIcon fill={theme.palette.powderWhite} />}
        variant='outlined'
        fullWidth
        size='medium'
      >
        Download file Template
      </FourthButton>
    </Link>
  );
};
export default DownloadFileTemplate;
