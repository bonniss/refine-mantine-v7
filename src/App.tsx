import '@mantine/core/styles.css';
import './styles/app.css';

import { MantineProvider } from '@mantine/core';

import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
