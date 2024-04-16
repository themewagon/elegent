import { Box } from "@mui/material";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react"

const WebsiteVisitors = () => {

    const options: EChartsOption = {
        title: {
            text: 'Website Visitors',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            icon: '',
            bottom: '1%',
            left: 'center',
            orient: 'vertical',
            lineStyle: {
                color: '#E1E1E1',
            },
            formatter: name => {
                return `${name}`;
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
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
                ]
            }
        ]
    };

    return (
        <Box sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
        }}>
            <EChartsReact option={options} />
            {/* <Stack direction="column">

            </Stack> */}
        </Box>
    )
}

export default WebsiteVisitors