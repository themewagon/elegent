import { Box } from "@mui/material";
import EChartsReact from "echarts-for-react";

const BuyersProfile = () => {

    const option = {
        title: {
            text: 'Buyers Profile',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            icon: 'pin',
            orient: 'vertical',
            bottom: '50%',
            right: '2%'
        },
        series: [
            {
                name: 'Buyers Profile',
                type: 'pie',
                radius: ['60%', '70%'],
                color: ['#FF8E29', '#27D095', '#F54F5F'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 50, name: 'Male', color: '#FF8E29', },
                    { value: 35, name: 'Female', color: '#27D095', },
                    { value: 15, name: 'Others', color: '#F54F5F', },
                ]
            }
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

export default BuyersProfile