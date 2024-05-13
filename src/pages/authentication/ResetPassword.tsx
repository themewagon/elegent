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
import logo from 'assets/logo/elegant-logo.png';
import resetPassword from 'assets/authentication-banners/reset-password.png';
import passwordUpdated from 'assets/authentication-banners/password-updated.png';
import successTick from 'assets/authentication-banners/successTick.png';
import Image from 'components/base/Image';
import { useState } from 'react';
import IconifyIcon from 'components/base/IconifyIcon';

const ResetPassword = (): React.ReactElement => {
  const [resetSuccessful, setResetSuccessful] = useState(false);

  const handleResetPassword = () => {
    const passwordField: HTMLInputElement = document.getElementById(
      'password-input',
    ) as HTMLInputElement;
    const confirmPasswordField: HTMLInputElement = document.getElementById(
      'confirm-password-input',
    ) as HTMLInputElement;

    if (passwordField.value !== confirmPasswordField.value) {
      alert("Passwords don't match");
      return;
    }
    setResetSuccessful(true);
  };

  return (
    <Stack
      direction="row"
      bgcolor={(theme) => theme.palette.background.paper}
      boxShadow={(theme) => theme.shadows[3]}
      height={560}
      width={{ md: 960 }}
    >
      <Stack width={0.5} m={(theme) => theme.spacing(2.5)} gap={10}>
        <Link href="/" width="fit-content">
          <Image src={logo} width={82.6} />
        </Link>
        {!resetSuccessful ? (
          <Stack alignItems="center" gap={3.75} width={330} mx="auto">
            <Typography variant="h3">Reset Password</Typography>
            <FormControl variant="standard" fullWidth>
              <InputLabel shrink htmlFor="password-input">
                Password
              </InputLabel>
              <OutlinedInput
                placeholder="Enter new password"
                type="password"
                id="password-input"
                endAdornment={
                  <InputAdornment position="end">
                    <IconifyIcon icon="ic:baseline-key" width={1} height={1} />
                  </InputAdornment>
                }
                sx={(theme) => ({
                  width: 1,
                  backgroundColor: theme.palette.action.focus,
                })}
              />
            </FormControl>
            <FormControl variant="standard" fullWidth>
              <InputLabel shrink htmlFor="password-input">
                Password
              </InputLabel>
              <OutlinedInput
                placeholder="Confirm password"
                type="password"
                id="confirm-password-input"
                endAdornment={
                  <InputAdornment position="end">
                    <IconifyIcon icon="ic:baseline-key" width={1} height={1} />
                  </InputAdornment>
                }
                sx={(theme) => ({
                  width: 1,
                  backgroundColor: theme.palette.action.focus,
                })}
              />
            </FormControl>
            <Button variant="contained" fullWidth onClick={handleResetPassword}>
              Reset Password
            </Button>
            <Typography
              variant="body2"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Back to{' '}
              <Link
                href="/authentication/login"
                underline="hover"
                fontSize={(theme) => theme.typography.body1.fontSize}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        ) : (
          <Stack alignItems="center" gap={3.75} width={330} mx="auto">
            <Image src={successTick} />
            <Typography variant="h3">Reset Successfully</Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color={(theme) => theme.palette.text.secondary}
            >
              Your Elegent log in password has been updated successfully
            </Typography>
            <Button variant="contained" fullWidth LinkComponent={Link} href="/authentication/login">
              Continue to Login
            </Button>
          </Stack>
        )}
      </Stack>
      <Image
        alt={resetSuccessful ? 'Reset done' : 'Login banner'}
        src={resetSuccessful ? passwordUpdated : resetPassword}
        sx={{
          width: 0.5,
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Stack>
  );
};

export default ResetPassword;
