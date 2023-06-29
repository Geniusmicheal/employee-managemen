import Header from '../components/Header'
import Slider from '../components/Slider'
import { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppContext } from '../provider/AppProvider';

function Layout() {
  const navigate = useNavigate(),
  { userData, setUserData } = useAppContext();

  useEffect( () => { 
     if(!userData) navigate('/');
  } ,[userData]);
  return (
    <>
      <Header  userData={userData}/>
      <Slider setUserData={setUserData}/>
      <main id="main" className="main">
      <Suspense fallback={<div className="loader"></div>}> <Outlet/> </Suspense>
      
      </main>
    </>
  )
}

export default Layout
