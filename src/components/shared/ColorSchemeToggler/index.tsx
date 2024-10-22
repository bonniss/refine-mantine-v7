import {
  ActionIcon,
  ActionIconProps,
  Group,
  ThemeIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { FunctionComponent } from 'react';
import classes from './ColorSchemeToggler.module.css';

interface ColorSchemeToggleProps extends ActionIconProps {}

const ColorSchemeToggle: FunctionComponent<ColorSchemeToggleProps> = ({ ...props }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        variant="transparent"
        size="lg"
        aria-label="Toggle color scheme"
        {...props}
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      >
        <ThemeIcon
          size="lg"
          variant="gradient"
          gradient={
            computedColorScheme === 'dark'
              ? { from: 'orange', to: 'lime' }
              : { from: 'blue', to: 'indigo' }
          }
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ThemeIcon>
      </ActionIcon>
    </Group>
  );
};

export default ColorSchemeToggle;
