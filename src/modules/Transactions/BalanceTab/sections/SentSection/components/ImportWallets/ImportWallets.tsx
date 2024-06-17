import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import FourthButton from '@/components/common/ui/FourthButton/FourthButton';
import DownloadIcon from '@/components/common/Icons/DownloadIcon';
import { useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { parseExcelToJson } from '@/utils/helpers';
import { BalanceAndSentFormContext } from '@/context/index';
import { v4 as uuidv4 } from 'uuid';

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const ImportWallets = () => {
  const theme = useCustomTheme();
  const { append } = useContext(BalanceAndSentFormContext);
  const fileRef = useRef<any>(null);
  const onFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file.type === fileType) {
      const { rows, errors } = await parseExcelToJson(e.target.files[0]);
      if (errors.length > 0) {
        toast('Incorrect file template', { position: 'top-right' });
      }
      if (fileRef?.current) {
        fileRef.current.value = null;
      }
      setFileDataToForm(rows);
    } else {
      toast('File format is not allowed', { position: 'top-right' });
    }
  };
  const uploadFile = (e: any) => {
    if (fileRef?.current) {
      fileRef.current.click();
    }
  };
  const setFileDataToForm = (data: object[]) => {
    data.forEach(item => {
      append({ ...item, id: uuidv4() });
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <FourthButton
        className='white'
        startIcon={<DownloadIcon fill={theme.palette.powderWhite} />}
        variant='outlined'
        fullWidth
        size='medium'
        onClick={uploadFile}
      >
        Import wallet
      </FourthButton>
      <Box
        sx={{
          display: 'flex',
          width: '0px',
          height: '0px',
          overflow: 'hidden',
          visibility: 'hidden',
        }}
      >
        <input accept={fileType} type='file' onInput={onFileUpload} ref={fileRef} />
      </Box>
    </Box>
  );
};
export default ImportWallets;
