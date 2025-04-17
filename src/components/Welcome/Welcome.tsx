import { Anchor, List, Text, ThemeIcon, Tooltip, rem } from '@mantine/core';
import { IconBrandGithubFilled, IconCircleCheck } from '@tabler/icons-react';
import WithTransition from '../shared/WithTransition';

export function Welcome() {
  return (
    <WithTransition transition="fade-down">
      <h1 className="text-center text-5xl md:text-7xl space-x-4 font-bold">
        <span className="bg-gradient-to-tr from-10% from-pink-400 via-50% via-yellow-600 to-70% to-pink-500 bg-clip-text text-transparent">
          Refine
        </span>
        <span>
          ❅
        </span>
        <span className="bg-gradient-to-tr from-10% from-blue-400 via-50% via-sky-600 to-70% to-blue-500 bg-clip-text text-transparent">
          Mantine
        </span>
      </h1>
      <div className="space-y-8 py-6">
        <section className="text-center flex flex-col gap-4">
          <span className="text-base">
            Refine&apos;s Mantine integration{' '}
            <Anchor
              target="_blank"
              href="https://refine.dev/docs/ui-integrations/mantine/introduction"
            >
              only supports Mantine v5
            </Anchor>
            .{' '}
          </span>
          <div className="text-2xl">
            This template is a combination of
            <br />
            <span
              className="bg-gradient-to-tr from-10% from-pink-300 via-50% via-yellow-600 to-70% to-pink-500 bg-clip-text text-transparent"
            >
              Refine v4
            </span>
            <br />
            <span
              className="bg-gradient-to-tr from-10% from-blue-300 via-50% via-sky-600 to-70% to-blue-500 bg-clip-text text-transparent"
            >
              Mantine v7
            </span>
            <br />
            <span className="bg-gradient-to-tr from-10% from-fuchsia-300 via-50% via-purple-600 to-70% to-fuchsia-500 bg-clip-text text-transparent">
              Tailwind v4
            </span>
          </div>
        </section>
        <section className="text-center">
          <a href="https://github.com/bonniss/refine-mantine-v7" target="_blank" rel="noreferrer">
            <Tooltip label="View on GitHub" position="bottom" withArrow>
              <ThemeIcon className="scale-105" size="xl" radius="xl" variant="light" color="dark">
                <IconBrandGithubFilled className="w-8 h-8" />
              </ThemeIcon>
            </Tooltip>
          </a>
        </section>

        <section className="space-y-4">
          <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" my="xs">
            This template can be created with the help to the following resources:
          </Text>
          <List ta="center">
            <List.Item
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <Anchor target="_blank" href="https://github.com/mantinedev/vite-template">
                Mantine + Vite template
              </Anchor>{' '}
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <Anchor
                target="_blank"
                href="https://refine.dev/docs/guides-concepts/usage-with-existing-projects/#router-examples"
              >
                Refine Docs - Usage with Existing Projects
              </Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <Anchor
                target="_blank"
                href="https://github.com/refinedev/refine/tree/master/examples/tutorial-headless"
              >
                Refine - Headless tutorial
              </Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <Anchor target="_blank" href="https://tailwindcss.com/docs/installation/using-vite">
                Tailwind v4 docs
              </Anchor>
            </List.Item>
          </List>
        </section>
      </div>
    </WithTransition>
  );
}
