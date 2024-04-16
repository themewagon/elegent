import { Box } from "@mui/material"
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react"

const Revenue = () => {

    const option: EChartsOption = {
        title: {
            text: 'Revenue',
        },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            axisTick: {
                show: true,
            }
        },
        yAxis: {
            type: 'value'
        },
        grid: {
            backgroundColor: '#27D095',
            show: false,
        },
        legend: {
            show: true,
            top: '2%',
            right: '2%',
            orient: 'horizontal',
        },
        tooltip: {
            show: true,
            trigger: 'axis',
        },
        series: [
            {
                data: [65, 210, 175, 140, 105, 20, 120, 20],
                type: 'line',
                smooth: true,
                color: '#27D095',
                name: 'Google ads',
                legendHoverLink: true,
                label: {
                    
                }
            },
            {
                data: [0, 125, 100, 30, 150, 300, 90, 180],
                type: 'line',
                smooth: true,
                color: '#FF8E29',
                name: 'Facebook ads',
                legendHoverLink: true,
            },
        ]
    };

    return (
        <Box sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
        }}>
            <EChartsReact option={option} />
        </Box>
    )
}

export default Revenue