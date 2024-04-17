import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import IconifyIcon from "components/base/IconifyIcon"
import { theme } from "theme/theme"


type SaleInfoProps = {
    image?: string,
    title: string, 
    subtitle: string,
    sales: number
}

const SaleInfo = ({ image, title, subtitle, sales }: SaleInfoProps) => {
    return (
        <Card sx={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            height: '110px',
            borderRadius: '20px',
            boxShadow: '0px 0px 4px 0px #FF8E291A',
        }}>
            <CardMedia
                component="img"
                image={`${image}`}
                sx={{
                    width: '70px',
                    height: '70px',
                }}
            />
            <CardContent sx={{
                flex: '1 1 auto',
            }}>
                <Typography variant="subtitle1" component="p" color={theme => theme.palette.text.primary}>{title}</Typography>
                <Typography variant="body1" component="p" color={theme => theme.palette.text.secondary}>${subtitle}</Typography>
                <Stack direction="row" alignItems="center" gap={1} color={theme.palette.primary.main}>
                    <IconifyIcon icon="ph:trend-up-fill" width="18px" height="18px" />
                    <Typography variant="body1">{`+${sales}%`} last month</Typography>
                </Stack>
            </CardContent>
            <CardContent sx={{
                alignSelf: 'flex-start',
                pt: 0,
            }}>
                <Typography variant="body2" component="p" color={theme => theme.palette.text.secondary}>May 2022</Typography>
            </CardContent>
        </Card>

    )
}

export default SaleInfo