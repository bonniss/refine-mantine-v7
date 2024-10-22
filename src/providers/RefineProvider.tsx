import { authProvider } from '@/providers/auth-provider';
import { useI18nProvider, useLocaleResources } from '@/i18n';
import { Refine } from '@refinedev/core';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import notificationProvider from './notification-provider';

interface RefineProvidersProps {}

const RefineProviders: FunctionComponent<RefineProvidersProps> = () => {
  const { i18nProvider } = useI18nProvider();
  const resources = useLocaleResources(i18nProvider.translate);
  return (
    <Refine
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      resources={resources}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      routerProvider={routerBindings}
      notificationProvider={notificationProvider}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
        useNewQueryKeys: true,
      }}
    >
      <Outlet />
      <UnsavedChangesNotifier />
      <DocumentTitleHandler />
    </Refine>
  );
};

export default RefineProviders;
