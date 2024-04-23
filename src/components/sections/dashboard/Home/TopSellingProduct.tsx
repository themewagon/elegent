import { Box, Divider, Typography } from "@mui/material"
import { DataGrid, GridFooter } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import CustomPagination from "components/base/CustomPagination";
import { columns, rows as dataRows } from "data/tableData";
import { useEffect } from "react";

// import IconifyIcon from "components/base/IconifyIcon";
// import nikeV22 from "assets/topSellingProducts/nikeV22.jpg";
// import instaxCamera from "assets/topSellingProducts/instaxCamera.jpg";
// import relaxingChair from "assets/topSellingProducts/relaxingChair.jpg";
// import laptop from "assets/topSellingProducts/laptop.jpg";
// import watch from "assets/topSellingProducts/watch.jpg";
// import iphone12 from "assets/topSellingProducts/iphone12.png";
// import xerryPerfume from "assets/topSellingProducts/xerryPerfume.png";

const TopSellingProduct = () => {
    
    const { data } = useDemoData({
        dataSet: 'Employee',
        rowLength: 100,
        maxColumns: 6,
    });

    useEffect(() => {
        console.log(data);
        console.log(dataRows);
    }, [data])

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: '#FFF',
        }}>
            <Typography variant="subtitle1" color={theme => theme.palette.text.primary} padding="30px">
                Top Selling Product
            </Typography>
            <Divider sx={{ borderColor: "#E1E1E1", }}/>
            <Box sx={{
                height: '100%',
                "& .MuiDataGrid-root": {
                    backgroundColor: '#FFF',
                    border: 'none',
                    height: '100%',
                },
                "& .MuiDataGrid-container--top [role='row']": {
                    // backgroundColor: '#FFF',
                },
                "& .MuiDataGrid-columnHeaderRow": {
                    backgroundColor: '#FFF',
                },
                "& .MuiDataGrid-topContainer::after" : {
                    content: 'none',
                },
                "& .MuiDataGrid-columnHeaders" : {
                    borderBottom: 'none',
                    backgroundColor: "#FFF !important",
                },
                '& .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },
                '& .MuiDataGrid-cell': {
                    border: "none",
                    color: theme => theme.palette.text.secondary, 
                },
                "& .MuiDataGrid-row": {
                    border: 'none',
                },
                '& .MuiDataGrid-withBorderColor': {
                    borderColor: 'transparent',
                },
                '& .MuiDataGrid-footerContainer': {
                    minHeight: '100px',
                    // padding: 0,
                },
                '& .MuiDataGrid-filler': {
                    height: 'auto',
                    flex: 1,
                },
                '& .MuiDataGrid-virtualScrollerContent': {
                    height: '100%',
                },
            }}>
                <DataGrid
                    pagination={true}
                    disableRowSelectionOnClick
                    slots={{
                        pagination: CustomPagination,
                        footer: GridFooter,
                    }}
                    // {...data}
                    density="comfortable"
                    columns={columns}
                    rows={dataRows}
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 30 }, },
                    }}
                    // autosizeOnMount
                    // autosizeOptions={{
                        
                    // }}
                    sx={{
                        
                    }}
                />
            </Box>
        </Box>
    );
}

export default TopSellingProduct