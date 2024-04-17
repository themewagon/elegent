import { Box, Divider, Stack, Typography } from "@mui/material";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react"

const WebsiteVisitors = () => {

    const options: EChartsOption = {
        tooltip: {
            trigger: 'item',
            // formatter: `{a} <br/> {b}: {d}%`,
        },
        series: [
            {
                name: 'Website Visitors',
                type: 'pie',
                radius: ['65%', '80%'],
                avoidLabelOverlap: true,
                startAngle: 0,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                color: ['#FF8E29', '#27D095', '#67CADF', '#F54F5F'],
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold',
                        formatter: `{b}`,
                    },
                    
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 7740, name: 'Direct' },
                    { value: 4860, name: 'Organic' },
                    { value: 2880, name: 'Paid' },
                    { value: 5940, name: 'Social' },
                ],
            },
        ],
    };

    return (
        <Box sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
            height: 'min-content',
        }}>
            <Typography variant="subtitle1" color={theme => theme.palette.text.primary} padding="20px">Website Visitors</Typography>
            <EChartsReact option={options} />
            <Stack direction="column" spacing={1} divider={<Divider />} sx={{ padding: '20px'}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" color={theme => theme.palette.text.secondary} sx={{ display: 'flex', alignItems: 'baseline', gap: '10px'}}><Box sx={{ width: '10px', height: '10px', backgroundColor: '#FF8E29', borderRadius: '50%'}}></Box> Direct</Typography>
                    <Typography variant="body1" color={theme => theme.palette.text.primary}>43%</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" color={theme => theme.palette.text.secondary} sx={{ display: 'flex', alignItems: 'baseline', gap: '10px'}}><Box sx={{ width: '10px', height: '10px', backgroundColor: '#27D095', borderRadius: '50%'}}></Box> Organic</Typography>
                    <Typography variant="body1" color={theme => theme.palette.text.primary}>27%</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" color={theme => theme.palette.text.secondary} sx={{ display: 'flex', alignItems: 'baseline', gap: '10px'}}><Box sx={{ width: '10px', height: '10px', backgroundColor: '#67CADF', borderRadius: '50%'}}></Box> Paid</Typography>
                    <Typography variant="body1" color={theme => theme.palette.text.primary}>16%</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1" color={theme => theme.palette.text.secondary} sx={{ display: 'flex', alignItems: 'baseline', gap: '10px'}}><Box sx={{ width: '10px', height: '10px', backgroundColor: '#F54F5F', borderRadius: '50%'}}></Box> Social</Typography>
                    <Typography variant="body1" color={theme => theme.palette.text.primary}>33%</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WebsiteVisitors