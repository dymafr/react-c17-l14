import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';
import { rootLoader } from './loaders/rootLoader';
import { profileLoader } from './loaders/profileLoader';
import { profileFormAction } from './actions/profileFormAction';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ProfileOverview = lazy(() =>
  import('./pages/Profile/pages/ProfileOverview/ProfileOverview')
);
const ProfileData = lazy(() =>
  import('./pages/Profile/pages/ProfileData/ProfileData')
);
const ProfileForm = lazy(
  () =>
    new Promise((res) =>
      setTimeout(
        () => res(import('./pages/Profile/pages/ProfileForm/ProfileForm')),
        2000
      )
    )
);

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: rootLoader,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/profile',
        Component: Profile,
        loader: profileLoader,
        caseSensitive: true,
        children: [
          {
            index: true,
            Component: ProfileOverview,
          },
          {
            path: 'data',
            Component: ProfileData,
          },
          {
            path: 'form',
            action: profileFormAction,
            Component: ProfileForm,
          },
        ],
      },
    ],
  },
]);
