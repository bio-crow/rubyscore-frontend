import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';
import * as yup from 'yup';
export const claimProfileSchema = yup.object().shape({
  [CLAIM_PROFILE_FIELDS.NAME]: yup
    .string()
    .trim()
    .required('Please enter your user name')
    .min(3, 'Min name length is 3'),
});
