import { Box, Divider, Typography } from "@mui/material"
import { DataGrid, GridFooter } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import CustomPagination from "components/base/CustomPagination";
import { columns, rows as dataRows } from "data/tableData";

// import IconifyIcon from "components/base/IconifyIcon";
// import nikeV22 from "assets/topSellingProducts/nikeV22.jpg";
// import instaxCamera from "assets/topSellingProducts/instaxCamera.jpg";
// import relaxingChair from "assets/topSellingProducts/relaxingChair.jpg";
// import laptop from "assets/topSellingProducts/laptop.jpg";
// import watch from "assets/topSellingProducts/watch.jpg";
// import iphone12 from "assets/topSellingProducts/iphone12.png";
// import xerryPerfume from "assets/topSellingProducts/xerryPerfume.png";

interface Data {
    id: number;
    product: string;
    orders: number;
    price: number;
    adsSpent: number;
    refunds: number;
}

function createData(
    id: number,
    product: string,
    orders: number,
    price: number,
    adsSpent: number,
    refunds: number,
): Data {
    return {
        id,
        product,
        orders,
        price,
        adsSpent,
        refunds,
    };
}


const rows = [
    createData(1, 'Nike v22 Shoes', 8000, 130, 95, 13),
    createData(2, 'Instax Digital Camera', 3000, 45, 45, 18),
    createData(3, 'Relaxing Chair ', 6000, 80, 58, 11),
    createData(4, 'Macbook pro 13 Laptop', 4000, 1500, 47, 18),
    createData(5, 'Digital Watch', 2000, 150, 25, 10),
    createData(6, 'Iphone 13', 2500, 1100, 87, 15),
    createData(7, 'Xerry Perfume', 1200, 85, 37, 4.3),
];

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'product',
        numeric: false,
        disablePadding: true,
        label: 'Product',
    },
    {
        id: 'orders',
        numeric: true,
        disablePadding: false,
        label: 'Orders',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'adsSpent',
        numeric: true,
        disablePadding: false,
        label: 'Ads spent',
    },
    {
        id: 'refunds',
        numeric: true,
        disablePadding: false,
        label: 'Refunds',
    },
];

const TopSellingProduct = () => {
    
    const { data } = useDemoData({
        dataSet: 'Employee',
        rowLength: 100,
        maxColumns: 6,
    })
    console.log(data);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: '#FFF',
        }}>
            <Typography variant="subtitle1" color={theme => theme.palette.text.primary} padding="30px">Top Selling Product</Typography>
            <Divider sx={{ borderColor: "#E1E1E1", }}/>
            <Box sx={{
                height: '100%',
            }}>
                <DataGrid
                    pagination={true}
                    disableRowSelectionOnClick
                    slots={{
                        pagination: CustomPagination,
                        // toolbar: GridToolbar,
                        footer: GridFooter,
                    }}
                    // {...data}
                    columns={columns}
                    rows={dataRows}
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 30 }, },
                    }}
                    sx={{
                        "&.MuiDataGrid-root": {
                            backgroundColor: '#FFF',
                            border: 'none',
                            height: '100%',
                        },
                        ".MuiDataGrid-topContainer::after" : {
                            content: 'none',
                        },
                        ".MuiDataGrid-columnHeaders" : {
                            borderBottom: 'none',
                        },
                        '&.MuiDataGrid-columnSeparator': {
                            display: 'none',
                        },
                        '.MuiDataGrid-cell': {
                            border: "none",
                            color: theme => theme.palette.text.secondary, 
                        },
                        '&.MuiDataGrid-withBorderColor': {
                            borderColor: 'transparent',
                        },
                        '.MuiDataGrid-row': {
                            borderBottom: 'none',
                        }, 
                        '.MuiDataGrid-footerContainer': {
                            minHeight: '100px',
                        },
                        '.MuiDataGrid-filler': {
                            height: 0,
                        },
                        '.MuiDataGrid-virtualScrollerContent': {
                            height: '100%',
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default TopSellingProduct