import { CLAIM_PROFILE_FIELDS, SEARCH_WALLET_FIELD } from '@/constants/formFields';
import * as yup from 'yup';
export const claimProfileSchema = yup.object().shape({
  [CLAIM_PROFILE_FIELDS.NAME]: yup
    .string()
    .trim()
    .required('Please enter your user name')
    .min(3, 'Min name length is 3'),
});
export const searchWalletSchema = yup.object().shape({
  [SEARCH_WALLET_FIELD.WALLET]: yup.string().trim(),
});
