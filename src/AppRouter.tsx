import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./page/Home')),
Login = lazy(() => import('./page/Auth')),
Layout = lazy(() => import('./page/Layout')),
Employee = lazy(() => import('./page/Employee')),
Register = lazy(() => import('./page/Auth/Register')),
CreateEmployee = lazy(() => import('./page/Employee/Create')),
AppRouter = createBrowserRouter([
   { path:"/",  element: <Suspense> <Login/> </Suspense> },
   { path:"/signup",  element: <Suspense> <Register/> </Suspense> },
   {path:"/dashboard", element: <Suspense> <Layout/> </Suspense> ,  children: [
      { index: true, element: <Home/> },
      { path:"view", element: <Employee/> },
      { path:"create", element: <CreateEmployee/> }
   ]}
]);

export default AppRouter;

