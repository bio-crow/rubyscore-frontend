import { gridPageCountSelector, gridPageSelector, useGridApiContext } from '@mui/x-data-grid';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const count = gridPageCountSelector(apiRef);
  const page = gridPageSelector(apiRef) + 1;
  return (
    <PrimaryPagination
      page={page}
      count={count}
      variant='outlined'
      shape='rounded'
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};
export default CustomPagination;
