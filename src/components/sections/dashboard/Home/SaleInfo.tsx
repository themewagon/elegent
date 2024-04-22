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
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            height: 'min-content',
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
                padding: 0,
                ":last-child": {
                    paddingBottom: 0,
                }
            }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" component="p" color={theme => theme.palette.text.primary}>{title}</Typography>
                    <Typography variant="body2" component="p" color={theme => theme.palette.text.secondary}>May 2022</Typography>
                </Stack>
                <Typography variant="body1" component="p" color={theme => theme.palette.text.secondary}>${subtitle}</Typography>
                <Stack direction="row" alignItems="center" gap={1} color={theme.palette.primary.main}>
                    <IconifyIcon icon="ph:trend-up-fill" width="18px" height="18px" />
                    <Typography variant="body1">{`+${sales}%`} last month</Typography>
                </Stack>
            </CardContent>
        </Card>

    )
}

export default SaleInfo