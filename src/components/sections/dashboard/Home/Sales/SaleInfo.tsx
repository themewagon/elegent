import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

type SaleInfoProps = {
  image?: string;
  title: string;
  subtitle: string;
  sales: number;
  date?: boolean;
};

const SaleInfo = ({ image, title, subtitle, sales, date }: SaleInfoProps): React.ReactElement => {
  const theme = useTheme();
  const betweenMdAndLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  return (
    <Card
      sx={(theme) => ({
        boxShadow: theme.shadows[4],
        flexDirection: betweenMdAndLg ? 'column' : 'row',
        alignItems: betweenMdAndLg ? 'flex-start' : 'center',
      })}
    >
      <CardMedia
        sx={(theme) => ({
          maxWidth: theme.spacing(8.75),
          maxHeight: theme.spacing(8.75),
        })}
      >
        <Image src={`${image}`} width={1} height={1} />
      </CardMedia>
      <CardContent
        sx={{
          flex: '1 1 auto',
          // width: 1,
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
          {date && (
            <Typography
              variant="body2"
              component="p"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              May 2022
            </Typography>
          )}
        </Stack>
        <Typography
          variant="body1"
          component="p"
          color={(theme) => theme.palette.text.secondary}
          fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
        >
          ${subtitle}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          color={(theme) => theme.palette.primary.main}
        >
          <IconifyIcon
            icon="ph:trend-up-fill"
            width={(theme) => theme.spacing(2.25)}
            height={(theme) => theme.spacing(2.25)}
          />
          <Typography
            variant="body1"
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            {`+${sales}%`} last month
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SaleInfo;
