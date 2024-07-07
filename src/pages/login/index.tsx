import { Alert, Box, Button, Center, Code, CopyButton, Stack } from '@mantine/core';
import { AuthPage } from '@refinedev/core';
import { IconCheck, IconInfoCircle } from '@tabler/icons-react';
import { useEffect } from 'react';
import classes from './login.module.css';

const defaultUser = {
  email: 'demo@refine.dev',
  password: 'demodemo',
};

export const Login = () => {
  useEffect(() => {
    document.querySelector('h1')!.textContent = 'Refine + Mantine = ❤️‍🔥';
  }, []);

  return (
    <Center h={'100vh'}>
      <Stack>
        <Alert variant="light" color="blue" title="Default user" icon={<IconInfoCircle />}>
          Email:
          <CopyButton value={defaultUser.email}>
            {({ copied, copy }) => (
              <Button
                variant="transparent"
                size="compact-xs"
                color={copied ? 'teal' : 'blue'}
                onClick={copy}
              >
                <Code>{defaultUser.email}</Code> {copied && <IconCheck size={20} />}
              </Button>
            )}
          </CopyButton>
          <br /> Password:{' '}
          <CopyButton value={defaultUser.email}>
            {({ copied, copy }) => (
              <Button
                variant="transparent"
                size="compact-xs"
                color={copied ? 'teal' : 'blue'}
                onClick={copy}
              >
                <Code>{defaultUser.password}</Code> {copied && <IconCheck size={20} />}
              </Button>
            )}
          </CopyButton>
        </Alert>
        <Box className={classes.normalizedForm} px="xl" py="md" bg="gray">
          <AuthPage type="login" />
        </Box>
      </Stack>
    </Center>
  );
};
