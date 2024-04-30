import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import signupBanner from 'assets/authentication-banners/signup.png';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';

const SignUp = () => {
  return (
    <Box
      sx={{
        width: { md: '960px' },
        height: '591px',
        display: 'flex',
        backgroundColor: '#FFF',
        boxShadow: '0px 4px 4px 0px #00000040',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          margin: '20px',
          gap: 10,
        }}
      >
        <Link href="/">
          <Image src={logo} width="82.6px" />
        </Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2.5,
            width: '330px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Typography variant="h3">Signup</Typography>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="name-input1">
              Name
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your full name"
              id="name-input1"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="mdi:user" width="100%" height="100%" />
                </InputAdornment>
              }
              sx={{
                width: '100%',
                backgroundColor: '#F5F5F5',
              }}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="email-input1">
              Email
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your email"
              id="email-input1"
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
            <InputLabel shrink htmlFor="password-input2">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="Create password"
              type="password"
              id="password-input2"
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
          <Button variant="contained" fullWidth>
            Sign up
          </Button>
          <Typography variant="subtitle2" color={(theme) => theme.palette.text.secondary}>
            Already have an account ?{' '}
            <Link href="/authentication/login" underline="hover">
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
      <Image
        alt="Signup banner"
        src={signupBanner}
        sx={{
          width: '50%',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>
  );
};

export default SignUp;
