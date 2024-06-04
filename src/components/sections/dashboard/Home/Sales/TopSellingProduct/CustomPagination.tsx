import { Button, PaginationItem, TablePaginationProps } from '@mui/material';
import {
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className' | 'ref'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => onPageChange(event as any, newPage - 1)}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          slots={{
            previous: () => <Button variant="text">Prev</Button>,
            next: () => <Button variant="text">Next</Button>,
          }}
          sx={(theme) => ({
            '&.Mui-selected': {
              color: theme.palette.common.white,
            },
            '&.Mui-disabled': {
              color: theme.palette.text.secondary,
            },
          })}
        />
      )}
    />
  );
}

export default function CustomPagination(props: object) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}
