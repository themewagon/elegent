import { PaginationItem, TablePaginationProps, Typography } from '@mui/material';
import {
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { theme } from 'theme/theme';

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
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
            previous: () => (
              <Typography variant="body1" fontFamily={theme.typography.fontFamily?.split(',')[1]}>
                Prev
              </Typography>
            ),
            next: () => (
              <Typography variant="body1" fontFamily={theme.typography.fontFamily?.split(',')[1]}>
                Next
              </Typography>
            ),
          }}
          sx={{
            '&.Mui-selected': {
              color: theme.palette.common.white,
            },
            '&.Mui-disabled': {
              color: theme.palette.text.secondary,
            },
          }}
        />
      )}
    />
  );
}

export default function CustomPagination(props: object) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}
