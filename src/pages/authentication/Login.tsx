import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import loginBanner from 'assets/authentication-banners/login.png';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';
import { theme } from 'theme/theme';

const Login = () => {
  return (
    <Stack
      direction="row"
      bgcolor={theme.palette.background.paper}
      boxShadow={theme.shadows[3]}
      height={560}
      width={{ md: 960 }}
    >
      <Stack width="50%" m={theme.spacing(2.5)} gap={10}>
        <Link href="/">
          <Image src={logo} width="82.6px" />
        </Link>
        <Stack alignItems="center" gap={2.5} width={330} mx="auto">
          <Typography variant="h3">Login</Typography>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="email-input">
              Email
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your email"
              id="email-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-email" width="100%" height="100%" />
                </InputAdornment>
              }
              sx={{
                width: '100%',
                backgroundColor: '#F5F5F5',
              }}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="password-input">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="********"
              type="password"
              id="password-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-key" width="100%" height="100%" />
                </InputAdornment>
              }
              sx={{
                width: '100%',
                backgroundColor: '#F5F5F5',
              }}
            />
          </FormControl>
          <Typography
            variant="subtitle2"
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            {/* <Link component={Nav} to="#" underline="hover">Forget password</Link> */}
            <Link href="#" underline="hover">
              Forget password
            </Link>
          </Typography>
          <Button variant="contained" fullWidth>
            Log in
          </Button>
          <Typography variant="subtitle2" color={(theme) => theme.palette.text.secondary}>
            Don't have an account ?{' '}
            <Link href="/authentication/sign-up" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <Image
        alt="Login banner"
        src={loginBanner}
        sx={{
          width: '50%',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Stack>
  );
};

export default Login;
