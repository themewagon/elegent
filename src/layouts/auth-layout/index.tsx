import { Box } from "@mui/material"
import { PropsWithChildren } from "react"

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: theme => theme.palette.background.default }}>
            { children }
        </Box>
    )
}

export default AuthLayout