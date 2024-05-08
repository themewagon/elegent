import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import { theme } from 'theme/theme';

type SaleInfoProps = {
  image?: string;
  title: string;
  subtitle: string;
  sales: number;
};

const SaleInfo = ({ image, title, subtitle, sales }: SaleInfoProps) => {
  return (
    <Card
      sx={{
        boxShadow: theme.shadows[4],
      }}
    >
      <CardMedia
        sx={{
          maxWidth: theme.spacing(8.75),
          maxHeight: theme.spacing(8.75),
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
          <Typography
            variant="subtitle1"
            component="p"
            color={(theme) => theme.palette.text.primary}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color={(theme) => theme.palette.text.secondary}
            fontFamily={theme.typography.fontFamily?.split(',')[1]}
          >
            May 2022
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          component="p"
          color={(theme) => theme.palette.text.secondary}
          fontFamily={theme.typography.fontFamily?.split(',')[1]}
        >
          ${subtitle}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1} color={theme.palette.primary.main}>
          <IconifyIcon
            icon="ph:trend-up-fill"
            width={theme.spacing(2.25)}
            height={theme.spacing(2.25)}
          />
          <Typography variant="body1" fontFamily={theme.typography.fontFamily?.split(',')[1]}>
            {`+${sales}%`} last month
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SaleInfo;
