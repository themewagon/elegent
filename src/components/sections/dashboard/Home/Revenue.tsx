import { Box } from "@mui/material"
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react"

const Revenue = () => {

    const option: EChartsOption = {
        title: {
            text: 'Revenue',
            textStyle: {
                fontSize: '20.25px',
                fontWeight: 500,
            }
        },
        xAxis: {
            type: 'category',
            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            boundaryGap: false,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#E1E1E1',
                    width: 1,
                    type: 'dashed',
                }
            },
            axisLabel: {
                show: true,
                padding: 30,
                color: '#6F757E',
                formatter: value => value.slice(0, 3),
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            max: 400,
            splitNumber: 3,
            axisLine: {
                show: false,
            },
            splitLine: {
                interval: 5,
                lineStyle: {
                    color: '#E1E1E1',
                    width: 1,
                    type: 'dashed',
                }
            }
        },
        grid: {
            backgroundColor: '#27D095',
            show: false
        },
        legend: {
            show: true,
            top: '2%',
            right: '2%',
            orient: 'horizontal',
            icon: 'pin'
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        series: [
            {
                data: [65, 210, 175, 140, 105, 20, 120, 20],
                type: 'line',
                smooth: true,
                color: '#27D095',
                name: 'Google ads',
                legendHoverLink: true,
                symbolSize: 12,
                lineStyle: {
                    width: 5
                },
            },
            {
                data: [20, 125, 100, 30, 150, 300, 90, 180],
                type: 'line',
                smooth: true,
                color: '#FF8E29',
                name: 'Facebook ads',
                legendHoverLink: true,
                symbolSize: 12,
                lineStyle: {
                    width: 5
                },
            },
        ],
    };

    return (
        <Box sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '20px',
            height: { xs: '460px', md: '100%', },
        }}>
            <EChartsReact option={option} style={{ height: '100%' }} />
        </Box>
    )
}

export default Revenue