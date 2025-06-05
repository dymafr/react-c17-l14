import { createBrowserRouter } from 'react-router';
import App from './App';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';
import Homepage from './pages/Homepage/Homepage';
import { homepageLoader } from './loaders/homepageLoader';
import { rootLoader } from './loaders/rootLoader';
import { lazy } from 'react';
import { PROFILE_ROUTES } from './pages/Profile/routes';

const Profile = lazy(
  () =>
    new Promise((res) => {
      setTimeout(async () => {
        res(await import('./pages/Profile/Profile'));
      }, 3000);
    })
);
const ProtectedRoute = lazy(() =>
  import('./components/ProtectedRoute/ProjectedRoute')
);

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: rootLoader,
    children: [
      {
        index: true,
        ErrorBoundary: ErrorBoundary,
        loader: homepageLoader,
        hydrateFallbackElement: <h2>loading ...</h2>,
        Component: Homepage,
      },
      {
        path: 'profile/:id?',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: PROFILE_ROUTES,
      },
    ],
  },
]);
