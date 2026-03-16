import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'

export default function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addLauncher' element={<AddLauncherPage/>}/>
      <Route path='/launcherDetails' element={<LauncherDetailsPage/>}/>
     </Routes>
    </>
  )
}

