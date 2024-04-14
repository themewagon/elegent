import { AppBar, Avatar, Box, CssBaseline, Drawer, Grid, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, TextField, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react"
import IconifyIcon from "components/base/IconifyIcon";
import profile from "assets/profile/profile.jpg";


export const drawerWidth = 218;

const MainLayout = ({ children }: PropsWithChildren) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <Box sx={{
            backgroundColor: 'white',
            height: '100%',
            margin: '30px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            
            <List>
                {['Home', 'Pages', 'Applications', 'Ecommerce', 'Authentication', 'Notification', 'Calendar', 'Message'].map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <IconButton sx={{ 
                borderRadius: '8px',
                width: '82%',
                mx: 'auto',
                fontSize: theme => theme.typography.subtitle1,
                color: theme => theme.palette.primary.main,
            }}>
                <IconifyIcon icon="ri:logout-circle-line" /> Logout
            </IconButton>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: theme => theme.palette.background.default }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: theme => theme.palette.background.default,
                    boxShadow: 0,
                }}
            >
                <Toolbar sx={{
                    pt: '30px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <IconifyIcon icon="mdi:menu" />
                    </IconButton>
                    <Box sx={{ 
                        display: 'flex',
                        gap: 4,
                        alignItems: 'center'
                    }}>
                        <Typography variant="h5" noWrap component="h5">
                            Dashboard
                        </Typography>
                        <TextField label="Search..." InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconifyIcon icon="mdi:search" />
                                </InputAdornment>
                            ),
                        }} />
                    </Box>
                    <Box sx={{ 
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'center'
                    }}>
                        <Avatar alt="Remy Sharp" src={profile} />
                        <Typography variant="body1" component="p">Aiden Max</Typography>
                        <IconifyIcon icon="mingcute:down-fill" width="24px" height="24px" />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: 'wheat' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 0, backgroundColor: theme => theme.palette.background.default },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 0, backgroundColor: theme => theme.palette.background.default },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* <Box
                component="main"
                sx={{ display: 'grid', gridTemplateColumns: "repeat(12, 1fr)", gap: '30px', flexGrow: 1, p: 3, mt: '90px', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            > */}
                {/* <Toolbar /> */}
                <Grid container component="main" columns={12} columnSpacing={3.75} flexGrow={1} p={3} mt='85.125px' sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    
                }}>
                {children}
                </Grid>
            {/* </Box> */}
        </Box>
    );
}


export default MainLayout