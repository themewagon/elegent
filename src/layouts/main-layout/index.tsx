import { AppBar, Avatar, Box, Button, CssBaseline, Drawer, Grid, IconButton, InputAdornment, List, ListItem, ListItemButton, OutlinedInput, Stack, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren, forwardRef, useState } from "react"
import IconifyIcon from "components/base/IconifyIcon";
import profile from "assets/profile/profile.jpg";
import logo from "assets/logo/elegant-logo.png";
import { Link as Nav, useLocation } from "react-router-dom";
import { theme } from "theme/theme";


export const drawerWidth = 258;

const navItems = [
    {
        title: 'Home',
        path: '/',
        icon: <IconifyIcon icon="ion:home-sharp" />,
    },
    {
        title: 'Pages',
        path: 'pages',
        icon: <IconifyIcon icon="icomoon-free:drawer" />,
    },
    {
        title: 'Applications',
        path: 'applications',
        icon: <IconifyIcon icon="mingcute:grid-fill" />,
    },
    {
        title: 'Ecommerce',
        path: 'ecommerce',
        icon: <IconifyIcon icon="tabler:shopping-bag" />,
    },
    {
        title: 'Authentication',
        path: 'authentication/login',
        icon: <IconifyIcon icon="f7:exclamationmark-shield-fill" />,
    },
    {
        title: 'Notification',
        path: 'notifications',
        icon: <IconifyIcon icon="zondicons:notifications" />,
    },
    {
        title: 'Calendar',
        path: 'calendar',
        icon: <IconifyIcon icon="ph:calendar" />,
    },
    {
        title: 'Message',
        path: 'messages',
        icon: <IconifyIcon icon="ph:chat-circle-dots-fill" />,
    },
];

const MainLayout = ({ children }: PropsWithChildren) => {

    const { pathname } = useLocation();
    
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

    

    const RouterLink = forwardRef(({ href, ...other }: {
        href: string
    }) => <Nav to={href} {...other} />);

    const drawer = (
        <Box sx={{
            backgroundColor: 'white',
            height: '100%',
            overflowY: 'overlay',
            margin: { sm: '30px'},
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            scrollbarWidth: 'none',
        }}>
            <Box component="img" src={logo} sx={{
                    marginTop: '50px',
                    mx: '40px',
            }}/>
            <List sx={{
                mx: 'auto',
                flex: '1 1 auto'
            }}>
                {navItems.map((navItem, index) => (
                    <ListItem key={index} disablePadding sx={{
                        my: '20px',
                    }}>
                        <ListItemButton LinkComponent={RouterLink} href={navItem.path} sx={{
                            backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
                            // backgroundColor: theme.palette.primary.main,
                            color: pathname === navItem.path ? '#FFF' : theme.palette.text.secondary,
                            // color: theme.palette.text.secondary,
                            ":hover": {
                                backgroundColor: pathname === navItem.path ? theme.palette.primary.main : 'lightgray',
                                opacity: 1.5,
                            }
                        }}>
                            <Stack direction="row" alignItems="center" gap={1}>
                                {navItem.icon}
                                <Typography variant="subtitle1">{navItem.title}</Typography>
                            </Stack>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button variant="text" startIcon={<IconifyIcon icon="ri:logout-circle-line" alignSelf="center" />} sx={{
                mb: 3,
                fontSize: '16px',
                fontWeight: 500,
            }}>
                Log out
            </Button>
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
                    py: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    // boxShadow: '0 4px 2px -2px gray',
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
                        {/* <TextField InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconifyIcon icon="mdi:search" />
                                </InputAdornment>
                            ),
                        }} /> */}
                        <OutlinedInput placeholder="Search..." endAdornment={
                            <InputAdornment position="end">
                                <IconifyIcon icon="mdi:search" />
                            </InputAdornment>
                        }/>
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
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
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
                <Grid container component="main" columns={12} columnSpacing={3.75} rowSpacing={3.75} flexGrow={1} p={3} mt='85.125px' sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}>
                {children}
                </Grid>
            {/* </Box> */}
        </Box>
    );
}


export default MainLayout