import { Anchor, List, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import WithTransition from '../shared/WithTransition';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <WithTransition transition="fade-down">
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Refine
        </Text>{' '}
        <Text inherit variant="text" component="span">
          +
        </Text>{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <div className="space-y-8 py-6">
        <section className="text-center flex flex-col gap-4">
          <Text c="dimmed" component="span">
            Refine&apos;s Mantine integration{' '}
            <Anchor
              target="_blank"
              href="https://refine.dev/docs/ui-integrations/mantine/introduction"
            >
              only supports Mantine v5
            </Anchor>
            .{' '}
          </Text>
          <p className="text-3xl">
            This template is a combination of
            <br />
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              Refine v4
            </Text>{' '}
            <br />
            <Text inherit variant="gradient" component="span">
              Mantine v7
            </Text>
            <br />
            <span className="bg-gradient-to-tr from-10% from-fuchsia-200 via-50% via-purple-600 to-70% to-fuchsia-400 bg-clip-text text-transparent">
              Tailwind v4
            </span>
          </p>
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
