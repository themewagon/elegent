import { Avatar, Box, ListItem, Stack, Typography } from "@mui/material"
import IconifyIcon from "components/base/IconifyIcon"
import roselle from "assets/new-customers/roselle.jpg";
import jone from "assets/new-customers/jone.png";
import darron from "assets/new-customers/darron.png";
import leatrice from "assets/new-customers/leatrice.png";
import mailIcon from "assets/new-customers/mail-icon.png";

const NewCustomers = () => {
    return (
        <Box sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
            }}>
                <Typography variant="subtitle1" color={theme => theme.palette.text.primary}>New Customers</Typography>
                <IconifyIcon icon="ph:dots-three-outline-fill" />
            </Box>
            <Stack direction="column" sx={{
                // padding: '0 20px',
            }}>
                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                        <Avatar src={roselle} />
                        <Box component="div">
                            <Typography variant="body1" color={theme => theme.palette.text.primary}>Roselle Ehrman</Typography>
                            <Typography variant="body2" color={theme => theme.palette.text.secondary}>Brazil</Typography>
                        </Box>
                    </Box>
                    <Avatar src={mailIcon} />
                </ListItem>
                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                        <Avatar src={jone} />
                        <Box component="div">
                            <Typography variant="body1" color={theme => theme.palette.text.primary}>Jone Smith</Typography>
                            <Typography variant="body2" color={theme => theme.palette.text.secondary}>Australia</Typography>
                        </Box>
                    </Box>
                    <Avatar src={mailIcon} />
                </ListItem>
                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                        <Avatar src={darron} />
                        <Box component="div">
                            <Typography variant="body1" color={theme => theme.palette.text.primary}>Darron Handler</Typography>
                            <Typography variant="body2" color={theme => theme.palette.text.secondary}>Pakistan</Typography>
                        </Box>
                    </Box>
                    <Avatar src={mailIcon} />
                </ListItem>
                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                        <Avatar src={leatrice} />
                        <Box component="div">
                            <Typography variant="body1" color={theme => theme.palette.text.primary}>Leatrice Kulik</Typography>
                            <Typography variant="body2" color={theme => theme.palette.text.secondary}>Mascow</Typography>
                        </Box>
                    </Box>
                    <Avatar src={mailIcon} />
                </ListItem>
            </Stack>
        </Box>
    )
}

export default NewCustomers