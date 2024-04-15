import { Box, Button, FormControl, InputAdornment, InputLabel, Link, OutlinedInput, Typography } from "@mui/material"
import loginBanner from "assets/authentication-banners/login.png";
import logo from "assets/logo/elegant-logo.png";
import IconifyIcon from "components/base/IconifyIcon";
import { Link as Nav } from "react-router-dom";

const Login = () => {
    return (
        <Box sx={{
            width: { md: '960px'},
            height: '560px',
            display: 'flex',
            backgroundColor: '#FFF',
            boxShadow: '0px 4px 4px 0px #00000040',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                margin: '20px',
                gap: 10
            }}>
                <Nav to="/">
                    <Box component="img" src={logo} width="82.6px"/>
                </Nav>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2.5,
                    width: '330px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <Typography variant="h3">Login</Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="email-input">
                            Email
                        </InputLabel>
                        <OutlinedInput placeholder="Enter your email" id="email-input" endAdornment={
                            <InputAdornment position="end">
                                <IconifyIcon icon="ic:baseline-email" width="100%" height="100%" />
                            </InputAdornment>
                        } sx={{
                            width: '100%',
                            backgroundColor: '#F5F5F5',
                        }}/>
                    </FormControl>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="password-input">
                            Password
                        </InputLabel>
                        <OutlinedInput placeholder="********" type="password" id="password-input" endAdornment={
                            <InputAdornment position="end">
                                <IconifyIcon icon="ic:baseline-key" width="100%" height="100%" />
                            </InputAdornment>
                        } sx={{
                            width: '100%',
                            backgroundColor: '#F5F5F5',
                        }}/>
                    </FormControl>
                    <Typography variant="subtitle2" sx={{
                        alignSelf: 'flex-end'
                    }} >
                        <Link component={Nav} to="#" underline="hover">Forget password</Link>
                    </Typography>
                    <Button variant="contained" fullWidth>Log in</Button>
                    <Typography variant="subtitle2" color={theme => theme.palette.text.secondary}>Don't have an account ? <Link component={Nav} to="/authentication/sign-up" underline="hover">Sign up</Link></Typography>
                </Box>
            </Box>
            <Box
                component="img"
                alt="Login banner"
                src={loginBanner}
                sx={{
                    width: '50%',
                    display: { xs: 'none', md: 'block'},
                }}>
            </Box>
        </Box>
    )
}

export default Login