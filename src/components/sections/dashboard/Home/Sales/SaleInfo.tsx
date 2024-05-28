import { ReactElement } from 'react';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import { useBreakpoints } from 'providers/BreakpointsProvider';

type SaleInfoProps = {
  image?: string;
  title: string;
  subtitle: string;
  sales: number;
  date?: boolean;
};

const SaleInfo = ({ image, title, subtitle, sales, date }: SaleInfoProps): ReactElement => {
  const { between } = useBreakpoints();

  return (
    <Card
      sx={(theme) => ({
        boxShadow: theme.shadows[4],
        flexDirection: between('md', 'lg') ? 'column' : 'row',
        alignItems: between('md', 'lg') ? 'flex-start' : 'center',
      })}
    >
      <CardMedia
        sx={{
          maxWidth: 70,
          maxHeight: 70,
        }}
      >
        <Image src={`${image}`} width={1} height={1} />
      </CardMedia>
      <CardContent
        sx={{
          flex: '1 1 auto',
          padding: 0,
          ':last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" component="p" minWidth={100} color="text.primary">
            {title}
          </Typography>
          {date && (
            <Typography variant="body2" component="p" color="text.secondary">
              May 2022
            </Typography>
          )}
        </Stack>
        <Typography variant="body1" component="p" color="text.secondary">
          ${subtitle}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          minWidth={150}
          color={(theme) => theme.palette.primary.main}
        >
          <IconifyIcon icon="ph:trend-up-fill" width={18} height={18} />
          <Typography variant="body1">{`+${sales}%`} last month</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SaleInfo;
