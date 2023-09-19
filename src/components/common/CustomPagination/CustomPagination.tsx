import { Pagination } from '@mui/material';
import { gridPageCountSelector, gridPageSelector, useGridApiContext } from '@mui/x-data-grid';

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const count = gridPageCountSelector(apiRef);
  const page = gridPageSelector(apiRef) + 1;
  return (
    <Pagination
      showFirstButton
      showLastButton
      page={page}
      count={count}
      variant='outlined'
      shape='rounded'
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};
export default CustomPagination;
