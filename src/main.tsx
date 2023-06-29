import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap-icons/bootstrap-icons.min.css';

import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom'
import AppProvider from './provider/AppProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={AppRouter}/>
    </AppProvider>
  </React.StrictMode>,
)
