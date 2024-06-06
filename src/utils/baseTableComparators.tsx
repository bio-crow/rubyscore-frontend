import { GridComparatorFn } from '@mui/x-data-grid';

export const dateComparator = (v1: any, v2: any) => new Date(v1).getTime() - new Date(v2).getTime();

export const numberComparator = (v1: any, v2: any) => v1 - v2;

export const stringComparator = (v1: any, v2: any) => v1.localeCompare(v2);
