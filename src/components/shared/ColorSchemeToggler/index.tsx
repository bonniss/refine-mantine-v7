import { FunctionComponent } from 'react';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

type ColorSchemeToggleProps = {};

const ColorSchemeToggle: FunctionComponent<ColorSchemeToggleProps> = () => {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const toggle = () =>
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');

  const renderIcon = (
    Icon: typeof IconSun,
    isVisible: boolean,
    color: string
  ) => (
    <Icon
      className={`
        absolute inset-0 m-auto transition-all duration-300 transform
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        ${color}
      `}
      stroke={2}
      size={22}
    />
  );

  return (
    <button
      onClick={toggle}
      type="button"
      className={`
        inline-flex items-center justify-center
        cursor-pointer
        opacity-90
        w-9 h-9 rounded-full p-0
        transition-colors duration-300
        appearance-none select-none
        ${
          colorScheme === 'light'
            ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700'
            : 'bg-indigo-900 hover:bg-indigo-800 text-indigo-300'
        }
      `}
    >
      <div className="relative w-5 h-5">
        {renderIcon(IconSun, colorScheme === 'light', 'text-yellow-600')}
        {renderIcon(IconMoon, colorScheme === 'dark', 'text-indigo-300')}
      </div>
    </button>
  );
};

export default ColorSchemeToggle;
