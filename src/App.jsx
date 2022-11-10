import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Router from './routers'

function App() {

  return (
    <div className="min-h-screen bg-slate-400">
       {/* <Home />
       <Login /> */}
       <Router/>

    </div>
  )
}

export default App
