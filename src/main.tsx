import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap-icons/bootstrap-icons.min.css';

import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>,
)
