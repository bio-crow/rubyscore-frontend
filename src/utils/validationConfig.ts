import {
  BALANCE_AND_SEND_FIELDS,
  CLAIM_PROFILE_FIELDS,
  DEPOSIT_ANOTHER_FIELDS,
  DEPOSIT_SINGLE_FIELDS,
  SEARCH_WALLET_FIELD,
} from '@/constants/formFields';
import * as yup from 'yup';
export const claimProfileSchema = yup.object().shape({
  [CLAIM_PROFILE_FIELDS.NAME]: yup
    .string()
    .trim()
    .required('Please enter your user name')
    .min(3, 'Min name length is 3'),
});
export const depositSingleSchema = yup.object().shape({
  [DEPOSIT_SINGLE_FIELDS.VALUE]: yup.number().required('Please enter value').typeError('Please enter number'),
  [DEPOSIT_SINGLE_FIELDS.NETWORK]: yup.string().trim().required('Please choose network'),
});
export const depositAnotherSchema = yup.object().shape({
  [DEPOSIT_ANOTHER_FIELDS.VALUE]: yup
    .number()
    .required('Please enter value')
    .typeError('Please enter number'),
  [DEPOSIT_ANOTHER_FIELDS.ADDRESS]: yup.string().trim().required('Please enter address'),
  [DEPOSIT_ANOTHER_FIELDS.NETWORK]: yup.string().trim().required('Please choose network'),
});
export const searchWalletSchema = yup.object().shape({
  [SEARCH_WALLET_FIELD.WALLET]: yup.string().trim(),
});
export const balanceAndSendSchema = yup.object().shape({
  array: yup.array().of(
    yup.object({
      [BALANCE_AND_SEND_FIELDS.VALUE]: yup
        .number()
        .required('Please enter value')
        .typeError('Please enter number'),
      [BALANCE_AND_SEND_FIELDS.ADDRESS]: yup.string().trim().required('Please enter address'),
      [BALANCE_AND_SEND_FIELDS.NETWORK]: yup.string().trim().required('Please choose network'),
      [BALANCE_AND_SEND_FIELDS.MINUTE]: yup
        .number()
        .required('required m')
        .typeError('invalid m')
        .max(59, 'max 59'),
      [BALANCE_AND_SEND_FIELDS.HOUR]: yup
        .number()
        .required('required h')
        .typeError('invalid h')
        .max(23, 'max 23'),
      [BALANCE_AND_SEND_FIELDS.DAY]: yup
        .number()
        .required('required d')
        .typeError('invalid d')
        .max(7, 'max 7'),
    })
  ),
});
