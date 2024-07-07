import { Authenticated, ErrorComponent } from '@refinedev/core';
import { CatchAllNavigate, NavigateToResource } from '@refinedev/react-router-v6';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/Home.page';
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from './pages/blog-posts';
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from './pages/categories';
import { ForgotPassword } from './pages/forgotPassword';
import { Login } from './pages/login';
import { Register } from './pages/register';
import RefineProvider from './providers/RefineProvider';

const router = createBrowserRouter([
  {
    Component: RefineProvider,
    children: [
      {
        element: (
          <Authenticated key="authenticated-inner" fallback={<CatchAllNavigate to="/login" />}>
            <Layout>
              <Outlet />
            </Layout>
          </Authenticated>
        ),
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/blog-posts',
            children: [
              {
                index: true,
                element: <BlogPostList />,
              },
              {
                path: 'create',
                element: <BlogPostCreate />,
              },
              {
                path: 'edit/:id',
                element: <BlogPostEdit />,
              },
              {
                path: 'show/:id',
                element: <BlogPostShow />,
              },
            ],
          },
          {
            path: '/categories',
            children: [
              {
                index: true,
                element: <CategoryList />,
              },
              {
                path: 'create',
                element: <CategoryCreate />,
              },
              {
                path: 'edit/:id',
                element: <CategoryEdit />,
              },
              {
                path: 'show/:id',
                element: <CategoryShow />,
              },
            ],
          },
          {
            path: '*',
            element: <ErrorComponent />,
          },
        ],
      },
      {
        element: (
          <Authenticated key="authenticated-outer" fallback={<Outlet />}>
            <NavigateToResource />
          </Authenticated>
        ),
        children: [
          { path: '/login', element: <Login /> },
          { path: '/register', element: <Register /> },
          { path: '/forgot-password', element: <ForgotPassword /> },
        ],
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
