import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" my="md">
      <Button color="blue" onClick={() => setColorScheme('light')}>Light</Button>
      <Button color="dark" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button color="gray" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
