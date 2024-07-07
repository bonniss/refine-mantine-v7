import { authProvider } from '@/authProvider';
import { Refine } from '@refinedev/core';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

interface RefineProvidersProps {}

const RefineProviders: FunctionComponent<RefineProvidersProps> = () => {
  return (
    <Refine
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      routerProvider={routerBindings}
      authProvider={authProvider}
      resources={[
        {
          name: 'blog_posts',
          list: '/blog-posts',
          create: '/blog-posts/create',
          edit: '/blog-posts/edit/:id',
          show: '/blog-posts/show/:id',
          meta: {
            canDelete: true,
          },
        },
        {
          name: 'categories',
          list: '/categories',
          create: '/categories/create',
          edit: '/categories/edit/:id',
          show: '/categories/show/:id',
          meta: {
            canDelete: true,
          },
        },
      ]}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
        useNewQueryKeys: true,
        projectId: '8ucKx3-EUpElI-cKFUU6',
      }}
    >
      <Outlet />
      <UnsavedChangesNotifier />
      <DocumentTitleHandler />
    </Refine>
  );
};

export default RefineProviders;
