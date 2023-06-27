import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./page/Home')),
Login = lazy(() => import('./page/Auth')),
Layout = lazy(() => import('./page/Layout')),
Register = lazy(() => import('./page/Auth/Register')),
AppRouter = createBrowserRouter([
   { path:"/",  element: <Suspense> <Login/> </Suspense> },
   { path:"/signup",  element: <Suspense> <Register/> </Suspense> },
   {path:"/dashboard", element: <Suspense> <Layout/> </Suspense> ,  children: [
      { index: true, element: <Home/> },
      { path:"create", element: <Home/> },
      { path:"view", element: <Home/> }
   ]}
]);

export default AppRouter;

