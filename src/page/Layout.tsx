import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Slider from '../components/Slider'

function Layout() {
  return (
    <>
      <Header/>
      <Slider/>
      <main id="main" className="main">
      <Suspense fallback={<div className="loader"></div>}> <Outlet/> </Suspense>
      
      </main>
    </>
  )
}

export default Layout
