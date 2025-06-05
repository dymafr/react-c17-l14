import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import { RouterProvider } from 'react-router';
import { ROUTER } from './routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={ROUTER} />
  </StrictMode>
);
