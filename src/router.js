import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage/ErrorPage';
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
const ProfileForm = lazy(() =>
  import('./pages/Profile/pages/ProfileForm/ProfileForm')
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: profileLoader,
        caseSensitive: true,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: 'data',
            element: <ProfileData />,
          },
          {
            path: 'form',
            action: profileFormAction,
            element: <ProfileForm />,
          },
        ],
      },
    ],
  },
]);
