import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'
import live from './assets/Image/live.png'

const App = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center'
    style={{ backgroundImage: `url(${live})` }}>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomID' element={<Room/>}/>
    </Routes>
    </div>
  )
}

export default App
