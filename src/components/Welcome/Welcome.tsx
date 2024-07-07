import { Anchor, Group, List, Text, ThemeIcon, Title, rem } from '@mantine/core';
import classes from './Welcome.module.css';
import { IconCircleCheck } from '@tabler/icons-react';

export function Welcome() {
  return (
    <>
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

      <Text ta="center" size="lg" maw={580} mx="auto" my="lg">
        Refine's Mantine integration only supports Mantine v5. This template is a starter for{' '}
        <Text variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Refine v4
        </Text>{' '}
        and{' '}
        <Text variant="gradient" component="span">
          Mantine v7.
        </Text>
      </Text>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" my="lg">
        This template is created with the help of the following resources:
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
      </List>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Learn more on Mantine + Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        .
      </Text>
    </>
  );
}
