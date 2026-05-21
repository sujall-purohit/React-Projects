import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import VideoRoom from './pages/VideoRoom'
import cat from './assets/Image/hooman.jpg'

const App = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center'
    style={{ backgroundImage: `url(${cat})` }}>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomID' element={<VideoRoom/>}/>
    </Routes>
    </div>
  )
}

export default App
