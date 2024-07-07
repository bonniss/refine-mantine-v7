# ❤️‍🔥 Refine + Mantine v7

Refine's Mantine integration [only supports Mantine v5](https://refine.dev/docs/ui-integrations/mantine/introduction). This template build on top of [Mantine v7 + Vite template](https://github.com/mantinedev/vite-template), adding:

- Headless Refine v4 integration (based on [this tutorial](https://github.com/refinedev/refine/tree/master/examples/tutorial-headless)).
- Sample resources of `blog-post` and `category`.
- Mantine-ish login page.
- `Dockerfile` to deploy via Nginx.

![](./public/screenshots/login.png)

![](./public/screenshots/home.png)

![](./public/screenshots/resource.png)

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
