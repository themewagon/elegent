import { Box, CircularProgress } from "@mui/material"

const PageLoader = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color="secondary" />
        </Box>
    )
}

export default PageLoader