import { Card, CardContent, CardMedia, Typography } from "@mui/material"


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
            alignItems: 'center',
            gap: '10px',
            // maxWidth: '260px',
            height: '110px',
            borderRadius: '20px',
        }}>
            <CardMedia
                component="img"
                image={`${image}`}
                sx={{
                    width: '70px',
                    height: '70px',
                }}
            />
            <CardContent>
                <Typography variant="subtitle1" component="p">{title}</Typography>
                <Typography variant="body1" component="p">{subtitle}</Typography>
                <Typography variant="body1" component="p">{`${sales}%`}</Typography>
            </CardContent>
        </Card>

    )
}

export default SaleInfo