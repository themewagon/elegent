import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { PropsWithChildren, forwardRef, useState } from "react"
import IconifyIcon from "components/base/IconifyIcon";
import logo from "assets/logo/elegant-logo.png";
import { Link as Nav, useLocation } from "react-router-dom";
import { theme } from "theme/theme";
import Topbar from "components/sections/dashboard/common/Topbar";


export const drawerWidth = 278;

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

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const RouterLink = forwardRef(({ href, ...other }: {
        href: string
    }) => <Nav to={href} {...other} />);

    const drawer = (
        <Box sx={{
            backgroundColor: 'white',
            height: '100%',
            overflowY: 'overlay',
            margin: { sm: '30px' },
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            scrollbarWidth: 'none',
        }}>
            <Box component="img" src={logo} sx={{
                marginTop: '50px',
                mx: '40px',
                mb: '30px',
            }} />
            <List sx={{
                mx: '20px',
                flex: '1 1 auto',
            }}>
                {navItems.map((navItem, index) => (
                    <ListItem key={index} disablePadding sx={{
                        my: '10px',
                        borderRadius: '8px',
                        backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
                        color: pathname === navItem.path ? '#FFF' : theme.palette.text.secondary,
                        ":hover": {
                            backgroundColor: pathname === navItem.path ? theme.palette.primary.main : 'lightgray',
                            opacity: 1.5,
                        },
                        // ":active": {
                        //     backgroundColor: theme.palette.primary.main,
                        //     color: '#FFF',
                        // }
                    }}>
                        <ListItemButton LinkComponent={RouterLink} href={navItem.path}>
                            <ListItemIcon>
                                {navItem.icon}
                            </ListItemIcon>
                            <ListItemText>{navItem.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List sx={{
                mx: '20px',
            }}>
                <ListItem disablePadding sx={{
                    my: '20px',
                    mx: 0,
                }}>
                    <ListItemButton LinkComponent={RouterLink} href="/" sx={{
                        backgroundColor: '#FFF',
                        color: theme.palette.primary.main,
                        ":hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: '#FFF',
                            opacity: 1.5,
                            "": {
                                color: theme.palette.background.paper,
                            }
                        },

                    }}>
                        <ListItemIcon sx={{
                            ":hover": {
                                color: theme.palette.background.paper,
                            },
                        }}>
                            <IconifyIcon icon="ri:logout-circle-line" />
                        </ListItemIcon>
                        <ListItemText>Log out</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: theme => theme.palette.background.default }}>
            {/* <CssBaseline /> */}
            <Topbar 
                handleDrawerToggle={handleDrawerToggle} 
                open={open} 
                handleClick={handleClick} 
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 0, backgroundColor: theme => theme.palette.background.paper },
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
            ></Box> */}
            <Grid container component="main" columns={12} columnSpacing={3.75} rowSpacing={3.75} flexGrow={1} pt={2.5} pr={3.75} mt='85.125px' sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                pl: { sm: 0 },
            }}>
                {children}
            </Grid>
        </Box>
    );
}


export default MainLayout